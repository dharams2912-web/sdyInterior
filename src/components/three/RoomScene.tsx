"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Lightformer, RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const GREEN = "#1d3d35";
const GREEN_DEEP = "#152e28";
const GOLD = "#d9ae62";
const IVORY = "#f2eadb";
const OAK = "#b8946a";

function archShape(w: number, h: number) {
  const s = new THREE.Shape();
  const r = w / 2;
  s.moveTo(-r, 0);
  s.lineTo(-r, h - r);
  s.absarc(0, h - r, r, Math.PI, 0, true);
  s.lineTo(r, 0);
  s.lineTo(-r, 0);
  return s;
}

function Arch() {
  const { frame, inner } = useMemo(() => {
    const outer = archShape(1.9, 3.1);
    const hole = new THREE.Path(archShape(1.72, 3.0).getPoints(48));
    outer.holes.push(hole);
    return {
      frame: new THREE.ExtrudeGeometry(outer, { depth: 0.06, bevelEnabled: false, curveSegments: 48 }),
      inner: new THREE.ShapeGeometry(archShape(1.72, 3.0), 48),
    };
  }, []);
  return (
    <group position={[0.4, 0, -2.97]}>
      <mesh geometry={inner} position={[0, 0, 0.005]}>
        <meshStandardMaterial color={GREEN_DEEP} roughness={0.9} />
      </mesh>
      <mesh geometry={frame}>
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.28} />
      </mesh>
      {/* niche shelves */}
      {[0.9, 1.75].map((y) => (
        <mesh key={y} position={[0, y, 0.12]}>
          <boxGeometry args={[1.6, 0.04, 0.24]} />
          <meshStandardMaterial color={OAK} roughness={0.6} />
        </mesh>
      ))}
      <mesh position={[-0.35, 1.08, 0.12]}>
        <cylinderGeometry args={[0.08, 0.12, 0.32, 32]} />
        <meshStandardMaterial color={IVORY} roughness={0.4} />
      </mesh>
      <mesh position={[0.3, 1.0, 0.12]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.2} />
      </mesh>
      <mesh position={[0.15, 1.92, 0.12]}>
        <boxGeometry args={[0.5, 0.3, 0.16]} />
        <meshStandardMaterial color="#6b6a4a" roughness={0.7} />
      </mesh>
      <pointLight position={[0, 2.6, 0.4]} intensity={2.2} distance={3} color="#ffd9a0" />
    </group>
  );
}

function Sofa() {
  const fabric = <meshStandardMaterial color={IVORY} roughness={0.95} />;
  return (
    <group position={[0.2, 0, -1.7]}>
      <RoundedBox args={[2.6, 0.38, 0.95]} radius={0.08} position={[0, 0.3, 0]} castShadow>{fabric}</RoundedBox>
      <RoundedBox args={[2.6, 0.62, 0.26]} radius={0.1} position={[0, 0.72, -0.36]} castShadow>{fabric}</RoundedBox>
      <RoundedBox args={[0.26, 0.55, 0.95]} radius={0.1} position={[-1.3, 0.48, 0]} castShadow>{fabric}</RoundedBox>
      <RoundedBox args={[0.26, 0.55, 0.95]} radius={0.1} position={[1.3, 0.48, 0]} castShadow>{fabric}</RoundedBox>
      {[-0.6, 0.6].map((x) => (
        <RoundedBox key={x} args={[1.1, 0.16, 0.8]} radius={0.06} position={[x, 0.55, 0.05]} castShadow>{fabric}</RoundedBox>
      ))}
      <RoundedBox args={[0.5, 0.42, 0.14]} radius={0.06} position={[-0.75, 0.82, -0.18]} rotation={[-0.2, 0.15, 0.05]} castShadow>
        <meshStandardMaterial color={GREEN} roughness={0.9} />
      </RoundedBox>
      <RoundedBox args={[0.46, 0.4, 0.14]} radius={0.06} position={[0.8, 0.8, -0.18]} rotation={[-0.2, -0.15, -0.05]} castShadow>
        <meshStandardMaterial color={GOLD} roughness={0.8} />
      </RoundedBox>
      {[-1.25, 1.25].map((x) => (
        <mesh key={x} position={[x, 0.06, 0.35]}>
          <cylinderGeometry args={[0.03, 0.03, 0.12, 12]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function CoffeeTable() {
  return (
    <group position={[0.2, 0, -0.25]}>
      <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.62, 0.62, 0.05, 64]} />
        <meshStandardMaterial color="#efe9df" roughness={0.15} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.3, 0.4, 48, 1, true]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.25} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0.18, 0.52, 0.05]} castShadow>
        <cylinderGeometry args={[0.07, 0.05, 0.16, 32]} />
        <meshStandardMaterial color={GREEN} roughness={0.4} />
      </mesh>
      <mesh position={[-0.2, 0.47, -0.1]} rotation={[0, 0.4, 0]}>
        <boxGeometry args={[0.32, 0.05, 0.24]} />
        <meshStandardMaterial color="#c9b79c" roughness={0.8} />
      </mesh>
    </group>
  );
}

function Pendant() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = Math.sin(clock.elapsedTime * 0.8) * 0.025;
  });
  return (
    <group ref={ref} position={[0.2, 4.2, -0.25]}>
      <mesh position={[0, -0.9, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 1.8, 8]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[0, -1.9, 0]}>
        <sphereGeometry args={[0.32, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.22} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -1.92, 0]}>
        <sphereGeometry args={[0.1, 24, 24]} />
        <meshStandardMaterial color="#fff2d6" emissive="#ffd38a" emissiveIntensity={4} />
      </mesh>
      <pointLight position={[0, -2.1, 0]} intensity={6} distance={6} color="#ffcf87" castShadow />
    </group>
  );
}

