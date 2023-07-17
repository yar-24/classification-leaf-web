import { motion } from "framer-motion";
import styles from "../styles";
import { useState } from "react";
import { navVariants } from "../utils/motion";
import { slideIn } from "../utils/motion";

export const ResponsiveBar = ({ handleOpen }) => {
  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="fixed z-50 w-[80%] md:w-[30%] h-[100%] top-0 right-0 glassmorphism"
    >
      <button className="absolute right-3 top-3" onClick={handleOpen}>
        <img
          src="/cross.svg"
          alt="x"
          className="w-[24px] h-[24px] object-contain"
        />
      </button>
      <div>
        <ul className="mt-12 ml-5">
          <li className={styles.listNav}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.listNav}>
            <a href="#tentang">Tentang</a>
          </li>
          <li className={styles.listNav}>
            <a href="#penyakit">Penyakit</a>
          </li>
          <li className={styles.listNav}>
            <a href="#fitur">Fitur</a>
          </li>
          <li className={styles.listNav}>
            <a href="#kerja">Kerja</a>
          </li>
          <li className={styles.listNav}>
            <a href="#klasifikasi">Klasifikasi</a>
          </li>
          <li className={styles.listNav}>
            <a href="#wawasan">Wawasan</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
        id="home"
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <img
            src="/search.svg"
            alt="search"
            className="w-[30px] h-[30px] object-contain"
          />
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
            MENDELOF
          </h2>
          <button className="cursor-pointer" onClick={handleOpen}>
            <img
              src="/menu.svg"
              alt="menu"
              className="w-[24px] h-[24px] object-contain"
            />
          </button>
        </div>
      </motion.nav>
      {open ? <ResponsiveBar handleOpen={handleOpen} /> : null}
    </>
  );
};
export default Navbar;
