"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const swatches = [
  { name: "Brass", color: "#d9ae62", metalness: 1, roughness: 0.22 },
  { name: "Forest lacquer", color: "#1d3d35", metalness: 0.1, roughness: 0.15, clearcoat: 1 },
  { name: "Marble", color: "#efe9df", metalness: 0, roughness: 0.12, clearcoat: 0.6 },
  { name: "Oak", color: "#b8946a", metalness: 0, roughness: 0.6 },
  { name: "Smoked glass", color: "#7c8a84", metalness: 0, roughness: 0.05, transmission: 0.9, thickness: 0.6 },
];

function Orbs() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.4, 2, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * 0.2, 2, delta);
  });
  return (
    <group ref={group}>
      {swatches.map((s, i) => {
        const a = (i / swatches.length) * Math.PI * 2;
        return (
          <Float key={s.name} speed={1.4 + i * 0.2} floatIntensity={0.6} rotationIntensity={0.6}>
            <mesh position={[Math.cos(a) * 1.9, Math.sin(a) * 1.0, Math.sin(a) * 0.8]}>
              <sphereGeometry args={[0.62, 64, 64]} />
              <meshPhysicalMaterial {...s} />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export default function MaterialOrbs() {
  return (
    <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 6], fov: 45 }} role="img" aria-label="3D material samples: brass, lacquer, marble, oak and glass">
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <Environment resolution={128}>
        <Lightformer form="rect" intensity={3} position={[0, 3, 5]} scale={[8, 2, 1]} color="#fff3df" />
        <Lightformer form="ring" intensity={2} position={[-5, 0, 2]} scale={3} color="#d9ae62" />
        <Lightformer form="rect" intensity={1} position={[5, -2, 2]} scale={[3, 3, 1]} color="#cfe3da" />
      </Environment>
      <Orbs />
    </Canvas>
  );
}
