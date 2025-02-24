"use client"
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { APP_NAME } from "@/lib/constants";

export default function ResumePage() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div>
            <h1 className='w-full flex justify-center font-extrabold text-6xl py-2'>Resume</h1>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <div style={{ height: '750px' }}>
                    <Viewer
                        fileUrl="/resume.pdf"
                        plugins={[defaultLayoutPluginInstance]}
                    />
                </div>
            </Worker>
        </div>
    );
}