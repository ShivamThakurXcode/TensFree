import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";

function Background() {
  return (
    <>
      <div className=" w-screen fixed z-[-1]  h-screen bg-gradient-to-r from-[#000000]  to-[#000000] ">
        <div className="bg-grnt   w-screen h-screen">
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
            ></motion.h1>
          </HeroHighlight>
        </div>
      </div>
    </>
  );
}

export default Background;
