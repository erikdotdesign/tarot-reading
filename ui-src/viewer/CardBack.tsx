import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import texture from "../images/back.webp";

const CardBack = ({ 
  width,
  height
}: { 
  width: number;
  height: number;
}) => {
  const backTexture = useLoader(THREE.TextureLoader, texture);
  backTexture.wrapS = backTexture.wrapT = THREE.ClampToEdgeWrapping;
  backTexture.minFilter = THREE.LinearFilter; // keeps it sharp at small sizes

  return (
    <mesh position={[0, 0, 0.01]} rotation-y={Math.PI}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={backTexture} />
    </mesh>
  );
};

export default CardBack;