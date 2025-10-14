import { TarotCard } from "./types";
import style from "./style";
import { getCardImage } from "./cardImages";

const { widget } = figma;
const { Image } = widget;

const CardImage = ({
  display = false,
  card,
  ...props
}: {
  display?: boolean;
  card: TarotCard | "back";
} & WidgetJSX.WidgetJSXImageProps) => {
  return (
    <Image
      width={display ? 220 : 120}
      height={display ? 400: 200}
      src={getCardImage(card)}
      strokeWidth={display ? style.strokeWidth.medium : style.strokeWidth.small}
      stroke={style.color.black}
      strokeAlign="outside"
      rotation={card !== "back" ? card.reversed ? 180 : 0 : 0}
      {...props} />
  );
};

export default CardImage;