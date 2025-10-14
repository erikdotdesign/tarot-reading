import { TarotCard } from "./types";
import style from "./style";

import CardImage from "./CardImage";

const { widget } = figma;
const { AutoLayout, Image, Text } = widget;

const Card = ({
  card,
  isSelected,
  index,
  onClick
}: {
  card: TarotCard;
  isSelected: boolean;
  index: number;
  onClick: (card: TarotCard) => void;
}) => {
  return (
    <AutoLayout
      name={card.name}
      width={144}
      height={224}
      verticalAlignItems="center"
      horizontalAlignItems="center"
      fill={isSelected ? style.color.red : style.color.bg.z0}
      strokeWidth={style.strokeWidth.small}
      stroke={isSelected ? style.color.black : undefined}
      strokeAlign="inside"
      onClick={() => onClick(card)}>
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
          {index}
        </Text>
      </AutoLayout>
    </AutoLayout>
  );
};

export default Card;