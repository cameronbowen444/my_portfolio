
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {

  const computer = useGLTF("./sci-fi_computer/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor='black' />
      <primitive object={computer.scene} scale={1} position-y={0} rotation-y={0} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
    shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 55,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 2.5}
        />
        <Computers />
        <Preload all />
      </Suspense>

    </Canvas>
  )
}

export default ComputersCanvas;