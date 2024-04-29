"use client";

import { Toast } from "flowbite-react";
import { useState,useEffect } from "react";

export default function PopupComponent() {
  const [appLoaded,setAppLoaded] = useState(false)
  useEffect(() => {
    setAppLoaded(true)
  },[])
  return (
    <>
    {appLoaded && <Toast className=" dark:bg-background-dark dark:text-text-dark border-2 dark:border-white">
      <div className="text-sm font-normal">Get in touch with me.</div>&nbsp;
      <div className="ml-auto flex items-center space-x-2">
        <a
          href="https://wa.link/5my8vf"
          className="rounded-lg p-1.5 text-sm font-medium text-green-500 hover:bg-secondary-light dark:text-green-400 dark:hover:bg-gray-700"
        >
          WhatsApp
        </a>
        <Toast.Toggle />
      </div>
    </Toast>}
    </>
  );
}
