"use client";

import { Float, MeshDistortMaterial, OrbitControls, Sphere, Torus } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type Mesh } from "three";

function SceneMeshes() {
  const torusRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.35;
      torusRef.current.rotation.y += delta * 0.45;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y -= delta * 0.3;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.12;
    }
  });

  return (
    <>
      <Float speed={1.2} rotationIntensity={1.3} floatIntensity={0.9}>
        <Torus ref={torusRef} args={[1.25, 0.4, 24, 64]} position={[-0.7, 0.2, 0]}>
          <meshStandardMaterial color="#7c3aed" metalness={0.65} roughness={0.2} />
        </Torus>
      </Float>

      <Float speed={1.7} rotationIntensity={1.8} floatIntensity={1.2}>
        <Sphere ref={sphereRef} args={[0.9, 64, 64]} position={[1.15, 0.25, -0.7]}>
          <MeshDistortMaterial
            color="#22d3ee"
            roughness={0.05}
            metalness={0.45}
            distort={0.35}
            speed={2}
          />
        </Sphere>
      </Float>

      <mesh position={[0, -1.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[5, 64]} />
        <meshStandardMaterial color="#111827" transparent opacity={0.35} />
      </mesh>
    </>
  );
}

export function HeroCanvas() {
  return (
    <div className="hero-canvas-wrapper" aria-hidden>
      <Canvas camera={{ position: [0, 0, 4.6], fov: 46 }} dpr={[1, 1.8]}>
        <color attach="background" args={["#030712"]} />
        <fog attach="fog" args={["#030712", 3, 8]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 3]} intensity={1.2} color="#a78bfa" />
        <pointLight position={[-3, 2, 2]} intensity={1.1} color="#22d3ee" />
        <SceneMeshes />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.1} />
      </Canvas>
    </div>
  );
}
