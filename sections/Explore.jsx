"use client";

/* eslint-disable react/jsx-wrap-multilines */

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { exploreWorlds } from "../constants";
import { staggerContainer } from "../utils/motion";
import { ExploreCard, TitleText, TypingText } from "../components";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section className={`${styles.paddings}`} id="penyakit">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Penyakit Daun" textStyles="text-center" />
        <TitleText
          title={
            <>
              Pilih penyakit daun kopi
              <br className="md:block hidden" />
              yang anda ingin tahu
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((item, index) => (
            <ExploreCard
              key={item.id}
              {...item}
              index={index}
              active={active}
              handleClick={setActive}
              href={item.url}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
