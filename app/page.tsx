"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Projectcard from "@/components/Projectcard";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <div className="container mx-auto text-white md:w-[60%] ">

        <div className="image flex flex-col items-center justify-center mt-15">
          <motion.img
            src="nav.jpg"
            alt="Profile"
            width={150}
            className="rounded-full justify-center mb-2 outline-solid outline-offset-0 outline-gray-600"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1, ease: "easeOut"
            }}
          />
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {<div className="info flex flex-col justify-center items-center mt-3 text-center">
              <span className="md:text-6xl text-4xl font-bold">Hi, I'm Zain Arshad</span>
              <span className="md:text-4xl text-2xl font-bold text-gray-300 flex flex-col md:gap-13 gap-8">I am a Full Stack Developer Intern contributing to impactful and modern web applications.
                <span className="text-lg font-normal">With expertise in MERN Stack, Reactjs and NEXTjs, I focus on delivering scalable and efficient products.</span>
              </span>
            </div>}
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex justify-center items-center m-15">
          <button className='text-white cursor-pointer w-fit bg-gradient-to-br from-purple-950 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-3xl text-lg px-6 py-4 text-center me-2 ' ><a href="Zain's CV.pdf" target="_blank">Download Resume</a></button>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="text-white text-center md:w-[60%] mx-auto">
          <h2 className="text-4xl font-bold">Building Digital Experiences</h2>
          <div className="text-lg font-normal my-4">From idea to launch — we design, develop, and maintain everything you need for your digital success.</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="boxes text-white flex flex-col justify-center items-center mt-5">
          <div className="box1 flex flex-col md:flex-row gap-5 m-5">
            <div className="box3 text-white border rounded-3xl p-5 hover:border-white border-gray-600 md:w-1/2">
              <div className="first flex gap-2 items-center mb-2">
                <img className="invert" src="design.svg" alt="" />
                <span className="font-bold">DESIGN</span>
              </div>
              I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.
              Full-stack web development
              <div className="flex flex-col gap-2 mt-5">
                <span className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-white rounded-full"></div> UI/UX design with a focus on clarity and usability</span>

                <span className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-white rounded-full"></div> Modern, responsive layouts</span>

                <span className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-white rounded-full"></div> Consistent color schemes and typography</span></div>
            </div>
            <div className="box4 text-white border rounded-3xl p-5 hover:border-white border-gray-600 md:w-1/2">
              <div className="first flex gap-2 items-center mb-2">
                <img className="invert" src="tool.svg" alt="" />
                <span className="font-bold">DEVELOPMENT</span>
              </div>
              I can turn ideas into functional, high-performance web applications using the latest technologies.
              <div className="flex flex-col gap-2 mt-5">
                <span className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-white rounded-full"></div> Full-stack web development (React, Next.js, Node.js, MongoDB)</span>

                <span className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-white rounded-full"></div> API integration and backend logic</span>

                <span className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-white rounded-full"></div>Optimized performance and scalability</span>
              </div>
            </div>
          </div>
          <div className="box2 text-white border rounded-3xl p-5 hover:border-white border-gray-600 md:w-[40%] m-5">
            <div className="first flex gap-2 items-center mb-2">
              <img className="invert" src="setting.svg" alt="" />
              <span className="font-bold">MAINTAINANCE</span>
            </div>
            We keep your website running smoothly with regular updates, bug fixes, and performance improvements.
            <div className="flex flex-col gap-2 mt-5">
              <span className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-white rounded-full"></div>Continuous monitoring and updates</span>

              <span className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-white rounded-full"></div> Security patches and backups</span>

              <span className="flex items-center gap-3"><div className="h-1.5 w-1.5 bg-white rounded-full"></div> Feature enhancements and support</span>
            </div>
          </div>
        </div >
      </motion.div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >

        <div className="text-white mx-1 my-6 text-center md:w-[60%] md:mx-auto">
          <h2 className="text-4xl font-bold mt-5">Work Experience</h2>
          <div className="text-lg font-normal my-4">A comprehensive overview of my work experince across various development domains and tools.</div>
        </div>

        <div className="experience text-white border-2 mt-8 hover:border-white border-gray-600 rounded-3xl md:w-[60%] m-5 md:mx-auto p-5 mb-10">
          <h2 className="font-bold text-lg">Frontend Developer,<span className="font-bold text-gray-600 text-sm"> DIT GCU</span></h2>
          <div>Lahore, Pakistan</div>
          <div>The IT Department of Goverment College Univeristy that takes care of LMS and Campus Management System
            <div className="flex flex-col gap-2 mt-5">
              <span className="flex items-center gap-3"><div className="h-1 w-2.5 bg-white rounded-full"></div>Developed and maintained university software applications, using Node Js, Express.js, and React.Js contributing to the enhancement of campus-wide systems</span>

              <span className="flex items-center gap-3"><div className="h-1 w-2.5 bg-white rounded-full"></div> Collaborated with a multidisciplinary team to design and implement features, ensuring functionality met the requirements of various departments</span>

              <span className="flex items-center gap-3"><div className="h-1 w-2 bg-white rounded-full"></div> Collaborated with team members to ensure seamless integration of software components and adherence to coding standards</span>
              <span className="flex items-center gap-3"><div className="h-1 w-2.5 bg-white rounded-full"></div> Actively participated in agile development processes, attending sprint planning meetings, and contributing to the completion of project milestones</span>
            </div>

          </div>
        </div>
      </motion.div>

      <div className="projects mb-10">
        <div className="text-white text-center md:w-[60%] mx-auto">
          <div className="flex items-center justify-center m-5 gap-2">
            <img width={23} src="guthub.png" alt="github" />
            <div className="text-sm font-bold">Latest Github Projects</div>
          </div>
          <h2 className="text-4xl font-bold ">Open Source Projects</h2>
          <div className="text-lg font-normal my-4">Check out some of my latest open source projects on Github</div>
        </div>
      </div>

      <Projectcard />

      <div className="text-white flex justify-center items-center m-10 ">
        <Link href={"https://github.com/zainarshad16"} target="_blank">
        <button className="text-white cursor-pointer flex justify-center items-center gap-2 bg-gray-900 hover:bg-gray-950 px-5 py-4 hover:px-6 transition-all duration-500 ease-out rounded-3xl font-medium">
           View More on Github
           <FaGithub></FaGithub>
        </button>
        </Link>
      </div>

     
    </>
  );
}
