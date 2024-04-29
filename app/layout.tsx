import type { Metadata } from "next";
import "./globals.css";
import { AppWrapper } from "@/context";
import {  ThemeModeScript } from "flowbite-react";
import FooterComponent from './components/FooterComponent'
import { NavbarComponent } from "./components/NavbarComponent";
import PopupComponent from "./components/PopupComponent";
import SearchModal from "./components/SearchModal";
import NextTopLoader from 'nextjs-toploader'

//#070f2b,#1b1a55,#535c91,#9290c3

export const metadata: Metadata = {
  title: "Osayi Eseosa - Official Home Page",
  description: "Osayi Eseosa is a fullstack javascript web developer with high expertise in his field with a curiosity piqued by tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <ThemeModeScript/>
      </head>
      <body className="bg-background-light dark:bg-background-dark">
        <AppWrapper>
          <NextTopLoader
              color="blue"
              showSpinner={false}
          />
      <NavbarComponent/>
      <SearchModal/>
        {children}
        <div className="fixed top-3/4 right-5 animate-bounce ">
        <PopupComponent/>
        </div>
        <FooterComponent/>
        </AppWrapper>
      </body>
    </html>
  );
}
