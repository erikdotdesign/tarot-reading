import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { getCardImage } from "../cardImages";

import { TarotCard } from "../../widget-src/types";

const CardFront = ({ 
  card, 
  width,
  height
}: { 
  card: TarotCard; 
  width: number;
  height: number;
}) => {
  const frontTexture = useLoader(THREE.TextureLoader, getCardImage(card));
  frontTexture.wrapS = frontTexture.wrapT = THREE.ClampToEdgeWrapping;
  frontTexture.minFilter = THREE.LinearFilter; // keeps it sharp at small sizes

  return (
    <mesh position={[0, 0, 0.01]}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={frontTexture} />
    </mesh>
  );
};

export default CardFront;