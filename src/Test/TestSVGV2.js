import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import Navigation from "../components/menu/Navigation";
import Knowledge from "../components/know/Knowledge";
import Social from "../components/social/Social";
import styles from "../Test/TestSVGV2.module.css";
import Rotate from "../components/rotate3D/Rotate";

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
const TestSVGV2 = () => {
  return (
    <div
      className={`${styles.customBackground} px-10 py-7 grid grid-cols-4 grid-rows-3 gap-4 h-screen`}>
      {/* component left top */}
      <div className="row-span-2 border flex justify-center items-center rounded-2xl">
        <div class={styles.one}>
          <div div class={styles.text}>
            <div className={styles.avatar}></div>
          </div>
        </div>
      </div>
      {/* component center */}
      <div className={styles.center}>
        {/* Knowledge */}
        <div className="absolute top-[1.6rem] left-[26.8%]">
          <Knowledge />
        </div>
        {/* layout */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0.94 -3.06 33.62 21.12">
          <path
            d="M 2 0 C 4 0 8 0 12 0 Q 13 0 13 -1 C 13 -2 13 -2 13 -2 H 13 Q 13 -3 14 -3 C 17 -3 21 -3 24 -3 Q 25 -3 25 -2 C 25 3.3 25 7.7 25 9 Q 25 10 24 10 Q 23 10 23 10 Q 22 10 22 11 Q 22 17 22 17 C 22 17 22 18 21 18 Q 20 18 19 18 Q 19 18 19 18 C 17 18 19 16 17 16 C 13.7 16 11.3 16 9 16 Q 8 16 8 17 Q 8 18 7 18 C 5.7 18 3.3 18 2 18 Q 1 18 1 17 C 1 11.3 1 5.7 1 1 Q 1 0 2 0 Z M 24 10.5 H 24 Q 25.5 10.5 25.5 9 Q 25.5 3 25.5 -2 Q 25.5 -3 26.5 -3 V -3 H 33.5 Q 34.5 -3 34.5 -2 Q 34.5 18 34.5 17 Q 34.5 18 33.5 18 H 23.5 Q 22.5 18 22.5 17 V 11 Q 22.5 10.5 23 10.5 H 24 "
            stroke="#ffff"
            stroke-width="0.03"
            fill="none"
          />
        </svg>
        {/* file3D */}
        <Canvas
          style={{
            position: "absolute",
            top: "38%",
            left: "51%",
            transform: "translate(-33%, -39%)",
            width: "800px", // Điều chỉnh kích thước của Canvas tại đây
            height: "750px",
            cursor: "none",
          }}>
          <ambientLight intensity={3} />
          <pointLight position={[0, 5, 2]} intensity={100} />
          <AnimatedModel />
        </Canvas>
        {/* Information */}
        <div className="text-white text-[40px] left-[29%] top-[29%] absolute">
          <span style={{ fontFamily: "Orbitron", display: "block" }}>
            Nguyen Van
          </span>
          <span
            style={{
              fontFamily: "Orbitron",
              display: "block",
              marginLeft: "30px",
              marginTop: "-15px",
            }}>
            Truong Giang
          </span>
          <p
            className="mt-3 text-[14px] w-[291px] text-whỉte rounded-lg italic ml-3"
            style={{ textAlign: "justify" }}>
            Front-end developer with 2 years of experience, I am dedicated to
            creating exceptional website designs that prioritize user-centered
            approaches to software development.
          </p>
          {/* Button find me in */}
          <button type="button" className={styles.spaceButton}>
            <strong className={styles.spaceButtonText}>Find me in</strong>
            <div className={styles.starsContainer}>
              <div className={styles.stars}></div>
            </div>
            <div className={styles.glow}>
              <div className={styles.glowCircle}></div>
              <div className={styles.glowCircle}></div>
            </div>
          </button>
          <div className="ml-5">
            <Social />
          </div>
        </div>
        {/* Navigation */}
        <div className="bottom-[22px] fixed z-50 left-[41.8%]">
          <Navigation />
        </div>
        {/*         
        <div className="absolute left-[83%] top-[10%]">
          <div className={styles.cubeContainer}>
            <div className={styles.cube}>
              <div className={`${styles.face} ${styles.front}`}>Front</div>
              <div className={`${styles.face} ${styles.back}`}>Back</div>
              <div className={`${styles.face} ${styles.right}`}>Right</div>
              <div className={`${styles.face} ${styles.left}`}>Left</div>
              <div className={`${styles.face} ${styles.top}`}>Top</div>
              <div className={`${styles.face} ${styles.bottom}`}>Bottom</div>
            </div>
          </div>
        </div> */}
        {/*Am nhac  */}
        <div className="absolute left-[73%] bottom-[6%]">
          <div className={styles.playerContainer}>
            <div className={styles.currentPlaying}>
              <svg
                height="50px"
                width="50px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.spotifyIcon}>
                <path
                  d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z"
                  fill="url(#ipdIa4~cOclR8yt_ClW93a)"></path>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(0 -534)"
                  y2="590.253"
                  y1="530.096"
                  x2="32"
                  x1="32"
                  id="ipdIa4~cOclR8yt_ClW93b">
                  <stop stop-color="#42d778" offset="0"></stop>
                  <stop stop-color="#3dca76" offset=".428"></stop>
                  <stop stop-color="#34b171" offset="1"></stop>
                </linearGradient>
                <path
                  d="M57,32c0,12.837-9.663,23.404-22.115,24.837C33.942,56.942,32.971,57,32,57	c-1.644,0-3.25-0.163-4.808-0.471C15.683,54.298,7,44.163,7,32C7,18.192,18.192,7,32,7S57,18.192,57,32z"
                  fill="url(#ipdIa4~cOclR8yt_ClW93b)"></path>
                <path
                  d="M41.683,44.394c-0.365,0-0.731-0.181-1.096-0.365c-3.471-2.009-7.674-3.105-12.24-3.105	c-2.559,0-5.116,0.364-7.491,0.912c-0.365,0-0.914,0.183-1.096,0.183c-0.914,0-1.461-0.732-1.461-1.462	c0-0.913,0.547-1.463,1.279-1.643c2.923-0.732,5.846-1.096,8.951-1.096c5.116,0,9.866,1.276,13.885,3.655	c0.548,0.364,0.914,0.73,0.914,1.642C43.145,43.847,42.414,44.394,41.683,44.394z M44.241,38.181c-0.547,0-0.912-0.18-1.279-0.364	c-3.835-2.375-9.135-3.839-15.163-3.839c-2.924,0-5.664,0.366-7.674,0.916c-0.549,0.18-0.731,0.18-1.096,0.18	c-1.096,0-1.827-0.912-1.827-1.826c0-1.096,0.549-1.645,1.461-2.009c2.74-0.73,5.481-1.279,9.317-1.279	c6.213,0,12.241,1.463,16.991,4.384c0.73,0.364,1.096,1.096,1.096,1.826C46.069,37.269,45.337,38.181,44.241,38.181z M47.165,30.876	c-0.548,0-0.731-0.182-1.279-0.364c-4.385-2.559-10.961-4.021-17.356-4.021c-3.289,0-6.577,0.366-9.5,1.096	c-0.366,0-0.731,0.182-1.279,0.182c-1.279,0.183-2.193-0.912-2.193-2.192c0-1.279,0.731-2.009,1.644-2.192	c3.471-1.096,7.125-1.462,11.327-1.462c6.943,0,14.25,1.462,19.731,4.567c0.73,0.366,1.278,1.096,1.278,2.193	C49.357,29.961,48.442,30.876,47.165,30.876z"
                  fill="#fff"></path>
              </svg>
              <p className={styles.headingText}>Currently Playing</p>
            </div>
            <div className={styles.trackLoader}>
              <div className={styles.trackInfo}>
                <p className={styles.trackName}>Time in a Bottle</p>
                <p className={styles.artistName}>Jim Corce</p>
              </div>
              <div className={styles.albumCover}></div>
              <div className={styles.loadingBars}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* component left bottom */}
      <div className="relative flex justify-center items-center row-start-3 border rounded-2xl">
        <div className="absolute top-12 ">
          <Rotate />
        </div>
      </div>
    </div>
  );
};

export default TestSVGV2;
