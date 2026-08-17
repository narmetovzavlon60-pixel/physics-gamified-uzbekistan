import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Prism() {
  const prism = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (prism.current) prism.current.rotation.y = clock.getElapsedTime() * 0.3;
  });
  return (
    <group>
      <mesh ref={prism} position={[0, 0, 0]}>
        <coneGeometry args={[0.7, 1.4, 3]} />
        <meshPhongMaterial color="#22d3ee" transparent opacity={0.6} shininess={100} />
      </mesh>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[Math.cos((i * Math.PI * 2) / 3) * 1.5, Math.sin((i * Math.PI * 2) / 3) * 1.5, 0]} rotation={[0, 0, (i * Math.PI * 2) / 3]}>
          <boxGeometry args={[2, 0.02, 0.02]} />
          <meshBasicMaterial color="#fbbf24" />
        </mesh>
      ))}
    </group>
  );
}

export default function OpticsLens3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <Prism />
    </Canvas>
  );
}
