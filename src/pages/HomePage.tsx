import Hero from '../components/Hero';
import About from '../components/About';
import Entities from '../components/Entities';
import Poles from '../components/Poles';
import Projects from '../components/Projects';
import Partnerships from '../components/Partnerships';
import News from '../components/News';

const HomePage = () => {
  return (
    <div className="pt-[96px]">{/* offset for fixed header */}
      <Hero />
      <About />
      <Entities />
      <Poles />
      <Projects />
      <Partnerships />
      <News />
    </div>
  );
};

export default HomePage;
