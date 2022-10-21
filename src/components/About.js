import { Link } from "react-router-dom";

const About = ({ bypassHeight }) => {
  return (
    <section
      className={`container mx-auto  py-10 ${
        bypassHeight ? bypassHeight : "min-h-screen"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-4xl font-semibold">About me</h2>
        <p>
          My name is Md. Shohanur Rahman and I’m a web developer. My expertise
          lays in website design and development, the world wide web,
          interactive experiences, and applications. It’s my passion for making
          people’s lives better that drives me to excel at my profession.
        </p>
        <p>
          What I love about being a web developer is that every day there is a
          new problem to solve. I don’t think there will ever be an end to
          solving problems associated with breaking websites or integrating new
          features into existing ones; well short of our own evolution from
          species of human to aliens if the transcendance hypothesis came true!
        </p>
        <Link to="/contact" className="btn btn-primary">
          Send me a message
        </Link>
      </div>
    </section>
  );
};

export default About;
