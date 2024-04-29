import { Metadata } from "next";
import "./globals.css";
import { AppWrapper } from "@/context";
import {  ThemeModeScript } from "flowbite-react";
import FooterComponent from './components/FooterComponent'
import { NavbarComponent } from "./components/NavbarComponent";
import PopupComponent from "./components/PopupComponent";
import SearchModal from "./components/SearchModal";
import NextTopLoader from 'nextjs-toploader'

import { ENV } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(ENV.NEXT_PUBLIC_WEBSITE_URL),
  title:{
    default: 'Osayi Eseosa - Official Home Page',
    template: "%s | Osayi Eseosa - Official Home Page"
  },
  description:"Osayi Eseosa is a fullstack javascript web developer with high expertise in his field with a curiosity piqued by tech",

  openGraph:{title: "Osayi Eseosa - Official Home Page",
  description: "Osayi Eseosa is a fullstack javascript web developer with high expertise in his field with a curiosity piqued by tech",
  url: ENV.NEXT_PUBLIC_WEBSITE_URL,
  siteName: "Osayi Eseosa",
  locale:"en_US",
  type: 'website',
  images: '/opengraph-image.png'
},
twitter: {
  title: 'Osayi Eseosa - Official Home Page',
  card: 'summary_large_image'
},

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