function Plant() {
  const leaves = useMemo(
    () => Array.from({ length: 9 }, (_, i) => ({ a: (i / 9) * Math.PI * 2, h: 0.9 + (i % 3) * 0.25, r: 0.18 + (i % 2) * 0.08 })),
    [],
  );
  return (
    <group position={[-2.1, 0, -2.2]}>
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.18, 0.6, 40]} />
        <meshStandardMaterial color={IVORY} roughness={0.5} />
      </mesh>
      {leaves.map((l, i) => (
        <Float key={i} speed={1.2} rotationIntensity={0.15} floatIntensity={0.08}>
          <mesh position={[Math.cos(l.a) * l.r, l.h, Math.sin(l.a) * l.r]} rotation={[0.4 * Math.sin(l.a), l.a, 0.5]} scale={[1, 1.9, 0.25]} castShadow>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial color={i % 2 ? "#3f6b4f" : "#2f5a43"} roughness={0.7} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function FloorLamp() {
  return (
    <group position={[2.25, 0, -2.1]}>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.04, 32]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 1.7, 8]} />
        <meshStandardMaterial color={GOLD} metalness={1} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.75, 0]}>
        <cylinderGeometry args={[0.16, 0.26, 0.3, 32, 1, true]} />
        <meshStandardMaterial color="#f7ecd6" emissive="#ffd28c" emissiveIntensity={0.7} side={THREE.DoubleSide} />
      </mesh>
      <pointLight position={[0, 1.6, 0]} intensity={1.6} distance={3} color="#ffcf87" />
    </group>
  );
}

function Room() {
  return (
    <group>
      {/* floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#cdb391" roughness={0.55} />
      </mesh>
      {/* rug */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, 0.005, -0.6]} receiveShadow>
        <circleGeometry args={[1.7, 64]} />
        <meshStandardMaterial color="#e9dfcc" roughness={1} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.2, 0.007, -0.6]}>
        <ringGeometry args={[1.58, 1.62, 96]} />
        <meshStandardMaterial color={GOLD} roughness={0.6} />
      </mesh>
      {/* back wall */}
      <mesh position={[0, 3, -3]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial color={GREEN} roughness={0.92} />
      </mesh>
      {/* wainscot lines */}
      {[-3.6, -2.6, 2.6, 3.6].map((x) => (
        <mesh key={x} position={[x, 1.6, -2.98]}>
          <boxGeometry args={[0.02, 3.2, 0.02]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.35} />
        </mesh>
      ))}
      {/* side wall */}
      <mesh position={[-3.4, 3, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[12, 6]} />
        <meshStandardMaterial color={IVORY} roughness={0.95} />
      </mesh>
      {/* framed art on side wall */}
      <group position={[-3.38, 2.3, -1.1]} rotation={[0, Math.PI / 2, 0]}>
        <mesh>
          <boxGeometry args={[1.2, 1.5, 0.04]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.025]}>
          <planeGeometry args={[1.05, 1.35]} />
          <meshStandardMaterial color="#e8dcc6" roughness={0.9} />
        </mesh>
        <mesh position={[0, -0.1, 0.03]}>
          <circleGeometry args={[0.3, 48]} />
          <meshStandardMaterial color={GREEN} roughness={0.8} />
        </mesh>
        <mesh position={[0.12, 0.25, 0.031]}>
          <circleGeometry args={[0.14, 48]} />
          <meshStandardMaterial color={GOLD} roughness={0.5} />
        </mesh>
      </group>
      {/* skirting */}
      <mesh position={[0, 0.06, -2.97]}>
        <boxGeometry args={[12, 0.12, 0.04]} />
        <meshStandardMaterial color={GOLD} metalness={0.8} roughness={0.4} />
      </mesh>
    </group>
  );
}

function CameraRig() {
  const target = useMemo(() => new THREE.Vector3(0, 1.3, -1.2), []);
  useFrame((state, delta) => {
    const { camera, pointer } = state;
    const t = state.clock.elapsedTime;
    const x = 2.4 + pointer.x * 0.9 + Math.sin(t * 0.15) * 0.25;
    const y = 2.2 + pointer.y * 0.4;
    camera.position.x = THREE.MathUtils.damp(camera.position.x, x, 2.2, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, y, 2.2, delta);
    camera.lookAt(target);
  });
  return null;
}

export default function RoomScene() {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="h-full w-full">
      <Canvas
        shadows
        frameloop={visible ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={{ position: [2.4, 2.2, 4.6], fov: 42 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, outputColorSpace: THREE.SRGBColorSpace }}
        aria-label="Interactive 3D living room rendered in SDY's green, gold and ivory palette"
        role="img"
      >
        <color attach="background" args={[GREEN_DEEP]} />
        <fog attach="fog" args={[GREEN_DEEP, 7, 14]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 3]} intensity={1.1} color="#fff1db" castShadow shadow-mapSize={[1024, 1024]} shadow-bias={-0.0004} />
        <Environment resolution={128}>
          <Lightformer form="rect" intensity={2} position={[0, 4, 4]} scale={[6, 2, 1]} color="#fff3df" />
          <Lightformer form="ring" intensity={1.5} position={[-4, 2, 0]} scale={2} color={GOLD} />
          <Lightformer form="rect" intensity={0.6} position={[4, 1, -2]} scale={[2, 4, 1]} color="#cfe3da" />
        </Environment>
        <Room />
        <Arch />
        <Sofa />
        <CoffeeTable />
        <Pendant />
        <Plant />
        <FloorLamp />
        <ContactShadows position={[0, 0.01, 0]} opacity={0.45} scale={10} blur={2.4} far={3} />
        <CameraRig />
      </Canvas>
    </div>
  );
}
