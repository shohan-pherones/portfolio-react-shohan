import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  from: {
    x: "-100vw",
    opacity: 0,
  },
  to: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1,
      delay: 0.5,
    },
  },
};

const Feedback = () => {
  return (
    <section className="container mx-auto text-center py-10 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="from"
        animate="to"
        className="flex flex-col gap-3"
      >
        <h2 className="text-7xl font-bold text-primary">Thankyou!</h2>
        <h3 className="text-3xl font-semibold">
          Your message has been sent successfully.
        </h3>
        <p>
          I will give a feedback to your email as soon as possible, stay
          blessed.
        </p>
        <Link to="/" className="btn btn-primary self-center mt-5">
          Back to homepage
        </Link>
      </motion.div>
    </section>
  );
};

export default Feedback;
