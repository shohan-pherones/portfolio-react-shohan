import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  from: {
    y: 200,
    opacity: 0,
  },
  to: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1,
      delay: 0.5,
    },
  },
};

const About = ({ bypassHeight }) => {
  return (
    <section
      className={`container mx-auto  py-10 ${
        bypassHeight ? bypassHeight : "min-h-screen"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="from"
        animate="to"
        className="flex flex-col items-center gap-5 px-5 text-justify"
      >
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
        <Link to="/contact" className="btn btn-primary mt-3">
          Send me a message
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
