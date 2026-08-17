import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Pendulum() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const angle = Math.sin(t * 2) * 0.8;
    if (group.current) group.current.rotation.z = angle;
  });
  return (
    <group>
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <group ref={group} position={[0, 1, 0]}>
        <mesh position={[0, -0.7, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.4, 8]} />
          <meshBasicMaterial color="#94a3b8" />
        </mesh>
        <mesh position={[0, -1.2, 0]}>
          <sphereGeometry args={[0.35, 24, 24]} />
          <meshStandardMaterial color="#f97316" roughness={0.4} metalness={0.1} />
        </mesh>
      </group>
    </group>
  );
}

export default function Pendulum3D() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} />
      <Pendulum />
    </Canvas>
  );
}
