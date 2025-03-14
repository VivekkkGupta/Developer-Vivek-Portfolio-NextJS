"use client";
import React from "react";
export default function ResumePage() {

  return (
    <div>
      <h1 className="w-full flex justify-center font-extrabold text-5xl md:text-6xl py-8">
        Resume
      </h1>
      <div className="w-full flex justify-center">
        <iframe
          src="/resume.pdf"
          width="100%"
          height="900px"
          title="Resume - Vivek Kumar Gupta"
        />
      </div>
    </div>
  );
}
