"use client";

import { Banner } from "flowbite-react";
import { MdAnnouncement } from "react-icons/md";

export default function BannerComponent() {
  return (
    <Banner>
      <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mx-auto flex items-center">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <MdAnnouncement className="mr-4 h-4 w-4" />
            <span className="[&_p]:inline">
              Hey if you&apos;d want to checkout some more of my projects hit me up on&nbsp;
              <a
                href="https://wa.link/5my8vf"
                className="inline font-medium text-cyan-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-cyan-500"
              >
                WhatsApp
              </a>
            </span>
          </p>
        </div>

      </div>
    </Banner>
  );
}
