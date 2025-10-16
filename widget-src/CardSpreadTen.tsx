import { State, TarotCard } from "./types";

import Card, { CARD_WIDTH } from "./Card";

import CardSpreadFive from "./CardSpreadFive";

const { widget } = figma;
const { AutoLayout } = widget;

const CardSpreadTen = ({
  cross,
  staff,
  state,
  setState
}: {
  cross: {
    top: number;
    middle: number[];
    bottom: number;
    center: number;
  };
  staff: number[];
  state: State;
  setState: (state: State) => void;
}) => {
  return (
    <>
      <CardSpreadFive
        {...cross}
        state={state}
        setState={setState} />
      <AutoLayout
        positioning="absolute"
        direction="vertical"
        x={1240 - CARD_WIDTH}
        y={0}>
        {
          staff.map((i) => (
            <Card
              key={`${state.timestamp}-${i}`}
              card={(state.cards as TarotCard[])[i]}
              state={state}
              setState={setState} />
          ))
        }
      </AutoLayout>
    </>
  );
};

export default CardSpreadTen;