import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

type CardRotatorProps = {
  width: number;
  height: number;
  scale?: number;
  reversed?: boolean;
  initialFlipped?: boolean;
  children: React.ReactNode;
};

const CardRotator = ({
  width,
  height,
  scale = 1,
  reversed = false,
  initialFlipped = false,
  children,
}: CardRotatorProps) => {
  const [flipped, setFlipped] = useState(initialFlipped);
  const [hovered, setHovered] = useState(false);

  const cardRef = useRef<THREE.Group>(null);

  const baseRotationZ = reversed ? Math.PI : 0;

  const currentRotY = useRef(flipped ? Math.PI : 0);
  const targetRotY = useRef(flipped ? Math.PI : 0);

  const currentTilt = useRef({ x: 0, y: 0 });
  const targetTilt = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!cardRef.current) return;

    currentRotY.current = THREE.MathUtils.lerp(
      currentRotY.current,
      targetRotY.current,
      0.15
    );

    currentTilt.current.x = THREE.MathUtils.lerp(
      currentTilt.current.x,
      targetTilt.current.x,
      0.15
    );
    currentTilt.current.y = THREE.MathUtils.lerp(
      currentTilt.current.y,
      targetTilt.current.y,
      0.15
    );

    cardRef.current.rotation.z = baseRotationZ;
    cardRef.current.rotation.x = currentTilt.current.x * (reversed ? -1 : 1);
    cardRef.current.rotation.y =
      (currentRotY.current + currentTilt.current.y) * (reversed ? -1 : 1);
  });

  const handlePointerMove = (e: any) => {
    if (!hovered || !cardRef.current || !e.point) return;
    e.stopPropagation();

    const local = cardRef.current.worldToLocal(e.point.clone());
    const x = THREE.MathUtils.clamp(local.x / (width / 2), -1, 1);
    const y = THREE.MathUtils.clamp(local.y / (height / 2), -1, 1);

    targetTilt.current = { x: -y * 0.15, y: (flipped ? -x : x) * 0.15 };
  };

  const handlePointerOut = () => {
    setHovered(false);
    targetTilt.current = { x: 0, y: 0 };
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    const newFlipped = !flipped;
    setFlipped(newFlipped);
    targetRotY.current = newFlipped ? Math.PI : 0;
  };

  return (
    <group scale={[scale, scale, scale]}>
      {/* Hit plane */}
      <mesh
        visible={false}
        onPointerMove={handlePointerMove}
        onPointerOver={() => setHovered(true)}
        onPointerOut={handlePointerOut}
        onClick={handleClick}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Visual content that tilts/flips */}
      <group ref={cardRef}>{children}</group>
    </group>
  );
};

export default CardRotator;