import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function Waves() {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.PlaneGeometry(4, 4, 64, 64), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const positions1 = geometry.attributes.position.array as Float32Array;
    const positions2 = geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions1.length; i += 3) {
      const x = positions1[i];
      const y = positions1[i + 1];
      const r1 = Math.sqrt((x - 0.8) ** 2 + (y - 0.8) ** 2);
      const r2 = Math.sqrt((x + 0.8) ** 2 + (y + 0.8) ** 2);
      const z1 = Math.sin(r1 * 3 - t * 2);
      const z2 = Math.sin(r2 * 3 - t * 2);
      positions1[i + 2] = z1;
      positions2[i + 2] = z2;
    }
    geometry.attributes.position.needsUpdate = true;
    if (mesh1.current) mesh1.current.geometry.attributes.position.needsUpdate = true;
    if (mesh2.current) mesh2.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group>
      <mesh ref={mesh1} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#22d3ee" wireframe />
      </mesh>
      <mesh ref={mesh2} geometry={geometry} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#fbbf24" wireframe />
      </mesh>
    </group>
  );
}

export default function WaveInterference3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} />
      <Waves />
    </Canvas>
  );
}
