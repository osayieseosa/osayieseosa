'use client'

import { Button } from "flowbite-react";
import HeroIconComponent from "./HeroIconComponenet";

export default function HeroComponent() {
  return (
    <section className="flex justify-between items-center  py-10 lg:py-0 border-y xl:border-hidden xl:rounded-xl">
        <div className="px-10 space-y-5 lg:py-6">
        <h5 className="font-extrabold text-xs text-gray-700 dark:text-gray-200">what is your story?</h5>
        <h2 className="text-6xl md:text-7xl max-w-xl font-serif w-11/12 sm:w-9/12 text-gray-800 dark:text-white font-semibold"><span className=" text-accent-light dark:text-accent-dark">Eseosa</span>{" "} is a fullstack web developer.</h2>
        <p className="w-9/12 font-normal text-gray-500 dark:text-gray-400">In the bustling world of web development, Osayi Eseosa is a full-stack javascript web developer. He crafts  captivating and interactive web applications, bringing clients' visions to life. Dive into a digital realm where innovation meets skill, led by his dedication to shaping exceptional online experience.</p>
        <Button size='lg' className="bg-primary-light dark:bg-primary-dark">Download CV</Button>
        </div>
        <div className="hidden lg:inline-flex h-40 lg:h-80 xl:h-96 mx-5">
<HeroIconComponent/>
        </div>
    </section>
  )
}
 