import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 p-10 
                 bg-white rounded-lg shadow-lg 
                
                 transition-all duration-300"
    >
      {/* Left Column */}
      <div className="flex flex-col flex-1">
        <div className="py-6 md:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
            Job Experience
          </h2>
        </div>
        <div className="mt-6 md:mt-14 w-full border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Freelance | Remote"
            subTitle="Google Out Tech - (2017 - Present)"
            result="WORLD"
            des="Designed and developed responsive and dynamic web applications using React, Node.js, PHP, MySQL, and JavaScript. Built and deployed multiple full-stack projects, including file-sharing platforms, chat applications, and admin dashboards. Implemented secure authentication with JWT and user management systems. Optimized database queries and backend performance for better scalability. Created mobile-friendly UIs using Bootstrap, Tailwind CSS, and MediaQuery. Integrated third-party APIs (e.g., TMDB API) into applications. Managed hosting and deployment using Netlify, Infinity Free, and custom servers. Collaborated with teams and clients to deliver custom web solutions."
          />
          <ResumeCard
            title="Lead Developer – Liveshare File-Sharing Platform"
            subTitle="Personal Project | 2024"
            result="ETHIOPIA"
            des="Developed a file-sharing system for students, supporting PDFs, videos, and images. Designed a secure login system using PHP and MySQL. Implemented a real-time chat feature using WebSockets. Ensured smooth and responsive UI/UX using modern frontend technologies like Tailwind CSS and Bootstrap. Integrated secure file encryption methods to protect user uploads. Deployed the system on a custom domain with optimized server performance."
          />
          <ResumeCard
            title="Full-Stack Developer – Stack Overflow Clone"
            subTitle="Personal Project | 2024"
            result="ONLINE"
            des="Built a Q&A platform where users can ask and answer questions. Designed a user-friendly UI using React and Tailwind CSS. Developed a RESTful API backend with Node.js and MySQL. Implemented secure user authentication with JWT. Ensured real-time updates using WebSockets. Integrated a voting and commenting system to enhance user engagement. Optimized database indexing for better search functionality."
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col flex-1">
        <div className="py-6 md:py-12 font-titleFont flex flex-col gap-4"></div>
        <div className="mt-6 md:mt-14 w-full border-l-[6px] border-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-Stack Developer – Freelance"
            subTitle="Upwork & Private Clients | 2024 – Present"
            result="UPWORK"
            des="Developed and deployed custom web applications for clients on Upwork and other freelance platforms. Designed responsive and interactive UIs using React, Bootstrap, and Tailwind CSS. Built and maintained secure backend systems using Node.js, PHP, and MySQL. Integrated payment gateways and third-party APIs in e-commerce platforms. Ensured SEO optimization, security, and performance improvements for clients’ websites. Provided post-deployment support and maintenance."
          />
          <ResumeCard
            title="E-Commerce Platform (Upwork Project)"
            subTitle="E-Commerce Platform"
            result="UPWORK"
            des="Developed a fully functional e-commerce site with product listings, cart, and checkout. Integrated secure payment gateways (PayPal, Stripe, etc.). Implemented user authentication, order tracking, and admin dashboards. Optimized website speed and mobile responsiveness. Designed an intuitive UI with easy navigation. Integrated AI-powered recommendation systems to enhance user experience. Ensured secure transactions with encrypted payment processing."
          />
          <ResumeCard
            title="Loan Company System (Client Project)"
            subTitle="Upwork"
            result="UPWORK"
            des="Built a loan application system with secure user registration and verification. Developed an automated loan approval process based on predefined criteria. Integrated real-time notifications and secure data handling. Deployed and maintained the system for client operations. Designed an admin dashboard for loan management and tracking. Ensured compliance with financial security regulations. Provided documentation and training for client usage."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
