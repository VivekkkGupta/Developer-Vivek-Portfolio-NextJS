import React from "react";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import vivekimage from "@/public/images/Vivek-Kumar-Gupta.jpg";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="flex md:flex-row flex-col items-start justify-between relative">
      <div className="px-6 py-[8rem] leftside w-full md:w-1/3 flex flex-col items-center justify-center gap-10 sticky top-0">
        <h1 className="font-extrabold text-6xl">About</h1>
        <div className="flex items-center justify-center rounded-full h-[20rem] w-[20rem] bg-gray-400">
          <Image src={vivekimage} alt="" className="rounded-full " />
        </div>
        <p className="text-gray-400">Software Engineer</p>
        <a href={SOCIAL_LINKS.linkedin} target="_blank">
          <Button
            className="border-2 rounded-full w-[15rem] h-[4rem]"
            variant="ghost"
          >
            Connect on <Linkedin />
          </Button>
        </a>
      </div>
      <div className="p-6 pt-[20rem] rightside w-full md:w-2/3 flex items-center justify-center">
        <p>
          I am Vivek, a passionate Software Engineer, graduated in 2023 with
          Bachelor's in Computer Engineering from Mumbai University.
          <br />
          <br />
          I am a self taught web developer and programmer.
          <br />
          My Teachers are Hitesh Chaudhary, Luv Babbar, Nishant Chahar, Anshika
          Gupta, Tanay Pratap, Fraz, Shreyians, Harkirat Singh, and many more.
          <br />
          <br />
          My Skills
          <br />
          Next.Js, React.Js, Javascript, HTML5, CSS3, c++, Python, Node.Js,
          Express.Js, MongoDB, Git, Github, Tailwind CSS, SQL, MYSQL.
          <br />
          I sometimes writes technical blog on Hashnode if I encounter any
          problem and solve it after nigths of debugging.
          <br />
          <br />
          Things I do other than development, I love to Cricket, Chess. I am a
          space enthusiast
          <br />
          <br />
          {/* What I Listen */}
        </p>
      </div>
    </div>
  );
}
