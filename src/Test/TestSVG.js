import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import styles from "../Page/Layout/Layout.module.css";
import Navigation from "../components/menu/Navigation";
function AnimatedModel() {
  const glb = useGLTF("3d/b.glb");
  const mixer = useRef(null);
  const modelRef = useRef();

  useEffect(() => {
    if (glb && glb.animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(glb.scene);

      glb.animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
      });
    }

    // Cleanup on unmount
    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null;
      }
    };
  }, [glb]);

  useFrame((state, delta) => {
    // Update animation if mixer is present
    if (mixer.current) mixer.current.update(delta);
  });

  return (
    <group
      scale={1.2}
      rotation={[0.3, 1, 0]}
      ref={modelRef}
      position={[-0.3, -0.3, 0]}>
      <primitive object={glb.scene} />
      <OrbitControls
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={3}
      />
    </group>
  );
}

const TestSVG = () => {
  return (
    <div
      id="pageOwner"
      className="flex-col justify-center gap-3 flex items-center"
      style={{
        backgroundImage: `linear-gradient(
          135deg,
          hsl(270deg 100% 7%) 0%,
          hsl(266deg 84% 9%) 5%,
          hsl(261deg 74% 11%) 10%,
          hsl(258deg 70% 13%) 15%,
          hsl(258deg 69% 15%) 21%,
          hsl(259deg 70% 17%) 26%,
          hsl(259deg 71% 18%) 31%,
          hsl(260deg 73% 20%) 36%,
          hsl(261deg 74% 22%) 42%,
          hsl(261deg 73% 25%) 47%,
          hsl(261deg 73% 28%) 52%,
          hsl(261deg 74% 31%) 57%,
          hsl(261deg 74% 35%) 62%,
          hsl(261deg 74% 38%) 66%,
          hsl(261deg 74% 41%) 71%,
          hsl(261deg 74% 45%) 75%,
          hsl(262deg 63% 52%) 78%,
          hsl(264deg 64% 59%) 82%,
          hsl(265deg 65% 66%) 85%,
          hsl(266deg 66% 73%) 88%,
          hsl(268deg 66% 79%) 92%,
          hsl(269deg 67% 86%) 94%,
          hsl(269deg 68% 93%) 97%,
          hsl(0deg 0% 100%) 100%
        )`,
      }}>
      {/* Page1 */}
      <div
        id="pageOne"
        className=" w-[99%] h-screen bg-[#fff0] flex flex-cols items-center justify-center relative border border-black rounded-2xl">
        {/* Component Center */}
        <div id="component_center">
          <svg
            width="100%" // Đặt kích thước hiển thị
            height="100%" // Đặt kích thước hiển thị
            viewBox="0 0 26 22" // Điều chỉnh viewBox nếu cần
            stroke="white"
            stroke-width="0.02"
            fill="rgba(0, 0, 0, 0)"
            style={{ position: "absolute", top: 0, left: 0 }}
            className=""
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                transform="translate(0, 3.5)"
                d="M 2 0 C 4 0 8 0 12 0 Q 13 0 13 -1 C 13 -2 13 -2 13 -2 H 13 Q 13 -3 14 -3 C 17 -3 21 -3 24 -3 Q 25 -3 25 -2 C 25 3.3 25 7.7 25 9 Q 25 10 24 10 Q 23 10 23 10 Q 22 10 22 11 Q 22 17 22 17 C 22 17 22 18 21 18 Q 20 18 19 18 Q 19 18 19 18 C 17 18 19 16 17 16 C 13.7 16 11.3 16 9 16 Q 8 16 8 17 Q 8 18 7 18 C 5.7 18 3.3 18 2 18 Q 1 18 1 17 C 1 11.3 1 5.7 1 1 Q 1 0 2 0 Z M 24 10"
              />
            </g>
          </svg>
          <Canvas
            style={{
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translate(-55%, -39%)",
              width: "800px", // Điều chỉnh kích thước của Canvas tại đây
              height: "750px",
              cursor: "none",
            }}>
            <ambientLight intensity={3} />
            <pointLight position={[0, 5, 2]} intensity={100} />
            <AnimatedModel />
          </Canvas>
        </div>
        {/* Component right */}
        <div id="component_right">
          <svg
            width="100%" // Đặt kích thước hiển thị
            height="100%" // Đặt kích thước hiển thị
            viewBox="0 0 26 22" // Điều chỉnh viewBox nếu cần
            stroke="white"
            stroke-width="0.02"
            fill="rgba(0, 0, 0, 0)"
            style={{ position: "absolute", top: 0, left: 0 }}
            className=""
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                transform="translate(0, 3.5)"
                d="M 24 10.5 H 24 Q 25.5 10.5 25.5 9 Q 25.5 3 25.5 -2 Q 25.5 -3 26.5 -3 V -3 H 33.5 Q 34.5 -3 34.5 -2 Q 34.5 18 34.5 17 Q 34.5 18 33.5 18 H 23.5 Q 22.5 18 22.5 17 V 11 Q 22.5 10.5 23 10.5 H 24"
              />
            </g>
          </svg>
        </div>
        {/* Component top */}
        <div id="component_right">
          <svg
            width="100%" // Đặt kích thước hiển thị
            height="100%" // Đặt kích thước hiển thị
            viewBox="0 0 26 22" // Điều chỉnh viewBox nếu cần
            stroke="white"
            stroke-width="0.02"
            fill="rgba(0, 0, 0, 0)"
            style={{ position: "absolute", top: 0, left: 0 }}
            className=""
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                transform="translate(0, 3.5)"
                d="M 11 -0.5 H 12 Q 12.5 -0.5 12.5 -1 V -2 Q 12.5 -3 11.5 -3 H 2 Q 1 -3 1 -2 V -1 Q 1 -0.5 1.5 -0.5 H 11"
              />
            </g>
          </svg>
        </div>
        {/* Component left */}
        <div id="component_right">
          <svg
            width="100%" // Đặt kích thước hiển thị
            height="100%" // Đặt kích thước hiển thị
            viewBox="0 0 26 22" // Điều chỉnh viewBox nếu cần
            stroke="white"
            stroke-width="0.02"
            fill="rgba(0, 0, 0, 0)"
            style={{ position: "absolute", top: 0, left: 0 }}
            className=""
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                transform="translate(0, 3.5)"
                d="M -0.5 18 Q 0.5 18 0.5 17 V 6 Q 0.5 5 -0.5 5 H -8 Q -9 5 -9 6 Q -9 12 -9 17 Q -9 18 -8 18 H -0.5"
              />
            </g>
            <g>
              <path
                transform="translate(0, 3.5)"
                d="M -8 4.5 H -0.5 Q 0.5 4.5 0.5 3.5 V -2 Q 0.5 -3 -0.5 -3 H -8 Q -9 -3 -9 -2 V 3.5 Q -9 4.5 -8 4.5"
              />
            </g>
          </svg>
        </div>
        {/* Component Navigation */}
        <div className="bottom-3 fixed z-50">
          <Navigation />
        </div>
      </div>
      {/* Page2 */}
      <div
        id="pageTwo"
        className=" w-[99%] h-screen bg-[#fff] flex flex-cols items-center justify-center relative border border-black rounded-2xl">
        <div id="component_center">
          <svg
            width="100%" // Đặt kích thước hiển thị
            height="100%" // Đặt kích thước hiển thị
            viewBox="0 0 26 22" // Điều chỉnh viewBox nếu cần
            fill="white"
            stroke="black"
            stroke-width="0.01"
            style={{ position: "absolute", top: 0, left: 0 }}
            className=""
            xmlns="http://www.w3.org/2000/svg">
            <g>
              <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(135)">
                  <stop offset="0%" stopColor="hsl(270, 100%, 7%)" />
                  <stop offset="5%" stopColor="hsl(266, 84%, 9%)" />
                  <stop offset="10%" stopColor="hsl(261, 74%, 11%)" />
                  <stop offset="15%" stopColor="hsl(258, 70%, 13%)" />
                  <stop offset="21%" stopColor="hsl(258, 69%, 15%)" />
                  <stop offset="26%" stopColor="hsl(259, 70%, 17%)" />
                  <stop offset="31%" stopColor="hsl(259, 71%, 18%)" />
                  <stop offset="36%" stopColor="hsl(260, 73%, 20%)" />
                  <stop offset="42%" stopColor="hsl(261, 74%, 22%)" />
                  <stop offset="47%" stopColor="hsl(261, 73%, 25%)" />
                  <stop offset="52%" stopColor="hsl(261, 73%, 28%)" />
                  <stop offset="57%" stopColor="hsl(261, 74%, 31%)" />
                  <stop offset="62%" stopColor="hsl(261, 74%, 35%)" />
                  <stop offset="66%" stopColor="hsl(261, 74%, 38%)" />
                  <stop offset="71%" stopColor="hsl(261, 74%, 41%)" />
                  <stop offset="75%" stopColor="hsl(261, 74%, 45%)" />
                  <stop offset="78%" stopColor="hsl(262, 63%, 52%)" />
                  <stop offset="82%" stopColor="hsl(264, 64%, 59%)" />
                  <stop offset="85%" stopColor="hsl(265, 65%, 66%)" />
                  <stop offset="88%" stopColor="hsl(266, 66%, 73%)" />
                  <stop offset="92%" stopColor="hsl(268, 66%, 79%)" />
                  <stop offset="94%" stopColor="hsl(269, 67%, 86%)" />
                  <stop offset="97%" stopColor="hsl(269, 68%, 93%)" />
                  <stop offset="100%" stopColor="hsl(0, 0%, 100%)" />
                </linearGradient>
                <linearGradient id="myGradient" gradientTransform="rotate(135)">
                  <stop offset="0%" stopColor="hsl(270, 100%, 7%)" />
                  <stop offset="5%" stopColor="hsl(266, 84%, 9%)" />
                  <stop offset="10%" stopColor="hsl(261, 74%, 11%)" />
                  <stop offset="15%" stopColor="hsl(258, 70%, 13%)" />
                  <stop offset="21%" stopColor="hsl(258, 69%, 15%)" />
                  <stop offset="26%" stopColor="hsl(259, 70%, 17%)" />
                  <stop offset="31%" stopColor="hsl(259, 71%, 18%)" />
                  <stop offset="36%" stopColor="hsl(260, 73%, 20%)" />
                  <stop offset="42%" stopColor="hsl(261, 74%, 22%)" />
                  <stop offset="47%" stopColor="hsl(261, 73%, 25%)" />
                  <stop offset="52%" stopColor="hsl(261, 73%, 28%)" />
                  <stop offset="57%" stopColor="hsl(261, 74%, 31%)" />
                  <stop offset="62%" stopColor="hsl(261, 74%, 35%)" />
                  <stop offset="66%" stopColor="hsl(261, 74%, 38%)" />
                  <stop offset="71%" stopColor="hsl(261, 74%, 41%)" />
                  <stop offset="75%" stopColor="hsl(261, 74%, 45%)" />
                  <stop offset="78%" stopColor="hsl(262, 63%, 52%)" />
                  <stop offset="82%" stopColor="hsl(264, 64%, 59%)" />
                  <stop offset="85%" stopColor="hsl(265, 65%, 66%)" />
                  <stop offset="88%" stopColor="hsl(266, 66%, 73%)" />
                  <stop offset="92%" stopColor="hsl(268, 66%, 79%)" />
                  <stop offset="94%" stopColor="hsl(269, 67%, 86%)" />
                  <stop offset="97%" stopColor="hsl(269, 68%, 93%)" />
                  <stop offset="100%" stopColor="hsl(0, 0%, 100%)" />
                </linearGradient>
              </defs>
              <path
                fill="url(#myGradient)"
                transform="translate(0, 3.5)"
                d="M 2 0 C 4 0 8 0 12 0 Q 13 0 13 -1 C 13 -2 13 -2 13 -2 H 13 Q 13 -3 14 -3 C 17 -3 21 -3 24 -3 Q 25 -3 25 -2 C 25 3.3 25 7.7 25 9 Q 25 10 24 10 Q 23 10 23 10 Q 22 10 22 11 Q 22 17 22 17 C 22 17 22 18 21 18 Q 18 18 18 18 C 18 18 17 18 17 17 V 17 C 17 16 16.3 16 16 16 C 13.7 16 11.3 16 10 16 Q 9 16 9 17 V 17 Q 9 18 8 18 C 5.7 18 3.3 18 2 18 Q 1 18 1 17 C 1 11.3 1 5.7 1 1 Q 1 0 2 0 Z M 24 10.6"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestSVG;
