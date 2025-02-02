"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/images/page-not-found-image.jpg"
        width={100}
        height={60}
        alt={`${APP_NAME} logo`}
        priority
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <button
          className="mt-4 ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => (window.location.href = "/")}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
