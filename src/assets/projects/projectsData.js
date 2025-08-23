import projectOne from "./project_1.png";
import projectTwo from "./project_2.png";
import projectThree from "./project_3.png";
import projectFour from "./project_4.png";
import projectSix from "./project_6.png";

const projectList = [
  {
    name: "Full-stack Beat Store",
    image: projectTwo,
    live: "https://vinkid-beatz.onrender.com/",
    github: "https://github.com/Alvinza/vinkid-beatz",
    tech: "React, Node.js, MongoDB",
    challenge:
      "I faced challenges implementing real-time audio previews while keeping the app performant. Initially, loading multiple audio files slowed the UI. I solved this by lazy-loading audio and using React state efficiently, only rendering necessary components when needed. I also handled edge cases like simultaneous playback and errors in fetching beats from the backend.",
  },
  {
    name: "Full-stack Hair salon",
    image: projectSix,
    live: "https://hair-salon-snowy.vercel.app/",
    github: "https://github.com/Alvinza/Hair-Salon-FullStack",
    tech: "Next.js, Framer Motion, Sanity CMS",
    challenge:
      "Building the admin dashboard and handling backend posting with CORS were tricky. Initially, requests from the frontend were blocked, and form data wasn’t saving correctly. I debugged step by step, configuring CORS properly in the API, validating form inputs, and using Next.js API routes to securely create, update, and delete appointments. Implementing smooth animations with Framer Motion while keeping accessibility intact was another hurdle that required careful timing and aria-label management.",
  },
  {
    name: "E-commerce",
    image: projectOne,
    live: "https://zara-store-1ctr.onrender.com/",
    github: "https://github.com/Alvinza/zara-store",
    tech: "React, Firebase, Tailwind CSS",
    challenge:
      "Optimizing API calls to reduce latency was a major challenge. The app initially fetched all products on every render, slowing performance. I solved it by using React hooks with caching, limiting re-renders, and leveraging Firebase queries efficiently. Implementing a persistent cart across page refreshes also required careful state management with localStorage.",
  },
  {
    name: "Modeling Agency",
    image: projectFour,
    live: "https://d-a-models.vercel.app/",
    github: "https://github.com/Alvinza/D-A-Models",
    tech: "React, Node.js, MongoDB",
    challenge:
      "Creating a smooth admin interface to upload and manage model profiles was tricky. I had to handle image uploads, validation, and storage securely while making the dashboard responsive. Step by step, I structured the backend with proper API routes, integrated Multer for file uploads, and added error handling to provide clear feedback to the admin.",
  },
  {
    name: "Coding Bootcamp",
    image: projectThree,
    live: "https://nextcode-ddkg.onrender.com/",
    github: "https://github.com/Alvinza/nextcode",
    tech: "Next.js, Framer Motion, Sanity CMS",
    challenge:
      "Designing interactive course modules with animations without affecting load times was challenging. I broke down each feature—lesson rendering, navigation between modules, and responsive animations—step by step. I used Framer Motion’s lazy animations, optimized image assets in Sanity, and carefully structured components to ensure smooth transitions and accessibility compliance.",
  },
];

export default projectList;
