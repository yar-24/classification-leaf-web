"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { newsFeature } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";

const WhatsFeature = () => (
  <section className={`${styles.paddings} relative z-20`} id="fitur">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Fitur" />
        <TitleText title={<>Fitur yang ada di Mendelof?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newsFeature.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/what-feature.png"
          width={200}
          height={200}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsFeature;
