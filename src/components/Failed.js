import { Link } from "react-router-dom";

const Failed = () => {
  return (
    <section className="container mx-auto text-center py-10 min-h-screen">
      <div className="flex flex-col gap-3">
        <h2 className="text-7xl font-bold text-primary">Sorry!</h2>
        <h3 className="text-3xl font-semibold">Message sent failed.</h3>
        <p>Please try again later.</p>
        <Link to="/contact" className="btn btn-primary self-center mt-5">
          Back to contact page
        </Link>
      </div>
    </section>
  );
};

export default Failed;
