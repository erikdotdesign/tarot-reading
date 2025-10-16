import { TarotCard } from "./types";
import style from "./style";
import { getCardImage } from "./cardImages";

const { widget } = figma;
const { Image } = widget;

const CardImage = ({
  large = false,
  card,
  ...props
}: {
  large?: boolean;
  card: TarotCard | "back";
} & WidgetJSX.WidgetJSXImageProps) => {
  return (
    <Image
      width={large ? 240 : 120}
      height={large ? 400: 200}
      src={getCardImage(card)}
      strokeWidth={large ? style.strokeWidth.medium : style.strokeWidth.small}
      stroke={style.color.black}
      strokeAlign="outside"
      rotation={card !== "back" ? card.reversed ? 180 : 0 : 0}
      {...props} />
  );
};

export default CardImage;