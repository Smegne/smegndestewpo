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
      </div>
    </section>
  );
};

export default Projects;
