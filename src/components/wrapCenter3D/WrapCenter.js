import React, { useRef, useEffect, useState } from "react";
import styles from "./WrapCenter.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import Navigation from "../menu/Navigation";
import Social from "../social/Social";
function AnimatedModel() {
  const glb = useGLTF("3d/perfectv3.glb");
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
      scale={1.78}
      rotation={[0.1, Math.PI / 0.72, 0]} // Rotate around Y-axis to show the other side of the face
      position={[1.3, -1.12, 0.2]}>
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
function AnimatedDance() {
  const glb = useGLTF("3d/dance.glb");
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
      scale={1.8}
      rotation={[0.3, Math.PI / 15, 0]} // Rotate around Y-axis to show the other side of the face
      position={[0, -2, 0]}>
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
const songs = [
  { title: "Trinh", src: "/music/HIEUTHUHAI.mp3" },
  { title: "Exit Sign", src: "/music/ExitSign.mp3" },
  { title: "NO LOVE NO LIFE", src: "/music/NOLOVENOLIFE.mp3" },
];

const Equalizer = ({ isPlaying }) => {
  return (
    <div
      className={`${styles.playing} ${
        isPlaying ? styles.active : styles.notactive
      }`}>
      <div className={`${styles.greenline} ${styles.line1}`}></div>
      <div className={`${styles.greenline} ${styles.line2}`}></div>
      <div className={`${styles.greenline} ${styles.line3}`}></div>
      <div className={`${styles.greenline} ${styles.line4}`}></div>
      <div className={`${styles.greenline} ${styles.line5}`}></div>
      <div className={`${styles.greenline} ${styles.line6}`}></div>
    </div>
  );
};
const WrapCenter = () => {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
    setIsPlaying(true);
  };

  const playPrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  const selectSong = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);
  return (
    <div className={`${styles.wrap}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="6 -3.6 26 25">
        <defs>
          <pattern
            id="imagePattern"
            patternUnits="objectBoundingBox"
            width="100%"
            height="120%">
            <image
              transform="scale(2)"
              href="/image/background/bgCenter.png"
              x="0"
              y="-13"
              width="100%"
              height="160%"
            />
          </pattern>
        </defs>

        <path
          transform="scale(1.19)"
          d="M-1 0Q-2 0-2 1C-2 6-2 11-2 17Q-2 18-1 18C3.5 18 5.7 18 19 18Q18 18 19 18 19 18 20 18C21 18 21 17 21 17Q21 12.5 21 13 21 12 22 11T23 10 24 9 25 7.5C25 6 25 6 25-2Q25-3 24-3C21-3 17-3 12-3Q11-3 11-2T11-1Q11 0 10 0C8 0 4 0 2 0Z"
          stroke="#ffff"
          stroke-width="0.05"
          fill="url(#imagePattern)"
        />
        <path
          transform="scale(1.19)"
          d="M25 8.6Q23.5 10 22 11.7 21.5 12.5 21.5 13V17Q21.5 18 22.5 18H33Q34 18 34 17 34 14 34 7 34 6 33 6H26.5Q25.5 6 25.5 7 25.5 7 25.5 7 25.5 8 25 8.6"
          stroke="#ffff"
          stroke-width="0.05"
          fill="white"
        />
      </svg>

      <Canvas
        style={{
          position: "absolute",
          transform: "translate(-35%, 0%)",
          width: "50%", // Điều chỉnh kích thước của Canvas tại đây
          height: "100%",
          border: "1px",
          cursor: "none",
        }}>
        <ambientLight intensity={3.3} />
        <pointLight position={[0, 5, 2]} intensity={100} />
        <AnimatedModel />
      </Canvas>

      <div className={styles.musicPlayer}>
        <audio
          ref={audioRef}
          src={songs[currentSongIndex].src}
          onEnded={playNext} // Tự động chuyển bài khi bài hiện tại kết thúc
          autoPlay={isPlaying} // Tự động phát khi có bài mới
        />
        <div className="">
          <Equalizer isPlaying={isPlaying} />
        </div>

        <div className=" flex justify-end items-center flex-col h-full">
          <div className={styles.actionDance}>
            <div>
              <Canvas
                style={{
                  position: "absolute",
                  transform: "translate(0%, 0%)",
                  width: "100%", // Điều chỉnh kích thước của Canvas tại đây
                  height: "100%",
                  border: "1px",
                  cursor: "none",
                }}>
                <ambientLight intensity={3.3} />
                <pointLight position={[0, 5, 2]} intensity={100} />
                <AnimatedDance />
              </Canvas>
            </div>
            <div className={styles.startMusic}>
              <button onClick={togglePlay}>
                {isPlaying ? (
                  <FaPause color="white" size="20px" />
                ) : (
                  <FaPlay color="white" size="20px" />
                )}
              </button>
            </div>
          </div>

          <div className={styles.controls}>
            <button onClick={playPrev}>
              <MdSkipPrevious color="black" size="20px" />
            </button>
            <span style={{ fontFamily: "Orbitron" }} className="text-black">
              Trinh-HTH
            </span>
            <button onClick={playNext}>
              <MdSkipNext color="black" size="20px" />
            </button>
          </div>

          {/* <div className={styles.playlist}>
            <h3>Playlist</h3>
            <ul>
              {songs.map((song, index) => (
                <li
                  key={index}
                  onClick={() => selectSong(index)}
                  className={index === currentSongIndex ? styles.active : ""}>
                  {song.title}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
      <div className="top-[40px] fixed z-50 left-[24%]">
        <Navigation />
      </div>
      <div className={styles.social}>
        <div className={styles.parent}>
          <div className={styles.card}>
            <div className={styles.logo}>
              <span className={`${styles.circle} ${styles.circle1}`}></span>
              <span className={`${styles.circle} ${styles.circle2}`}></span>
              <span className={`${styles.circle} ${styles.circle3}`}></span>
              <span className={`${styles.circle} ${styles.circle4}`}></span>
              <span
                style={{ fontFamily: "Orbitron" }}
                className={`${styles.circle} ${styles.circle5}`}>
                Social
              </span>
            </div>
            <div className={styles.glass}></div>
            <div className={styles.content}>
              <span className={styles.title} style={{ fontFamily: "Orbitron" }}>
                Find me in
              </span>
              <span className={styles.text}>
                Feel free to contact me on the following social networks so we
                can connect and communicate more easily
              </span>
            </div>
            <div className={styles.bottom}>
              {/* <div className={styles.socialButtonsContainer}>
                <button
                  className={`${styles.socialButton} ${styles.socialButton1}`}>
                  <svg
                    viewBox="0 0 30 30"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.svg}>
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                  </svg>
                </button>
                <button
                  className={`${styles.socialButton} ${styles.socialButton2}`}>
                  <svg
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.svg}>
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </button>
                <button
                  className={`${styles.socialButton} ${styles.socialButton3}`}>
                  <svg
                    viewBox="0 0 640 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.svg}>
                    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                  </svg>
                </button>
              </div> */}
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapCenter;
