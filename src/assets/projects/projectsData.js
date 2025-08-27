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
    tech: "React, Node.js, MongoDB, Express js, Tailwind CSS, Cloudinary",
    challenge:
      "1. Problem: The music player caused lag when multiple beats played together. \n" +
      "2. Solution: I fixed this by controlling audio with React state and \n" +
      "   ensuring only one beat could play at a time. I also added error \n" +
      "   handling for failed fetch requests. \n" +
      "3. Learning: I learned how important proper state control and user \n" +
      "   feedback are for a smooth experience. \n\n" +

      "1. Problem: When I deployed on Render, refreshing gave a 404 error. \n" +
      "2. Solution: I solved this by using a hash (#) in the URL \n" +
      "   so the routes worked correctly on refresh. \n" +
      "3. Learning: I learned how deployment platforms handle routing \n" +
      "   differently from local development. \n\n" +

      "1. Problem: Images and audio files were disappearing after some time. \n" +
      "2. Solution: I used Cloudinary to host my media files reliably \n" +
      "   and linked them to my app. \n" +
      "3. Learning: I learned the importance of using a stable \n" +
      "   media hosting service for production apps.",
  },
  {
    name: "Full-stack Hair salon",
    image: projectSix,
    live: "https://hair-salon-snowy.vercel.app/",
    github: "https://github.com/Alvinza/Hair-Salon-FullStack",
    tech: "React, Node.js, MongoDB, Express js, Tailwind CSS",
    challenge:
      "1. Problem: The booking form data wasn’t saving and CORS errors kept \n" +
      "   blocking requests. \n" +
      "2. Solution: I configured CORS properly in the backend and validated \n" +
      "   inputs step by step. I also split the admin dashboard into smaller \n" +
      "   components to make it easier to manage. \n" +
      "3. Learning: I learned to debug step by step and stay patient when \n" +
      "   solving backend and form issues.",
  },
  {
    name: "E-commerce",
    image: projectOne,
    live: "https://zara-store-1ctr.onrender.com/",
    github: "https://github.com/Alvinza/zara-store",
    tech: "React, Redux, Bootstrap",
    challenge:
      "1. Problem: The Redux state reset on refresh, making users log in \n" +
      "   again and losing their cart items. \n" +
      "2. Solution: I saved both the user info and cart in localStorage \n" +
      "   and synced it with Redux when the app loads. I also handled \n" +
      "   shipping options like free and express delivery. \n" +
      "3. Learning: I learned how to persist state properly and improve \n" +
      "   the overall shopping experience.",
  },
  {
    name: "Modeling Agency",
    image: projectFour,
    live: "https://d-a-models.vercel.app/",
    github: "https://github.com/Alvinza/D-A-Models",
    tech: "React, Tailwind CSS",
    challenge:
      "1. Problem: The search function didn’t always return correct results, \n" +
      "   especially with different typing speeds or cases. \n" +
      "2. Solution: I normalized all text to lowercase and updated the \n" +
      "   filtering logic to work in real-time without breaking the layout. \n" +
      "3. Learning: I learned that small fixes and thorough testing can \n" +
      "   make a big difference in usability.",
  },
  {
    name: "Coding Bootcamp",
    image: projectThree,
    live: "https://nextcode-ddkg.onrender.com/",
    github: "https://github.com/Alvinza/nextcode",
    tech: "React, Framer Motion, Tailwind CSS, Node.js",
    challenge:
      "1. Problem: Too many animations made the course pages heavy and \n" +
      "   slowed down loading times. \n" +
      "2. Solution: I split lessons into smaller components, used lazy \n" +
      "   loading for assets, and kept animations simple but effective. \n" +
      "3. Learning: I learned how to balance performance with design \n" +
      "   so the app looks good but still runs fast. \n\n" +

      "1. Problem: The testimonials section needed a way to switch users. \n" +
      "2. Solution: I built a manual slider so users could move to the \n" +
      "   next or previous testimonial. \n" +
      "3. Learning: I learned how to manage UI state for custom sliders \n" +
      "   and improve user interaction without extra libraries.",
  },
];

export default projectList;
