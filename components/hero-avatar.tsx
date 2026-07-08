"use client";

import { Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type Group, type Mesh } from "three";

const SKIN = "#F3C6A0";
const HAIR = "#6B4226";
const DRESS = "#FF6B5B";
const DRESS_DARK = "#E85949";
const BLUSH = "#FF9E8F";

function WavingArm() {
  const armRef = useRef<Group>(null);

  useFrame((state) => {
    if (armRef.current) {
      const t = state.clock.elapsedTime;
      armRef.current.rotation.z = 1.9 + Math.sin(t * 4.5) * 0.35;
    }
  });

  return (
    <group ref={armRef} position={[0.52, 1.02, 0.05]}>
      <mesh position={[0.22, -0.02, 0]} rotation={[0, 0, 0]}>
        <capsuleGeometry args={[0.09, 0.42, 6, 12]} />
        <meshStandardMaterial color={DRESS} roughness={0.6} />
      </mesh>
      <mesh position={[0.42, 0.16, 0]}>
        <sphereGeometry args={[0.1, 20, 20]} />
        <meshStandardMaterial color={SKIN} roughness={0.5} />
      </mesh>
    </group>
  );
}

function Avatar() {
  const headRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    }
  });

  return (
    <group position={[0, -0.9, 0]}>
      {/* Dress / body */}
      <mesh position={[0, 0.35, 0]}>
        <coneGeometry args={[0.58, 1.05, 32]} />
        <meshStandardMaterial color={DRESS} roughness={0.55} />
      </mesh>
      <mesh position={[0, -0.08, 0]}>
        <torusGeometry args={[0.56, 0.05, 16, 32]} />
        <meshStandardMaterial color={DRESS_DARK} roughness={0.5} />
      </mesh>

      {/* Left arm (static, resting) */}
      <group position={[-0.52, 1.02, 0.05]} rotation={[0, 0, -1.9]}>
        <mesh position={[0.22, -0.02, 0]}>
          <capsuleGeometry args={[0.09, 0.42, 6, 12]} />
          <meshStandardMaterial color={DRESS} roughness={0.6} />
        </mesh>
        <mesh position={[0.42, 0.16, 0]}>
          <sphereGeometry args={[0.1, 20, 20]} />
          <meshStandardMaterial color={SKIN} roughness={0.5} />
        </mesh>
      </group>

      {/* Right arm (waving) */}
      <WavingArm />

      {/* Neck */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.12, 0.14, 0.14, 16]} />
        <meshStandardMaterial color={SKIN} roughness={0.5} />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} position={[0, 1.35, 0]}>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshStandardMaterial color={SKIN} roughness={0.45} />

        {/* Hair back */}
        <mesh position={[0, 0.06, -0.08]} scale={[1.08, 1.02, 1.05]}>
          <sphereGeometry args={[0.44, 32, 32]} />
          <meshStandardMaterial color={HAIR} roughness={0.55} />
        </mesh>

        {/* Hair front fringe */}
        <mesh position={[0, 0.2, 0.32]} rotation={[0.3, 0, 0]}>
          <sphereGeometry args={[0.3, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2.3]} />
          <meshStandardMaterial color={HAIR} roughness={0.55} />
        </mesh>

        {/* Ponytails */}
        <mesh position={[-0.42, -0.1, -0.05]} rotation={[0, 0, 0.5]}>
          <capsuleGeometry args={[0.09, 0.34, 6, 12]} />
          <meshStandardMaterial color={HAIR} roughness={0.55} />
        </mesh>
        <mesh position={[0.42, -0.1, -0.05]} rotation={[0, 0, -0.5]}>
          <capsuleGeometry args={[0.09, 0.34, 6, 12]} />
          <meshStandardMaterial color={HAIR} roughness={0.55} />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.15, 0.02, 0.38]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color="#2B2320" roughness={0.3} />
        </mesh>
        <mesh position={[0.15, 0.02, 0.38]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color="#2B2320" roughness={0.3} />
        </mesh>

        {/* Blush */}
        <mesh position={[-0.24, -0.08, 0.32]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color={BLUSH} roughness={0.7} transparent opacity={0.6} />
        </mesh>
        <mesh position={[0.24, -0.08, 0.32]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color={BLUSH} roughness={0.7} transparent opacity={0.6} />
        </mesh>

        {/* Smile */}
        <mesh position={[0, -0.12, 0.38]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.09, 0.018, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#C2453A" roughness={0.4} />
        </mesh>
      </mesh>
    </group>
  );
}

export function HeroAvatar() {
  return (
    <div className="hero-canvas-wrapper h-full min-h-[340px]" aria-hidden>
      <Canvas camera={{ position: [0, 0.55, 3.6], fov: 42 }} dpr={[1, 1.8]} gl={{ alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2, 3, 3]} intensity={1.1} color="#FFE8D6" />
        <pointLight position={[-2, 1, 2]} intensity={0.5} color="#E0C8FF" />
        <Float speed={1.4} floatIntensity={0.5} rotationIntensity={0.15}>
          <Avatar />
        </Float>
      </Canvas>
    </div>
  );
}
