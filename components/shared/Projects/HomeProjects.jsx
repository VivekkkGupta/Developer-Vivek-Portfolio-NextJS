import { ProjectsData } from '@/lib/data'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

function HomeProjects() {
  return (
    <div className="flex flex-col gap-5">
        <h2 className="font-extrabold tracking-wide text-4xl">
          Portfolio Projects
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2">
          {ProjectsData.map((project, index) => (
            <Card className="flex flex-col hover:border hover:shadow-md hover:shadow-purple-500 hover:border-purple-400 duration-300 transition-all"
              key={index}>
             
              <CardHeader>
                <CardTitle className={``}>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <CardDescription className={`mt-4`}>
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto items-end">
                {" "}
                {/* Add mt-auto to the CardFooter */}
                <span className="text-xs text-gray-500">{project.date}</span>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <Button>View</Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
  )
}

export default HomeProjects
