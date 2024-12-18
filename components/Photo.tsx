"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className=" w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
          }}
          className=" w-[298px] h-[298px] lg:w-[398px] lg:h-[398px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            width={1000}
            height={1000}
            src="/assets/ezu.png"
            priority
            quality={100}
            alt=""
            className=" object-contain"
          />
        </motion.div>
        <motion.svg
          className=" w-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]  h-[300px] "
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r={"250"}
            stroke="#CBACF9"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
