"use client";
import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { APP_NAME } from "@/lib/constants";

export default function ResumePage() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
      <h1 className="w-full flex justify-center font-extrabold text-6xl py-4">
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
