"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { DragDrop, TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-20`} id="klasifikasi">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
    >
      <TypingText title="| Memulai klasifikasi" textStyles="text-center" />
      <TitleText title={<>Pilih atau drag & drop</>} textStyles="text-center" />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] w-full flex flex-col items-center"
      >
        <DragDrop />
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
