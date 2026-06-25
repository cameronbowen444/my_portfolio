import React, { Suspense } from "react";
import { OrbitControls, Float, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "../Avatar";

import CanvasLoader from "../Loader";

const Avatars = () => {
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <ambientLight intensity={1.7} />
      <directionalLight position={[3, 5, 4]} intensity={1.5} />
      <pointLight position={[-3, 2, 3]} intensity={0.9} color="#67e8f9" />
      <pointLight position={[3, 1, 2]} intensity={0.55} color="#6badf8" />

      <Float speed={1.5} rotationIntensity={0.12} floatIntensity={0.28}>
        <group position={[0.2, -1.15, 0]} rotation={[0, 0, 0]}>
          <Avatar />
        </group>
      </Float>
    </>
  );
};

const AvatarCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="always"
      camera={{ position: [0, 2, 4], fov: 30 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Avatars />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default AvatarCanvas;