import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Electron({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = radius * Math.cos(t);
      ref.current.position.z = radius * Math.sin(t);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Atom() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 24, 24]} />
        <meshStandardMaterial color="#ef4444" emissive="#7f1d1d" />
      </mesh>
      <Electron radius={0.7} speed={2} color="#fbbf24" />
      <Electron radius={1.1} speed={1.5} color="#60a5fa" />
      <Electron radius={1.4} speed={1} color="#34d399" />
      {[0.7, 1.1, 1.4].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r, 0.01, 16, 100]} />
          <meshBasicMaterial color="#64748b" />
        </mesh>
      ))}
    </group>
  );
}

export default function BohrAtom3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} />
      <Atom />
    </Canvas>
  );
}
