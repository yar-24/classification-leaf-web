import { Parallax } from 'react-parallax';
import { Footer, Navbar, ScrollTop } from '../components';
import {
  About,
  Explore,
  Feedback,
  HowWork,
  Hero,
  Insights,
  WhatsFeature,
  GetStarted,
} from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    {/* <ScrollTop /> */}
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <WhatsFeature />
      <div className="gradient-04 z-0" />
      <HowWork />
    </div>
    <Parallax
      blur={5}
      bgImage="parallax.png"
      bgImageAlt="the cat"
      strength={500}
    >
      <GetStarted />
    </Parallax>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Home;
