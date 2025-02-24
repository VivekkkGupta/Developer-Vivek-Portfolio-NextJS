import React from "react";
import { APP_NAME } from "@/lib/constants";

const ProjectsData = [
    {
      id: 1,
      title: "ShortYourl",
      description:
        "A modern URL shortener web application provides Real-time analytics, tracks click and number of visits, and geolocation.",
      date: "January, 2025",
      link: "https://shortyourl.developervivek.com/",
      image: "/projects-thumbnails/shortyourl.jpg"
    },
    {
      id: 2,
      title: "Trello - Task Management System",
      description:
        "A task management system built with React.js and Node.js, featuring drag-and-drop functionality, real-time updates, and user role management. Deployed with Netlify and Render, it allows users to track and manage tasks efficiently.",
      date: "December, 2024",
      link: "https://trellotaskmanager.developervivek.com/",
      image: "/projects-thumbnails/trello.jpg"
    },
    {
      id: 3,
      title: "Scroll Master - Chrome Extension",
      description: "Scroll Master is a Chrome extension built with HTML, CSS, and JavaScript that automates scrolling through multiple tabs. It allows users to customize scroll settings and manage various tabs seamlessly with real-time status updates.",
      date: "November, 2024",
      link: "https://scrollmaster.developervivek.com/",
      image: "/projects-thumbnails/scrollmaster.jpg"
    },
    {
      id: 4,
      title: "Aesthetic Typing - Typing Game",
      description: "A typing game built with React.js and Framer Motion that allows users to improve their typing speed and accuracy. It features real-time WPM calculation, animated transitions, and tracks user progress.",
      date: "September, 2024",
      link: "https://aesthetictyping.developervivek.com/",
      image: "/projects-thumbnails/aesthetictyping.jpg"
    },
  ];

function Page() {
    
  return (
    <div>
      <h1 className="w-full flex justify-center font-extrabold text-6xl py-4 pb-5">
        Projects
      </h1>
      <div className="w-full h-full flex flex-col gap-10">
      {
          ProjectsData.map((project)=>
            (
                <a key={project.id} className="relative border p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between cursor-pointer" href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="mb-4 flex-1 pt-5">
                        <h2 className="font-bold text-2xl mb-2">{project.title}</h2>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <p className="md:absolute bottom-4 left-4 text-gray-400 text-sm">{project.date}</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src={project.image} alt={project.title} className="rounded-lg max-w-full h-auto"/>
                    </div>
                </a>
            )
        )
    }
    </div>
      <div className="">

      </div>
    </div>
  );
}

export default Page;
