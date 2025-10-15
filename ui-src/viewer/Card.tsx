import { TarotCard } from "../../widget-src/types";
import CardRotator from "./CardRotator";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Card = ({ 
  card, 
  width = 614,
  height = 1024,
  isFlipped = false 
}: { 
  card: TarotCard | null; 
  width?: number;
  height?: number;
  isFlipped?: boolean
}) => {
  const scale = 0.003;

  return (
    card &&
    <CardRotator
      width={width}
      height={height}
      scale={scale}
      reversed={card.reversed}
      initialFlipped={isFlipped}>
      <CardFront card={card} width={width} height={height} />
      <CardBack width={width} height={height} />
    </CardRotator>
  );
};

export default Card;