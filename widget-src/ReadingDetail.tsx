import { CardDrawSpread, State } from "./types";

import Button from "./Button";
import style from "./style";

const { widget } = figma;
const { AutoLayout } = widget;

const ReadingDetail = ({
  state,
  setState
}: {
  state: State;
  setState: (state: State) => void;
}) => {
  return (
    <AutoLayout
      direction="horizontal"
      strokeWidth={style.strokeWidth.medium}
      stroke={style.color.black}
      strokeAlign="inside">
      {
        [3,5,10].map((type) => (
          <Button
            key={type}
            active={state.spread === type}
            width={160}
            onClick={() => {
              if (state.spread === type) return;
              setState({...state, spread: type as CardDrawSpread});
            }}>
            {`${type} cards`}
          </Button>
        ))
      }
    </AutoLayout>
  );
};

export default ReadingDetail;