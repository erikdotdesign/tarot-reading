import style from "./style";
import { State, TarotCard } from "./types";

import Card, { CARD_WIDTH, CARD_HEIGHT } from "./Card";

const { widget } = figma;
const { AutoLayout } = widget;

const CardSpread = ({
  state,
  setState
}: {
  state: State;
  setState: (state: State) => void;
}) => {
  switch(state.spread) {
    case 3:
      return (
        state.cards.length > 0 &&
        <AutoLayout
          width="fill-parent"
          height="fill-parent"
          verticalAlignItems="center"
          horizontalAlignItems="center"
          spacing={style.spacing.xLarge}>
          {
            state.cards.map((card, i) => (
              <Card
                key={`${state.timestamp}-${i}`}
                card={card}
                state={state}
                setState={setState} />
            ))
          }
        </AutoLayout>
      );
    case 5:
      return (
        state.cards.length > 0 &&
        <AutoLayout
          width="fill-parent"
          height="fill-parent"
          verticalAlignItems="center"
          horizontalAlignItems="center"
          spacing={style.spacing.xLarge}>
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
              {
                <Card
                  card={state.cards[4]} 
                  state={state}
                  setState={setState} />
              }
            </AutoLayout>
            <AutoLayout 
              width="fill-parent"
              verticalAlignItems="center"
              horizontalAlignItems="center"
              spacing={style.spacing.xLarge}>
              {
                [1,0,2].map((i) => (
                  <Card
                    key={`${state.timestamp}-${i}`}
                    card={(state.cards as TarotCard[])[i]}
                    state={state}
                    setState={setState} />
                ))
              }
            </AutoLayout>
            <AutoLayout 
              width="fill-parent"
              verticalAlignItems="center"
              horizontalAlignItems="center">
              {
                <Card
                  card={state.cards[3]}
                  state={state}
                  setState={setState} />
              }
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
      );
    case 10:
      return (
        state.cards.length > 0 &&
        <AutoLayout
          width="fill-parent"
          height="fill-parent"
          verticalAlignItems="center"
          horizontalAlignItems="center"
          spacing={style.spacing.xLarge}>
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
              {
                <Card
                  card={state.cards[4]}
                  state={state}
                  setState={setState} />
              }
            </AutoLayout>
            <AutoLayout 
              width="fill-parent"
              verticalAlignItems="center"
              horizontalAlignItems="center"
              spacing={style.spacing.xLarge}>
              {
                [3,0,5].map((i) => (
                  <Card
                    key={`${state.timestamp}-${i}`}
                    card={(state.cards as TarotCard[])[i]}
                    state={state}
                    setState={setState} />
                ))
              }
              <Card
                card={state.cards[1]}
                state={state}
                setState={setState}
                positioning="absolute"
                rotation={90}
                y={CARD_HEIGHT - 40}
                x={548 - 40} />
            </AutoLayout>
            <AutoLayout 
              width="fill-parent"
              verticalAlignItems="center"
              horizontalAlignItems="center">
              {
                <Card
                  card={state.cards[2]}
                  state={state}
                  setState={setState} />
              }
            </AutoLayout>
          </AutoLayout>
          <AutoLayout
            positioning="absolute"
            direction="vertical"
            x={1240 - CARD_WIDTH}
            y={0}>
            {
              [9,8,7,6].map((i) => (
                  <Card
                    key={`${state.timestamp}-${i}`}
                    card={(state.cards as TarotCard[])[i]}
                    state={state}
                    setState={setState} />
                ))
            }
          </AutoLayout>
        </AutoLayout>
      );
    default:
      return null;
  }
};

export default CardSpread;