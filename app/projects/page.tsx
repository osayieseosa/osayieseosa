import React from 'react'
import ProjectHero from '../components/ProjectHero'
import {CiLink} from "react-icons/ci"
import BannerComponent from '../components/BannerComponent'

export default function ProjectPage() {
  return (
    <div className='divide-y-2'>
        <ProjectHero/>
        <div className='p-5 text-text-light dark:text-text-dark'>
            <h1 className='text-3xl sm:text-4xl font-bold'>Explore His Projects</h1>
            <div className='py-10'>
            <CiLink className='inline-block dark:text-accent-dark'/><a href="https://norbilefoods.vercel.app/" className='text-blue-800 dark:text-white underline'>The Norbile Foods Project</a>
            <p className='lg:px-5 md:text-xl sm:text-lg text-md w-full font-serif py-5 pl-1 font-extralight'>The norbile foods project is a complete ecommerce website resquested by norbile foods,benin city. An Ecomerce website is the most popular website requested from web developers in Nigeria and it is one of the most complicated due to the fuctionality, while building this website i implemented the very popular add to cart functionality, which seems to be very simple but in terms of implementation can be tricky, i had to integrate a payment gateway into the website so after shoppers get the product they require they can make payment before the products are sent to the company to be fulfilled, and lastly the goal of this website design is to come up with something unique in the space of food delivery online with a video playing in the background just to get the users curiosity piqued yet with a functional design that helps you get your tasks done efficiently and efffectively, overall it was an interesting project, if you need an ecommerce website done you can reach out today. </p>
            </div>
        </div>
        <div className='p-5 text-text-light dark:text-text-dark'>
            <div className='py-10'>
            <CiLink className='inline-block dark:text-accent-dark'/><a href="https://norbilefoods.vercel.app/" className='text-blue-800 dark:text-white underline'>The Coincrypt Project</a>
            <p className='lg:px-5 md:text-xl sm:text-lg text-md w-full font-serif py-5 pl-1 font-extralight'>The norbile coincrypt project is a broker website. On of the tricky part of building these website is working with an API(Application Programming Interface), they are very required because a broker website constantly requires up to date data mainly because these data is what traders use to make decisions in real time, and api&apos;s are constantly changing in terms of how to integrate them into your website. This broker website comes with a user and admin dashboard, the user dashbord displays the user transaction history, current trending crypto and highest crypto with the users balance and profit, then the admin dashboard integrates a way to keep track of its users and has the ability to ban a user in a situation where such user has violated the terms and conditions agreed to by the stated user,you can message me now and get yours.</p>
            </div>
        </div>
        <BannerComponent/>

    </div>
  )
}
