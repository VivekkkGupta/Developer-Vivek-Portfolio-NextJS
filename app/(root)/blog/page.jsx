"use client"
import React from "react";
import { APP_NAME } from "@/lib/constants";

const blogs = [
  {
    title: "Understanding React Hooks",
    description:
      "A comprehensive guide to understanding and using React Hooks in your projects.",
    date: "October 10, 2023",
    slug: "understanding-react-hooks",
  },
  {
    title: "JavaScript ES6 Features",
    description:
      "An overview of the new features introduced in JavaScript ES6.",
    date: "September 25, 2023",
    slug: "javascript-es6-features",
  },
  {
    title: "CSS Grid Layout",
    description: "Learn how to create complex layouts easily with CSS Grid.",
    date: "August 15, 2023",
    slug: "css-grid-layout",
  },
];

export default function BlogPage() {
  const handleClick = (slug) => {
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="w-full flex justify-center font-extrabold text-6xl py-2 pb-10">
        Recent Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative border p-4 rounded-lg shadow-md flex flex-col justify-between cursor-pointer"
            onClick={() => handleClick(blog.slug)}
          >
            <div className="mb-4">
              <h2 className="font-bold text-2xl mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.description}</p>
            </div>
            <p className="absolute bottom-4 left-4 text-gray-400 text-sm">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
