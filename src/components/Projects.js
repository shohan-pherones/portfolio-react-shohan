const projects = [
  {
    id: 1,
    title: "Aero Verge - A Drone Marketplace Website",
    img: "https://pbs.twimg.com/media/FfnVvpeUoAEIPxr?format=jpg&name=large",
    details: [
      "Users can find various drones over several categories",
      "Users can purchase drones from this website",
      "An user login system has been implemented",
    ],
    tools: "React.js, React Router, Tailwind CSS, Daisy UI",
    liveLink: "https://aero-verge.netlify.app",
    githubLink: "https://github.com/shohan-pherones/aero-verge",
  },
  {
    id: 2,
    title: "Food Liner - A Recipe Application",
    img: "https://pbs.twimg.com/media/FfnWCd-VUAENz9g?format=jpg&name=large",
    details: [
      "Users can search and find recipes from this app",
      "Also can bookmark a specific recipe",
      "Also can upload a new recipe to the server",
    ],
    tools: "HTML, CSS, JavaScript",
    liveLink: "https://food-liner.netlify.app",
    githubLink: "https://github.com/shohan-pherones/food-liner",
  },
];

const Projects = ({ bypassHeight }) => {
  return (
    <section
      className={`container mx-auto py-10  ${
        bypassHeight ? bypassHeight : "min-h-screen"
      }`}
    >
      <h2 className="text-center text-4xl font-semibold mb-10">
        Recent projects
      </h2>
      <div className="projects-wrapper grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project) => (
          <div className="card w-96 bg-base-100 shadow-lg" key={project.id}>
            <figure>
              <img src={project.img} alt={project.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <ul className="pl-3">
                <li>&rarr; {project.details[0]}</li>
                <li>&rarr; {project.details[1]}</li>
                <li>&rarr; {project.details[2]}</li>
              </ul>
              <p>
                <strong>Tools:</strong> {project.tools}
              </p>
              <div className="card-actions gap-5">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Site
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
