import { State, TarotCard } from "./types";
import style from "./style";

import CardImage from "./CardImage";

const { widget } = figma;
const { AutoLayout, Text } = widget;

export const CARD_WIDTH = 144;
export const CARD_HEIGHT = 224;

export const CARD_WIDTH_LARGE = 144 * 2;
export const CARD_HEIGHT_LARGE = 224 * 2;

const Card = ({
  large = false,
  card,
  state,
  setState,
  ...props
}: {
  large?: boolean;
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
      width={large ? CARD_WIDTH_LARGE : CARD_WIDTH}
      height={large ? CARD_HEIGHT_LARGE : CARD_HEIGHT}
      verticalAlignItems="center"
      horizontalAlignItems="center"
      fill={isSelected ? style.color.red : `#00000000`}
      strokeWidth={large ? style.strokeWidth.medium : style.strokeWidth.small}
      stroke={isSelected ? style.color.black : undefined}
      strokeAlign="inside"
      onClick={handleClick}
      {...props}>
      <CardImage
        card={card}
        large={large} />
      <AutoLayout
        positioning="absolute"
        x={0}
        y={0}
        width={large ? 48 : 24}
        height={large ? 48 : 24}
        verticalAlignItems="center"
        horizontalAlignItems="center"
        stroke={style.color.black}
        strokeWidth={large ? style.strokeWidth.medium : style.strokeWidth.small}
        fill={isSelected ? style.color.red : style.color.black}>
        <Text 
          fontFamily={style.fontFamily.body}
          fontSize={large ? style.textStyle.header.fontSize : style.textStyle.body.fontSize}
          lineHeight={large ? style.textStyle.header.lineHeight : style.textStyle.body.lineHeight}
          fontWeight={style.fontWeight.bold}
          fill={isSelected ? style.color.black : style.color.white}>
          {number}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
};

export default Card;