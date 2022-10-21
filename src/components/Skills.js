const skills = [
  {
    id: 1,
    title: "HTML",
    img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
  },
  {
    id: 2,
    title: "CSS",
    img: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
  },
  {
    id: 3,
    title: "Bootstrap",
    img: "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  {
    id: 5,
    title: "JavaScript",
    img: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  {
    id: 6,
    title: "GSAP",
    img: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },
  {
    id: 7,
    title: "Parcel",
    img: "https://parceljs.org/avatar.accb250e.png",
  },
  {
    id: 8,
    title: "React",
    img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  },
  {
    id: 9,
    title: "React Router",
    img: "https://cdn.cdnlogo.com/logos/r/97/react-router.svg",
  },
  {
    id: 10,
    title: "Git",
    img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
  },
  {
    id: 11,
    title: "GitHub",
    img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
  },
  {
    id: 12,
    title: "Netlify",
    img: "https://cdn.worldvectorlogo.com/logos/netlify.svg",
  },
  {
    id: 13,
    title: "Vercel",
    img: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
  },
];

const Skills = ({ bypassHeight }) => {
  return (
    <section
      className={`container mx-auto py-10  ${
        bypassHeight ? bypassHeight : "min-h-screen"
      }`}
    >
      <h2 className="text-4xl font-semibold text-center mb-10">Skills</h2>
      <div className="skills-wrapper flex gap-10 flex-wrap justify-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill w-24 overflow-hidden shadow-md p-3 rounded-lg grid items-center"
          >
            <img src={skill.img} alt={skill.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
