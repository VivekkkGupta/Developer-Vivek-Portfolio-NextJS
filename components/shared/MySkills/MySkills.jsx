import React from "react";
import SvgResize from "@/components/shared/SvgResize/SvgResize";
import { svgs } from "@/lib/svgs";

function MySkills() {
  return (
    <div className="flex flex-col gap-5 py-10">
      <h2 className="font-extrabold tracking-wide text-4xl">My skills</h2>
      <p className="">
        I have experience in building scalable and complex web applications
        using below technologies.
      </p>
      <div className="flex items-center gap-4">
        <h3 className="flex items-center">Front End </h3>
        <SvgResize svgicon={svgs["html"]} />
        <SvgResize svgicon={svgs["css"]} />
        <SvgResize svgicon={svgs["javascript"]} />
        <SvgResize svgicon={svgs["nextjs"]} />
        <SvgResize svgicon={svgs["reactjs"]} />
      </div>
      <div className="flex items-center gap-4">
        <h3 className="flex items-center">Backend End </h3>
        <SvgResize svgicon={svgs["nodejs"]} />
        <SvgResize svgicon={svgs["expressjs"]} />
      </div>
      <div className="flex items-center gap-4">
        <h3 className="flex items-center">Database </h3>
        <SvgResize svgicon={svgs["mongodb"]} />
        <SvgResize svgicon={svgs["mysql"]} />
        <SvgResize svgicon={svgs["redis"]} />
      </div>
      <div className="flex items-center gap-4">
        <h3 className="flex items-center">Other Skills </h3>
        <SvgResize svgicon={svgs["docker"]} />
        <SvgResize svgicon={svgs["aws"]} />
        <SvgResize svgicon={svgs["git"]} />
        <SvgResize svgicon={svgs["github"]} />
      </div>
    </div>
  );
}

export default MySkills;
