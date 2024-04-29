"use client"

import React from 'react'
import { Card, Button } from 'flowbite-react'
import {BsWhatsapp,BsTelephone,BsMailbox,BsTelegram} from 'react-icons/bs'

export default function AboutPage() {
  return (
    <div className='divide-y-2'>
            <section className="flex justify-between items-center  py-10 border-y xl:border-hidden xl:rounded-xl">
        <div className="px-10 space-y-5 lg:py-6">
        <h2 className="text-6xl md:text-7xl max-w-xl font-serif w-11/12 sm:w-9/12 text-gray-800 dark:text-white font-semibold">About <span className=" text-accent-light dark:text-accent-dark">Eseosa</span>.</h2>
        <p className="w-9/12 font-normal text-gray-500 dark:text-gray-400">Eseosa works as a javascript fullstack web developer. He builds website with extreme care to ensure customers unexpressable satisfaction of his services, he ensures every functional component of a website is aimed at promoting the users brand and product, with slick designs, cutting edge technology Eseosa stands out in his field and you can Contack him today.</p>
        <Button size='lg' className='bg-primary-light dark:bg-primary-dark'>Contact</Button>
        </div>
            <img className="hidden lg:inline-flex h-40 lg:h-64 xl:h-72 mx-5" src="/images/undraw_feeling_proud_qne1.svg"/>
    </section>
        <section className='w-full space-y-10 text-center text-3xl font-bold py-10'>
            <h2 className='text-gray-800 dark:text-white'>Via</h2>
            <div className='flex items-center flex-col gap-5 md:grid md:grid-cols-2 grid-rows-2 w-full md:w-[37.5rem] md:mx-auto' >
            
            <Card href='https://wa.link/5my8vf' className='w-72 py-10 bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark'>
    <h5 className='text-7xl font-bold text-green-800 dark:text-green-500 flex justify-center '>
<BsWhatsapp/>
    </h5>
            </Card>
            <Card href='tel:09155276978' className='w-72 py-10 bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark'>
    <h5 className='text-7xl font-bold flex justify-center'>
<BsTelephone/>
    </h5>
            </Card>
            <Card href="#" className='w-72 py-10 bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark'>
    <h5 className='text-7xl font-bold flex justify-center'>
<BsMailbox/>
    </h5>
            </Card>
            <Card href="t.me/mr_eseosa" className='w-72 py-10 bg-secondary-light dark:bg-secondary-dark text-text-light dark:text-text-dark'>
    <h5 className='text-7xl font-bold flex justify-center'>
<BsTelegram/>
    </h5>
            </Card>
            </div>

        </section>
        <section className='p-10 space-y-10 text-text-light dark:text-text-dark'>
        <h2 className=' font-bold text-2xl'>Web Development</h2>
        <p className='max-w-md'>Eseosa creates quality websites at affordable prices, to find out more about this service you can contact him directly on whatsApp, Eseosa has been creatinf dynamic and responsive websites with some of the most popular tech stack.</p>
        </section>
<section className='w-full space-y-10 text-center py-10  text-text-light dark:text-text-dark'>
<h2 className='text-3xl font-bold'>Services</h2>
<div className='flex items-center flex-col gap-5 md:grid md:grid-cols-2 grid-rows-2 w-full md:w-[37.5rem] md:mx-auto' >
<Card className="w-72 h-full">
      <h5 className="text-2xl font-bold tracking-tight">
        UI/UX design
      </h5>
      <p className="font-normal ">
        Hire him to convert your idea into a clear cut picture.
      </p>
      <Button className='bg-primary-light dark:bg-primary-dark' href="https://wa.link/5my8vf">
        Contact
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
      <Card className="w-72 h-full">
      <h5 className="text-2xl font-bold tracking-tight ">
       Frontend develoment
      </h5>
      <p className="font-normal ">
        Hire him to build you simple website to grow your online presence with unbeatable designs.
      </p>
      <Button href="https://wa.link/5my8vf" className='bg-primary-light dark:bg-primary-dark'>
        Contact
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
        <Card className="w-72 h-full">
      <h5 className="text-2xl font-bold tracking-tight ">
        Backend development
      </h5>
      <p className="font-normal ">
        Hire him to build you a complete, functional and unctional web application.
      </p>
      <Button href="https://wa.link/5my8vf" className='bg-primary-light dark:bg-primary-dark'>
        Contact
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
        <Card className="w-72 h-full">
      <h5 className="text-2xl font-bold tracking-tight ">
        Website uprades and redesign
      </h5>
      <p className="font-normal ">
        Hire him to fix any problems with your website or a complete upgrade to an already exiting website.
      </p>
      <Button href="https://wa.link/5my8vf" className='bg-primary-light dark:bg-primary-dark'>
        Contact
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
        </div>
</section>


    </div>
  )
}

