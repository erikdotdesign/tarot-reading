import { State, TarotCard } from "./types";
import style from "./style";

import CardImage from "./CardImage";

const { widget } = figma;
const { AutoLayout, Image, Text } = widget;

export const CARD_WIDTH = 144;
export const CARD_HEIGHT = 224;

const Card = ({
  card,
  state,
  setState,
  ...props
}: {
  card: TarotCard;
  state: State;
  setState: (state: State) => void;
} & WidgetJSX.WidgetJSXAutoLayoutProps) => {

  const isSelected = state.selected ? state.selected.name === card.name : false;
  const number = state.cards.indexOf(card) + 1;
  const handleClick = () => {
    if (isSelected) setState({...state, selected: null});
    else setState({...state, selected: card});
  }

  return (
    <AutoLayout
      name={card.name}
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
      verticalAlignItems="center"
      horizontalAlignItems="center"
      fill={isSelected ? style.color.red : `#00000000`}
      strokeWidth={style.strokeWidth.small}
      stroke={isSelected ? style.color.black : undefined}
      strokeAlign="inside"
      onClick={handleClick}
      {...props}>
      <CardImage
        card={card} />
      <AutoLayout
        positioning="absolute"
        x={0}
        y={0}
        width={24}
        height={24}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        stroke={style.color.black}
        strokeWidth={style.strokeWidth.small}
        fill={isSelected ? style.color.red : style.color.black}>
        <Text 
          {...style.textStyle.body} 
          fontWeight={style.fontWeight.bold}
          fill={isSelected ? style.color.black : style.color.white}>
          {number}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
};

export default Card;