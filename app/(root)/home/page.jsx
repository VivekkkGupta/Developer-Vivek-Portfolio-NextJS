import React from "react";
import Link from "next/link";
import { FlaskConical, BookOpen, GraduationCap } from "lucide-react";
import MySkills from "@/components/shared/MySkills/MySkills";
import HomeProjects from "@/components/shared/Projects/HomeProjects";

export default function HomePage() {
  const buttons = [
    {
      icon: <FlaskConical className="text-green-400" />,
      text: "What I built",
      linkText: "Projects →",
      link: "/projects",
      glow: "shadow-green-500",
    },
    {
      icon: <BookOpen className="text-pink-400" />,
      text: "Read my story",
      linkText: "About →",
      link: "/about",
      glow: "shadow-pink-500",
    },
    {
      icon: <GraduationCap className="text-purple-400" />,
      text: "Hire me!",
      linkText: "Resume →",
      link: "/resume",
      glow: "shadow-purple-500",
    },
  ];

  return (
    <div className="w-full px-5 py-10 overflow-auto flex flex-col gap-10">
      {/* Introduction */}
      <div className="flex flex-col gap-5">
        <h1 className="font-extrabold tracking-tight text-4xl md:text-6xl py-5">
          Hi, I am <span className="text-violet-500">Vivek Kumar Gupta</span>
        </h1>
        <p className="">
          I am a Software Engineer based in India, skilled in building scalable,
          interactive web applications using Next.js, Vite, React.js, Mongo DB,
          Express.js, Node.js, Redis, Kafka, Socket.io.
        </p>
        <p className="">
          Looking for Fulltime Software Engineering job opportunities to utilize
          my skills.
        </p>
        <p className="">
          This is my place for sharing my thoughts, projects, and experiences.
        </p>
      </div>

      {/* QuickButtons */}
      <div className="flex flex-col py-10 items-center gap-4">
        {buttons.map((btn, index) => (
          <div
            key={index}
            className={`flex items-center justify-between w-full max-w-sm px-6 py-4 bg-black rounded-xl border border-gray-800 ${btn.glow} hover:shadow-md hover:shadow-violet-500 transition-all ease-in-out duration-300`}
          >
            <div className="flex items-center space-x-2 text-white">
              {btn.icon}
              <span className="text-lg">{btn.text}</span>
            </div>

            <Link
              href={btn.link}
              className="text-yellow-400 text-lg font-semibold"
            >
              {btn.linkText}
            </Link>
          </div>
        ))}
      </div>

      {/* My Skills */}
      <MySkills />

      {/* Selected projects */}
      <HomeProjects />
    </div>
  );
}
