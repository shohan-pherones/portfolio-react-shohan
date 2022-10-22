import hero from "../assets/img/hero.png";

const Hero = () => {
  return (
    <header className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div>
          <img src={hero} alt="3d illustration of a programmer" />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold lg:text-8xl">
            Md. Shohanur Rahman
          </h1>
          <p className="py-5 text-lg">
            I'm a full-stack web developer specializing in developing
            exceptional and unique websites. Currently, I'm focused on building
            accessible, human-centered interactive web apps.
          </p>
          <div className="flex gap-5 justify-center lg:justify-start">
            <a
              href="https://docs.google.com/document/d/1uYTvxmeNsx7CpkKPszWqjAMfJgt2bs6HSyzBVK06mZU/edit?usp=sharing"
              target="_blank"
              className="btn btn-primary"
            >
              Download resume
            </a>
            <a
              href="https://github.com/shohan-pherones"
              target="_blank"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
