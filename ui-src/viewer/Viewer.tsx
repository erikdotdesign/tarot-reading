import { Canvas } from "@react-three/fiber";
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
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={["#f2f2f2"]} />
      <ambientLight intensity={2} />
      {
        card
        ? <Card card={card} />
        : null
      }
    </Canvas>
  );
};

export default Viewer;