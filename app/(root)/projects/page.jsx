import React from "react";
import { APP_NAME } from "@/lib/constants";
import { ProjectsData } from "@/lib/data";

function Page() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="w-full flex justify-center font-extrabold text-6xl py-4 pb-5">
        Projects
      </h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
        {ProjectsData.map((project) => (
          <a
            key={project.id}
            className="relative border p-4 rounded-lg shadow-md flex flex-col justify-between cursor-pointer hover:border hover:shadow-md hover:shadow-purple-500 hover:border-purple-400 duration-300 transition-all"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-1">
              <h2 className="font-bold text-2xl mb-2">{project.title}</h2>
            </div>
            <div className="flex-1 flex items-start justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg max-w-full h-auto"
              />
            </div>
            <div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-400 text-sm">{project.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Page;
