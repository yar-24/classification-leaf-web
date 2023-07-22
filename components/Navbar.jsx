import { motion } from 'framer-motion';
import styles from '../styles';
import { useState } from 'react';
import { navVariants } from '../utils/motion';
import { Link } from 'react-scroll';
import { navLink } from '../constants';

export const ResponsiveBar = ({ handleOpen, open }) => {
  return (
    <div
      className={`fixed z-50 w-[60%] md:w-[30%] h-[100%] top-0 right-0 glassNavbar ${
        open ? 'translate-x-0' : 'translate-x-full'
      } duration-200 translate-all ease-in-out`}
    >
      <button className="absolute right-5 top-5" onClick={handleOpen}>
        <img
          src="/cross.svg"
          alt="x"
          className="w-[24px] h-[24px] object-contain"
        />
      </button>
      <div>
        <ul className="mt-12 ml-5">
          {navLink.map((nav, index) => (
            <li className={styles.listNav} key={index}>
              <Link
                activeClass="active"
                to={nav.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
      <ResponsiveBar handleOpen={handleOpen} open={open} />
    </>
  );
};
export default Navbar;
