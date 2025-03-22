import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
  projectSeven,
  projectEight,
  projectNine,
  projectTen,
  projectEleven,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center bg-green-500 items-center text-center mb-10">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Live File Sharing App"
          des="A real-time file-sharing application with authentication, file previews, and cloud storage."
          src={projectOne}
          githubLink="#"
          liveLink="https://liveshare.kesug.com"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="A full-stack e-commerce platform with user authentication, payment integration, and a modern UI."
          src={projectTwo}
          githubLink="https://github.com/Smegne/ehioculturalcloths"
          liveLink="#"
        />
        <ProjectsCard
          title="Chatting App"
          des="A real-time chat application with group chat, media sharing, and push notifications."
          src={projectThree}
          githubLink="https://github.com/Smegne/react-chatap"
          liveLink="https://yourchatapp.com"
        />
        <ProjectsCard
          title="Booking System"
          des="An online booking system with scheduling, payments, and user dashboard features."
          src={projectFour}
          githubLink=""
          liveLink="https://www.booking.com/index.html?aid=309654;label=en-et-miscellaneous_-3Y7hxx9B0B7F70JFUxDdkAS696889489342:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-300469378770:lp9075493:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg;ws=&gad_source=1&gclid=Cj0KCQiAq-u9BhCjARIsANLj-s1uaXT9jEumqTBzRgfpXPVn72twLC2OE3HPB88jnNlDHocUdC_BR0YaApSzEALw_wcB"
        />
        <ProjectsCard
          title="Amazon E-commerce Clone"
          des="A full-stack Amazon clone with product search, user authentication, and checkout functionality."
          src={projectFive}
          githubLink="#"
          liveLink="https://youramazonclone.com"
        />
        <ProjectsCard
          title="Zoom Clone"
          des="A video conferencing app with screen sharing, chat, and meeting scheduling features."
          src={projectSix}
          githubLink="#"
          liveLink="https://www.zoom.com/"
        />
        <ProjectsCard
          title="Evangai Network Clone"
          des="A social media network clone with profile customization, posts, and real-time messaging."
          src={projectSeven}
          githubLink="#"
          liveLink="https://evangadi.com/"
        />
        <ProjectsCard
          title="E-Learnig platform number 1"
          des="A modern e-learning platform similar to W3Schools, designed with a clean and interactive UI. It provides structured courses, hands-on coding exercises, quizzes, and a user-friendly  code editor learning experience. Built using Node.js, React, MySQL, and Tailwind CSS, it ensures smooth performance, responsiveness, and scalability for learners of all levels"
          src={projectEight}
          githubLink="https://github.com/Smegne/w3-elearnig-platform.git"
          liveLink="#"
        />

       <ProjectsCard
          title="(SMS) Student mangment system"
          des="This project is a Student Management System designed to efficiently handle student records, course enrollments, attendance tracking, and performance evaluation. Built with a modern tech stack, it ensures seamless data management, user-friendly interfaces, and role-based access for students, teachers, and administrators. The system enhances academic administration by automating processes, improving accuracy, and providing insightful reports."
          src={projectNine}
          githubLink="https://github.com/Smegne/student-managment-system.git"
          liveLink="#"
        />

       <ProjectsCard
          title="To-Do List APP with node js"
          des="This project is a To-Do List app built with Node.js, designed to help users efficiently manage tasks and stay organized. It features task creation, editing, deletion, and status tracking with a clean and user-friendly interface. The app ensures smooth performance, real-time updates, and scalability, making task management simple and effective"
          src={projectTen}
          githubLink="https://github.com/Smegne/todo-app-with-nodejs.git"
          liveLink="#"
        />
        <ProjectsCard
          title="E-Learnig platform number 2"
          des="A modern e-learning platform  designed with a clean and interactive UI. It provides structured courses, hands-on coding exercises, quizzes, and a user-friendly  code editor learning experience. Built using Node.js, React, MySQL, and Tailwind CSS, it ensures smooth performance, responsiveness, and scalability for learners of all levels"
          src={projectEleven}
          githubLink="https://github.com/Smegne/FULLSTACK-REACT-AND-NODE-E-LEARNIG-POJECTT.git"
          liveLink="#"
        />

      </div>
    </section>
  );
};

export default Projects;
