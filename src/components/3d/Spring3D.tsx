import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Spring() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const stretch = Math.sin(t * 3) * 0.5;
    if (group.current) {
      group.current.scale.y = 1 + stretch * 0.3;
      group.current.position.y = -stretch * 0.2;
    }
  });

  return (
    <group>
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <group ref={group} position={[0, 0.3, 0]}>
        <mesh>
          <cylinderGeometry args={[0.03, 0.03, 0.8, 16]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.4, 24, 24]} />
          <meshStandardMaterial color="#3b82f6" roughness={0.3} metalness={0.1} />
        </mesh>
      </group>
    </group>
  );
}

export default function Spring3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} />
      <Spring />
    </Canvas>
  );
}
