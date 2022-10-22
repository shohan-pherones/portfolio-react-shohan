import { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact from "../assets/img/contact.png";
import { useHistory } from "react-router-dom";

const Contact = ({ bypassHeight }) => {
  const form = useRef();
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c8l1ril",
        "template_42fboqf",
        form.current,
        "_donm6DiuagFO3W1D"
      )
      .then(
        () => {
          history.push("/feedback");
        },
        () => {
          history.push("/failed");
        }
      );
  };

  return (
    <section
      className={`container mx-auto  py-10 ${
        bypassHeight ? bypassHeight : "min-h-screen"
      }`}
    >
      <h2 className="text-4xl font-semibold text-center mb-10">Contact me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={contact} alt="3d illustration of a rocket" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center gap-3 self-center"
        >
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="first-name">
              <span className="label-text">First name</span>
            </label>
            <input
              required
              id="first-name"
              name="first-name"
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
              name="last-name"
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
              name="email"
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
              name="message"
              placeholder="Write your message"
              className="textarea textarea-bordered w-full max-w-xs resize-none"
            />
          </div>
          <input className="btn btn-primary mt-5" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
