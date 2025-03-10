
import React from "react";
import { APP_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FlaskConical, BookOpen, GraduationCap } from "lucide-react";
import SvgResize from "@/components/shared/SvgResize/SvgResize";
import {svgs} from "@/lib/svgs";

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
        <h1 className="font-extrabold tracking-tight text-6xl py-5">
          Hi, I am <span className="text-violet-500">Vivek Kumar Gupta</span>
        </h1>
        <p className="">
          I am a Software Engineer with 1+ years of Industry experience. Worked
          on various projects and have experience in building scalable and
          complex web applications.
        </p>
        <p className="">
          This is my place for sharing my thoughts, projects, and experiences.
          Have a good read!
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
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold tracking-wide text-3xl">My skills</h2>
        <p className="">
          I have experience in building scalable and complex web applications
          using below technologies.
        </p>
        <div className="flex items-center gap-2">
          <h3 className="flex items-center">Front End : </h3>
          <SvgResize svgicon={svgs['html']} />
          <SvgResize svgicon={svgs["css"]} />
          <SvgResize svgicon={svgs["javascript"]} />
          <SvgResize svgicon={svgs["nextjs"]} />
          <SvgResize svgicon={svgs["reactjs"]} />
        </div>
        <div className="flex items-center gap-2">
          <h3 className="flex items-center">Backend End : </h3>
          <SvgResize svgicon={svgs['nodejs']} />
          <SvgResize svgicon={svgs["expressjs"]} />
        </div>
        <div className="flex items-center gap-2">
          <h3 className="flex items-center">Database : </h3>
          <SvgResize svgicon={svgs['mongodb']} />
          <SvgResize svgicon={svgs["mysql"]} />
          <SvgResize svgicon={svgs["redis"]} />
        </div>
        <div className="flex items-center gap-2">
          <h3 className="flex items-center">Other Skills : </h3>
          <SvgResize svgicon={svgs['docker']} />
          <SvgResize svgicon={svgs["aws"]} />
          <SvgResize svgicon={svgs["git"]} />
          <SvgResize svgicon={svgs["github"]} />
        </div>
      </div>

      {/* Selected projects */}
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold tracking-wide text-3xl">
          Selected Projects
        </h2>
        <p className="">
          I am a Software Engineer with 1+ years of Industry experience. Worked
          on various projects and have experience in building scalable and
          complex web applications.
        </p>
      </div>

      {/* Latest Articles */}
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold tracking-wide text-3xl">
          Latest Articles
        </h2>
        <p className="">
          I am a Software Engineer with 1+ years of Industry experience. Worked
          on various projects and have experience in building scalable and
          complex web applications.
        </p>
      </div>
    </div>
  );
}
