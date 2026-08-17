import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 200;
  const positions = new Float32Array(count * 3);
  const velocities: number[] = [];

  for (let i = 0; i < count; i++) {
    const r = 0.8 * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
    velocities.push((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02);
  }

  useFrame(() => {
    if (!points.current) return;
    const attr = points.current.geometry.attributes.position;
    const arr = attr.array as Float32Array;
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < 3; j++) {
        arr[i * 3 + j] += velocities[i * 3 + j];
        if (arr[i * 3 + j] > 1.2 || arr[i * 3 + j] < -1.2) velocities[i * 3 + j] *= -1;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#334155" wireframe />
      </mesh>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#f59e0b" />
      </points>
    </group>
  );
}

export default function GasParticles3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.7} />
      <Particles />
    </Canvas>
  );
}
