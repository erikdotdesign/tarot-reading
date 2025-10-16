import style from "./style";
import { State } from "./types";

import CardSpreadThree from "./CardSpreadThree";
import CardSpreadFive from "./CardSpreadFive";
import CardSpreadTen from "./CardSpreadTen";

const { widget } = figma;
const { AutoLayout } = widget;

const CardSpread = ({
  state,
  setState
}: {
  state: State;
  setState: (state: State) => void;
}) => {
  if (state.cards.length === 0) return;

  const SpreadRouter = () => {
    switch(state.spread) {
      case 3:
        return (
          <CardSpreadThree
            cards={[0,1,2]}
            state={state}
            setState={setState} />
        );
      case 5:
        return (
          <CardSpreadFive
            top={4}
            middle={[1,0,2]}
            bottom={3}
            state={state}
            setState={setState} />
        );
      case 10:
        return (
          <CardSpreadTen
            cross={{
              top: 4,
              middle: [3,0,5],
              bottom: 2,
              center: 1
            }}
            staff={[6,7,8,9]}
            state={state}
            setState={setState} />
        );
      default:
        return null;
    }
  };

  return (
    <AutoLayout
      width="fill-parent"
      height="fill-parent"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      spacing={style.spacing.xLarge}>
      { SpreadRouter() }
    </AutoLayout>
  )
};

export default CardSpread;