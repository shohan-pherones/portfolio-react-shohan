const blogs = [
  {
    id: 1,
    title: "How To Make Visual Studio Code Look Amazing",
    url: "https://javascript.plainenglish.io/how-to-make-visual-studio-code-look-amazing-253d0b33b40d",
    body: "Visual Studio Code is an amazing editor with a large marketplace of extensions to tweak the editor to your use cases. The marketplace currently offers 8.000+ themes to create a visually pleasing editor which is just right for you. These themes help can adjust the colors of the interface, the icons used to display file types, and more. Today I want to highlight some of the most popular themes in the marketplace. Also, I will share my personal theme set-up at the end.",
    author: "Wesley Smits",
    publishedDate: "2022,10,20",
    img: "https://yt3.ggpht.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: 2,
    title: "Be Grateful for JavaScript Arrays: A Comparison with C",
    url: "https://medium.com/giant-machines/be-grateful-for-javascript-arrays-a-comparison-with-c-d8d80dffa4c6",
    body: "Ahh, JavaScript arrays. For a lot of us, they’re the first data structure we’re introduced to, and for good reason! There are so many ways we can use our little (or sometimes massive) list-like structures. But have you ever laid in bed and been jolted awake by curiosity as to how they work under the hood? No, you’re probably a normal person! But for the rest of you, stick around, and you too might develop a stronger love for JavaScript.",
    author: "Josh Melo",
    publishedDate: "2022,10,21",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    id: 3,
    title: "5 Things I Do In The Evenings to Avoid Tech/Programmer Burnout",
    url: "https://medium.com/geekculture/5-things-i-do-in-the-evenings-to-avoid-tech-programmer-burnout-d2f5a294e908",
    body: "Every professional has at least burned out once. Those in the tech industry are no exception to this. I’ve been there too. I’ve felt physically/mentally exhausted, demotivated, and cynical toward my job. That’s how my burnout started. But there are 5 things I do in the evenings, after work, to avoid tech/programmer burnout. I can’t say I haven’t burned out again, but they helped me avoid it as much as possible. You don’t have to do them all but pick those that best suit you.",
    author: "Frank Andrade",
    publishedDate: "2022,10,20",
    img: "https://i.pinimg.com/736x/df/11/e9/df11e98cff4836935e01accdc23b2b15.jpg",
  },
  {
    id: 4,
    title:
      "All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)",
    url: "https://medium.com/edge-coders/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2",
    body: "React is defined as a JavaScript library for building user interfaces. Let’s start by talking about the two different parts of this definition. React is a JavaScript “library”. It is not exactly a “framework”. It is not a complete solution and you will often need to use more libraries with React to form any solution. React does not assume anything about the other parts in any solution.",
    author: "Samer Buna",
    publishedDate: "2017,8,18",
    img: "https://avatars.githubusercontent.com/u/6412038?s=280&v=4",
  },
  {
    id: 5,
    title: "React meets GSAP",
    url: "https://medium.com/@marcmintel/react-meets-gsap-c6dd82edeb72",
    body: "How to structure mounting and unmounting animations for your React Components. While developing my own React app I came to the point where I wanted to implement UI animations. I’ve tried things like ReactCSSTransitionGroup, react-motion, velocity and finally GSAP.",
    author: "Marc Mintel",
    publishedDate: "2017,5,5",
    img: "https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci81YTIyNGYxMjFmOTZiZDAzN2JmNmMxYzFlMmI2ODZmYj9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.CMdi2Cw8DqSoHqHTTZtPFwBCZtsh5bZRFI60cTbmbRU",
  },
];

const Blogs = () => {
  return (
    <section className="container mx-auto py-10 min-h-screen">
      <h2 className="text-4xl font-semibold text-center mb-10">Recent blogs</h2>
      <div className="blogs-wrapper flex flex-col gap-10 px-5">
        {blogs.map((blog) => (
          <div
            className="blog flex gap-5 flex-col xl:grid xl:grid-cols-4"
            key={blog.id}
          >
            <div className="blog-img w-80 h-80 overflow-hidden">
              <img src={blog.img} alt={blog.title} className="w-full block" />
            </div>
            <div className="blog-texts flex flex-col items-start gap-2 xl:col-span-3">
              <h3 className="text-2xl font-semibold">{blog.title}</h3>
              <p className="">
                Written by <span className="text-primary">{blog.author}</span>{" "}
                on{" "}
                <span className="text-primary">
                  {new Date(blog.publishedDate).toLocaleString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
              </p>
              <p className="text-justify">{blog.body}</p>
              <a
                href={blog.url}
                target="_blank"
                className="btn btn-primary mt-3"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
