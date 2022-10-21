const Contact = ({ bypassHeight }) => {
  return (
    <section
      className={`container mx-auto  py-10 ${
        bypassHeight ? bypassHeight : "min-h-screen"
      }`}
    >
      <form className="flex flex-col items-center gap-3">
        <h2 className="text-4xl font-semibold">Contact me</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="first-name">
            <span className="label-text">First name</span>
          </label>
          <input
            required
            id="first-name"
            type="text"
            placeholder="Sarah"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="last-name">
            <span className="label-text">Last name</span>
          </label>
          <input
            required
            id="last-name"
            type="text"
            placeholder="Parker"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="email">
            <span className="label-text">Email address</span>
          </label>
          <input
            required
            id="email"
            type="email"
            placeholder="hello@example.com"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label" htmlFor="message">
            <span className="label-text">Message</span>
          </label>
          <textarea
            required
            rows="5"
            id="message"
            placeholder="Write your message"
            className="textarea textarea-bordered w-full max-w-xs resize-none"
          />
        </div>
        <button className="btn btn-primary mt-5" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
