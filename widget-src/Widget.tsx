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
      spacing={style.spacing.large}
      verticalAlignItems="start">
      <Board
        state={state}
        setState={setState}
        drawCards={drawCards} />
      <CardInspector
        state={state} />
    </AutoLayout>
  );
};

export default Widget;