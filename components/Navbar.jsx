import { motion } from 'framer-motion';
import styles from '../styles';
import { useState } from 'react';
import { navVariants } from '../utils/motion';
import { slideIn } from '../utils/motion';
import { Link } from 'react-scroll';

export const ResponsiveBar = ({ handleOpen }) => {
  return (
    <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="fixed z-50 w-[60%] md:w-[30%] h-[100%] top-0 right-0 glassNavbar"
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
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className={styles.listNav}>
            <Link
              activeClass="active"
              to="tentang"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Tentang
            </Link>
          </li>
          <li className={styles.listNav}>
            <Link
              activeClass="active"
              to="penyakit"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Penyakit
            </Link>
          </li>
          <li className={styles.listNav}>
            <Link
              activeClass="active"
              to="fitur"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Fitur
            </Link>
          </li>
          <li className={styles.listNav}>
            <Link
              activeClass="active"
              to="kerja"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Kerja
            </Link>
          </li>
          <li className={styles.listNav}>
            <Link
              activeClass="active"
              to="klasifikasi"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Klasifikasi
            </Link>
          </li>
          <li className={styles.listNav}>
            <Link
              activeClass="active"
              to="wawasan"
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
            >
              Wawasan
            </Link>
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
