import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  const height = "h-auto";

  return (
    <>
      <Projects bypassHeight={height} />
      <Skills bypassHeight={height} />
      <About bypassHeight={height} />
      <Contact bypassHeight={height} />
    </>
  );
};

export default Home;
