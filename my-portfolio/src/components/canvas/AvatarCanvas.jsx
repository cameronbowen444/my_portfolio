import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Avatar } from '../Avatar';

import CanvasLoader from "../Loader";

const Avatars = () => {
  return (
    <>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}minPolarAngle={Math.PI / 2} />
      <group position-y={-1}>
        <Avatar />
      </group>
      <ambientLight intensity={2.5} />
    </>
  )
}

const AvatarCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 2, 4], fov: 30 }}>
      <Avatars />
    </Canvas>
  )
}

export default AvatarCanvas;