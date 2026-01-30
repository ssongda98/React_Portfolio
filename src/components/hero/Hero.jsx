import { Canvas } from "@react-three/fiber";
import { motion } from "motion/react";
import { Suspense } from "react";
import "./hero.css";
import Shape from "./Shape";
import Speech from "./Speech";

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="h-full overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-full flex flex-col justify-start md:justify-between items-center md:items-start text-center md:text-left gap-8 md:gap-0">
        <motion.div
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{
            duration: 1,
          }}
        >
          <h1 className="mt-[100px] text-rose-200 text-6xl lg:text-7xl xl:text-8xl font-semibold">
            Sunny Song
          </h1>
          <Speech />
          {/* <h2 className='mt-4 lg:mt-8 text-2xl lg:text-3xl'>I'm Software Developer</h2> */}
        </motion.div>
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "easeInOut",
          }}
          href="#services"
          className="mb-[50px] w-max"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-end md:justify-between items-end">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="absolute md:relative top-[40%] md:top-0 flex flex-col gap-3 p-4 bg-[#2f204e] rounded-l-lg md:rounded-b-lg"
        >
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/sunnysong-dev"
            target="_blank"
          >
            <img src="/hero/linkedin.png" alt="" width={20} height={20} />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://github.com/ssongda98/2025_React_Portfolio"
            target="_blank"
          >
            <img src="/hero/github.png" alt="" width={20} height={20} />
          </motion.a>
          <motion.div variants={followVariants} className="w-[20px] h-full">
            <div className="text-xs rotate-90 bg-[#dd4c62] w-max h-full origin-top-left translate-x-[20px] px-2 flex justify-center items-center rounded-br-lg">
              LET&apos;S CONNECT
            </div>
          </motion.div>
        </motion.div>

        {/* CONTACT BUTTON */}
        <motion.a
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{
            duration: 2,
          }}
          href="/#contact"
          className="mb-0 md:mb-[50px]"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative"
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="tracking-widest text-xl">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="tracking-widest text-xl">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center w-12 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      {/* 3D */}
      <div className="absolute w-full h-[60%] top-auto bottom-0 md:h-full xl:top-0 xl:bottom-auto left-0 -z-1">
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="absolute left-8 right-0 lg:right-50 bottom-0 flex items-end h-full w-full md:h-[80%] md:w-max m-auto">
          <img
            src="/hero/sunnysong-desktop.webp"
            srcSet="
                    /hero/sunnysong-mobile.webp 412w,
                    /hero/sunnysong-desktop.webp 732w,
                    /hero/sunnysong-retina.webp 1464w
                   "
            sizes="(max-width: 768px) 412px, 732px"
            alt="Sunny"
            className="-scale-x-100 lg:scale-100 w-full object-contain md:object-cover"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
