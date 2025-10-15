import { Canvas } from "@react-three/fiber";
import { Stage } from "@react-three/drei";
import { TarotCard } from "../../widget-src/types";
import Card from "./Card";

const Viewer = ({ 
  card,
  canvasRef
}: {
  card: TarotCard | null;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
}) => {
  return (
    <Canvas
      ref={canvasRef}
      shadows>
      <color attach="background" args={['#FA7373']} />
      <Stage 
        intensity={0}
        shadows="contact"
        environment={null}>
        <Card card={card} />
      </Stage>
    </Canvas>
  );
};

export default Viewer;