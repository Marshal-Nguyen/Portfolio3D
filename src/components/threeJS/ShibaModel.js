import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function AnimatedModel() {
  const glb = useGLTF("3d/b.glb");
  const mixer = useRef();
  const modelRef = useRef();

  useEffect(() => {
    mixer.current = new THREE.AnimationMixer(glb.scene);
    glb.animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
    return () => mixer.current.stopAllAction();
  }, [glb]);

  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return (
    <group scale={0.9} rotation={[0.3, 0.8, 0]} ref={modelRef}>
      <primitive object={glb.scene} />
      <OrbitControls
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={3}
      />
    </group>
  );
}

export default function ShibaModel() {
  return (
    <Canvas className="block w-[577px] h-[1164px] ml-[260px]">
      <ambientLight intensity={3} />
      <pointLight position={[0, 5, 2]} intensity={100} />
      <AnimatedModel />
    </Canvas>
  );
}
