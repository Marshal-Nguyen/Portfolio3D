import React, {
  useRef,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import styles from "./WrapCenter.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { BiSolidVolumeMute } from "react-icons/bi";
import { VscUnmute } from "react-icons/vsc";
import Navigation from "../menu/Navigation";
import Social from "../social/Social";
import { Html } from "@react-three/drei";
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
const AnimatedDance = forwardRef((props, ref) => {
  const glb = useGLTF("3d/dance.glb");
  const mixer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

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
    if (mixer.current) mixer.current.update(delta);
  });

  const toggleAnimation = () => {
    if (mixer.current) {
      if (isPlaying) {
        glb.animations.forEach((clip) => {
          const action = mixer.current.clipAction(clip);
          action.play();
        });
      } else {
        mixer.current.stopAllAction();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useImperativeHandle(ref, () => ({
    toggleAnimation,
  }));

  return (
    <group scale={1.8} rotation={[0.3, Math.PI / 15, 0]} position={[0, -2, 0]}>
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
});

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
  const animatedDanceRef = useRef();
  const handleToggleAnimation = () => {
    console.log("handleToggleAnimation called"); // Gỡ lỗi
    if (animatedDanceRef.current) {
      animatedDanceRef.current.toggleAnimation();
    }
  };
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    console.log("togglePlay called"); // Gỡ lỗi
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
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume; // Cập nhật âm lượng của phần tử âm thanh
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
          <div className="flex justify-between gap-2 text-[#000] items-center mb-1">
            <label htmlFor="volume">
              <BiSolidVolumeMute />
            </label>
            <input
              type="range"
              id="volume"
              className={styles.volume}
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
            <label htmlFor="volume">
              <VscUnmute />
            </label>
          </div>

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
                <AnimatedDance ref={animatedDanceRef} />
              </Canvas>
            </div>
            <div className={styles.startMusic}>
              <button
                onClick={() => {
                  togglePlay();
                  handleToggleAnimation();
                }}>
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
            <span
              style={{ fontFamily: "Orbitron" }}
              className="text-black text-[15px] ">
              {songs[currentSongIndex].title}
            </span>
            <button onClick={playNext}>
              <MdSkipNext color="black" size="20px" />
            </button>
          </div>
        </div>
      </div>
      <div className="top-[3%] absolute z-50 left-[3%]">
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
              <Social />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrapCenter;
