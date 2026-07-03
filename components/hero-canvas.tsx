"use client";

import { Float, Line, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type Group } from "three";

const NODE_POSITIONS: [number, number, number][] = [
  [-1.2, 0.6, 0.2],
  [-0.4, 1.0, -0.3],
  [0.5, 0.7, 0.4],
  [1.1, 0.2, -0.2],
  [0.2, -0.5, 0.6],
  [-0.8, -0.3, -0.5],
  [0.9, -0.7, 0.1],
  [-0.1, 0.1, -0.8],
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [1, 7], [2, 7], [4, 6], [3, 6], [0, 7], [5, 6],
];

function NeuralGraph() {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {EDGES.map(([a, b]) => (
        <Line
          key={`${a}-${b}`}
          points={[NODE_POSITIONS[a], NODE_POSITIONS[b]]}
          color="#5EEAD4"
          lineWidth={1}
          transparent
          opacity={0.55}
        />
      ))}
      {NODE_POSITIONS.map((pos, index) => (
        <Float key={index} speed={1 + index * 0.1} floatIntensity={0.35}>
          <Sphere args={[0.09 + (index % 3) * 0.02, 24, 24]} position={pos}>
            <meshStandardMaterial
              color={index % 2 === 0 ? "#14B8A6" : "#818CF8"}
              emissive={index % 2 === 0 ? "#0D9488" : "#4F46E5"}
              emissiveIntensity={0.85}
              metalness={0.4}
              roughness={0.15}
            />
          </Sphere>
        </Float>
      ))}
      <Sphere args={[0.14, 32, 32]} position={[0, 0.15, 0]}>
        <meshStandardMaterial
          color="#F59E0B"
          emissive="#D97706"
          emissiveIntensity={0.9}
          metalness={0.5}
          roughness={0.1}
        />
      </Sphere>
    </group>
  );
}

export function HeroCanvas() {
  return (
    <div className="hero-canvas-wrapper h-full min-h-[340px]" aria-hidden>
      <Canvas camera={{ position: [0, 0, 3.8], fov: 48 }} dpr={[1, 1.8]}>
        <color attach="background" args={["#06090F"]} />
        <fog attach="fog" args={["#06090F", 2.5, 7]} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[3, 4, 2]} intensity={1.1} color="#5EEAD4" />
        <pointLight position={[-2, 1, 1]} intensity={0.9} color="#818CF8" />
        <NeuralGraph />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
    </div>
  );
}
