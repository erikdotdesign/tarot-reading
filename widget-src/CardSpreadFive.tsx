import style from "./style";
import { State } from "./types";

import Card, { CARD_HEIGHT } from "./Card";

import CardSpreadThree from "./CardSpreadThree";

const { widget } = figma;
const { AutoLayout } = widget;

const CardSpreadFive = ({
  top,
  middle,
  bottom,
  center,
  state,
  setState
}: {
  state: State;
  top: number;
  middle: number[];
  bottom: number;
  center?: number;
  setState: (state: State) => void;
}) => {
  return (
    <AutoLayout
      width="fill-parent"
      height="fill-parent"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      direction="vertical"
      spacing={style.spacing.large}>
      <AutoLayout 
        width="fill-parent"
        verticalAlignItems="center"
        horizontalAlignItems="center">
        <Card
          card={state.cards[top]}
          state={state}
          setState={setState} />
      </AutoLayout>
      <AutoLayout 
        width="fill-parent"
        verticalAlignItems="center"
        horizontalAlignItems="center"
        spacing={style.spacing.xLarge}>
        <CardSpreadThree
          cards={middle}
          state={state}
          setState={setState} />
        {
          center
          ? <Card
              card={state.cards[center]}
              state={state}
              setState={setState}
              positioning="absolute"
              rotation={90}
              y={CARD_HEIGHT - 40}
              x={548 - 40} />
          : null
        }
      </AutoLayout>
      <AutoLayout 
        width="fill-parent"
        verticalAlignItems="center"
        horizontalAlignItems="center">
        <Card
          card={state.cards[bottom]}
          state={state}
          setState={setState} />
      </AutoLayout>
    </AutoLayout>
  );
};

export default CardSpreadFive;