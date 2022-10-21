import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  const height = "h-auto";

  return (
    <>
      <Skills bypassHeight={height} />
      <About bypassHeight={height} />
      <Contact bypassHeight={height} />
    </>
  );
};

export default Home;
