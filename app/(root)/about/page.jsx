import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import vivekimage from "@/public/images/Vivek-Kumar-Gupta.jpg";
import { SOCIAL_LINKS } from "@/lib/constants";
import MySkills from "@/components/shared/MySkills/MySkills";

export default function AboutPage() {
  return (
    <div className="flex md:flex-row flex-col items-start justify-between relative">
      <div className="px-6 py-8 md:py-[8rem] leftside w-full md:w-1/3 flex flex-col items-center justify-center gap-10 md:sticky md:top-0">
        <h1 className="font-extrabold text-5xl md:text-6xl text-center">About</h1>
        <div className="flex items-center justify-center rounded-full h-[20rem] w-[20rem] bg-gray-400 overflow-hidden">
          <Image
            src={vivekimage}
            alt="Vivek Kumar Gupta"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <p className="text-gray-400 text-center">Software Engineer</p>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          <Button className="border-2 rounded-full w-[15rem] h-[4rem]" variant="ghost">
            Connect on <Linkedin className="ml-2" />
          </Button>
        </a>
      </div>
      <div className="p-6 pt-[8rem] md:pt-[20rem] rightside w-full md:w-2/3">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            I am Vivek, a passionate Software Engineer, graduated in 2023 with a Bachelor's in
            Computer Engineering from Mumbai University.
          </p>
          <p className="leading-relaxed mb-6">
            I am a self-taught web developer and programmer. My teachers include Hitesh Chaudhary,
            Luv Babbar, Nishant Chahar, Anshika Gupta, Tanay Pratap, Fraz, Shreyians, Harkirat
            Singh, and many more.
          </p>
          <p className=" leading-relaxed mb-6">
            I occasionally write technical blogs on Hashnode when I encounter and solve challenging
            problems after nights of debugging.
          </p>
          <p className=" leading-relaxed mb-6">
            Beyond development, I enjoy Cricket, Chess, and I am a space enthusiast.
          </p>
          <MySkills />
        </div>
      </div>
    </div>
  );
}