import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Particle({ initialPos, radius, speed }: { initialPos: [number, number, number]; radius: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.x = initialPos[0] + radius * Math.cos(t);
      ref.current.position.z = initialPos[2] + radius * Math.sin(t);
    }
  });
  return (
    <mesh ref={ref} position={initialPos}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial color="#f59e0b" emissive="#7c2d12" />
    </mesh>
  );
}

export default function MagneticField3D() {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 2, 2]} />
      <mesh>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#60a5fa" metalness={0.7} roughness={0.2} />
      </mesh>
      <Particle initialPos={[0, 0, 1.2]} radius={0} speed={0} />
      <Particle initialPos={[0, 0, 1.2]} radius={0} speed={0} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Particle key={i} initialPos={[0, 0, 0]} radius={0} speed={2 + i * 0.5} />
      ))}
    </Canvas>
  );
}
