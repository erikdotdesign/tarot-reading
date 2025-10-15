import { State, TarotCard } from "./types";
import style from "./style";
import useTarotDeck from "./useTarotDeck";
import Board from "./Board";
import CardInspector from "./CardInspector";

const { widget } = figma;
const { AutoLayout, useSyncedState, useEffect, Image, Text, Input, waitForTask } = widget;

const Widget = () => {
  const [state, setState] = useSyncedState<State>("state", {
    question: '',
    spread: 10,
    cards: [],
    timestamp: null,
    selected: null
  });
  
  const { drawCards } = useTarotDeck({state, setState});

  const handleCardClick = async (card: TarotCard) => {
    await new Promise((resolve) => {
      figma.showUI(__html__, {width: 564, height: 564, themeColors: true});
      setState({ ...state, selected: card });
    })
  }

  const handleUIMessages = async (msg: any) => {
    if (msg.type === "ui-open") {
      hydrateUIState();
    }
  };

  const hydrateUIState = () => {
    try {
      figma.ui.postMessage({
        type: "card-info",
        payload: state.selected
      });
    } catch(err) {}
  }

  useEffect(() => {
    figma.ui.on("message", handleUIMessages);
    return () => figma.ui.off("message", handleUIMessages);
  });

  return (
    <AutoLayout
      spacing={style.spacing.xLarge}
      verticalAlignItems="center">
      <Board
        state={state}
        setState={setState}
        drawCards={drawCards} />
      <CardInspector
        state={state}
        setState={setState} />
    </AutoLayout>
  );
};

export default Widget;