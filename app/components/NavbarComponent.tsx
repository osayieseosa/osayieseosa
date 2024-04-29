"use client";

import { Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import SearchComponent from "./SearchComponent";

export function NavbarComponent() {
  
  return (
    <div className="m-2">
    <Navbar fluid border rounded className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Navbar.Brand href='/'>
        <img src="/images/avatar.png" className="mr-3 h-12 rounded-full" alt="Avatar" />
        <span className="self-center whitespace-nowrap text-xl font-extralight font-serif dark:text-white">Osayi Eseosa</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-6">
        <div className="flex gap-1">
        <SearchComponent />
        <DarkThemeToggle className="text-text-light dark:text-text-dark"/>
        </div>

        <Navbar.Toggle className="text-text-light dark:text-text-dark"/>
      </div>
      <Navbar.Collapse>
        <Navbar.Link href='/' className="font-light text-text-light dark:text-text-dark dark:bg-gray-600 sm:dark:bg-transparent sm:bg-transparent bg-secondary-light hover:bg-secondary-light">
        Home</Navbar.Link>
        <Navbar.Link href="/about" className="font-light text-text-light dark:text-text-dark hover:bg-secondary-light">About</Navbar.Link>
        <Navbar.Link href='/projects' className="font-light text-text-light dark:text-text-dark hover:bg-secondary-light">Projects</Navbar.Link>
        <Navbar.Link href='/blogs' className="font-light text-text-light dark:text-text-dark hover:bg-secondary-light">Blogs</Navbar.Link>
        <Navbar.Link href='/contact' className="font-light text-text-light dark:text-text-dark hover:bg-secondary-light">Contact</Navbar.Link>
        <Navbar.Link href='/tools' className="font-light text-text-light dark:text-text-dark hover:bg-secondary-light">Tools</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>

  );
}

