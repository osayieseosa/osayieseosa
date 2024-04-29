
import { Button } from "flowbite-react";
import HeroComponent from "./components/HeroComponent";
import ContactComponent from './components/ContactComponent'
const homepageLink = 'http://localhost:3000'

export default function Home() {
  return (
    <div>
      <HeroComponent/>
      <main className="divide-y-2">
      <section className="w-full items-center px-4 py-12 mx-auto lg:flex-row md:px-40 flex flex-col-reverse gap-10">
                <div className=" space-y-4 sm:text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-gray-700 dark:text-white">Tooling</h1>
                    <p className="max-w-4xl leading-relaxed sm:mx-auto lg:ml-0 text-gray-500 dark:text-gray-400">
                    Eseosa leverages cutting-edge tools to elevate your online presence. The main sections are powered by React for dynamic interfaces, Express/Node for robust backend functionality, and MongoDB for efficient data management, Experience a website that not only promotes your brand but also delivers exceptional functionality.
                    </p>
                    <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                    <Button className="bg-primary-light dark:bg-primary-dark" href={homepageLink+'/tools'}>
                        Explore his stack
                    </Button>
                    </div>
                </div>
                <div>
                    <img
                        src="/images/tools.jpg"
                        className="w-full mx-auto mt-6 sm:w-10/12"
                    />
                </div>
        </section>
        <section className="w-full items-center px-4 py-12 mx-auto lg:flex-row-reverse md:px-40 flex flex-col-reverse gap-10">
            <div className=" space-y-4 sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-700 dark:text-white">
                    My Projects
                </h1>
                <p className="max-w-4xl leading-relaxed sm:mx-auto lg:ml-0 text-gray-500 dark:text-gray-400">
                In the realm of web development, Eseosa stands out by not only crafting websites but also ensuring their continuous real-world utilization. His expertise extends to creating platforms that are not only functional but inherently self-maintainable, reflecting a commitment to sustainable digital solutions.
                </p>
                <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
    <Button className="bg-primary-light dark:bg-primary-dark" href={homepageLink+'/projects'}>Explore his projects</Button>
                </div>
            </div>
            <div>
                <img
                    src="/images/projects.jpg"
                    className="w-full mx-auto mt-6 sm:w-10/12"
                />
            </div>
        </section>
        <section className="w-full  px-4 py-12 mx-auto lg:flex-row md:px-40 flex flex-col-reverse gap-10">
            <div className=" space-y-4 sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold text-gray-700 dark:text-white">
                    Blogging
                </h1>
                <p className="max-w-4xl leading-relaxed sm:mx-auto lg:ml-0 text-gray-500 dark:text-gray-400">
                Eseosa's dedication to the tech community is evident in his blog, where he generously shares insights gained from his own mistakes. Geared towards expediting the learning process for both beginners and intermediate web developer, his articles serce as a valuable resource. By distilling his experiences into pratical lessons, Eseosa empowers others to navigate the intricate world of web development more efficiently.
                </p>
                <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                    <Button href={homepageLink+'/blogs'} className="bg-primary-light dark:bg-primary-dark">Explore his  blogs</Button>
                </div>
            </div>
            <div>
                <img
                    src="/images/blogging.png"
                    className="w-full mx-auto mt-6 sm:w-10/12"
                />
            </div>
        </section>
        <ContactComponent/>
      </main>


    </div>
  );
}