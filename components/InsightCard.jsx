'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';
import Image from 'next/image';

const InsightCard = ({ imgUrl, title, subtitle, url, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <Image
      src={imgUrl}
      width={200}
      height={200}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <a
          href={url}
          target="_blank"
          className="font-normal lg:text-[42px] text-[24px] text-white leading-10 hover:text-secondary-white"
        >
          {title}
        </a>
        <p className="text-wrap mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <a
        href={url}
        target="_blank"
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white cursor-pointer"
      >
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain hover:-rotate-90"
        />
      </a>
    </div>
  </motion.div>
);

export default InsightCard;
