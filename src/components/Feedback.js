import React from "react";
import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <section className="container mx-auto text-center py-10 min-h-screen">
      <div className="flex flex-col gap-3">
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
      </div>
    </section>
  );
};

export default Feedback;
