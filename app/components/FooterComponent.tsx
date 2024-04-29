"use client";

import { Footer } from "flowbite-react";
import {BsGithub, BsInstagram } from "react-icons/bs";

export default function FooterComponent() {
  const today = new Date()
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand src='' href='/'>
              <img
                src="/images/avatar.png"
                className="mr-3 h-12 rounded-full"
                alt="Avatar"
              />
              <span className="self-center whitespace-nowrap text-xl font-extralight font-serif dark:text-white">
                Osayi Eseosa
              </span>
            </Footer.Brand>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about">About Page</Footer.Link>
                <Footer.Link href="https://wa.link/5my8vf">WhatsApp</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow ME" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/osayieseosa">Github</Footer.Link>
                <Footer.Link href="https://stackoverflow.com/users/15001668/eseosa-osayi">Stack Overflow</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="OsayiEseosa™" year={today.getFullYear()} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.instagram.com/mr_eseosa?igsh=ZGh4dWRreWJtd2ht" icon={BsInstagram} />
            <Footer.Icon href="https://github.com/osayieseosa" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
