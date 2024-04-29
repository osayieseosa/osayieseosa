"use client";

import React,{ useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import { Button, Textarea, Label, TextInput, Spinner } from "flowbite-react";
import { Toast } from "flowbite-react";
import { FaTelegramPlane } from "react-icons/fa";
import { HiMail, HiUser, HiX } from "react-icons/hi";


export default function ContactComponent(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [successMsg, setSuccessMsg] = useState<boolean>(false)
  const [errMsg, setErrMsg] = useState<boolean>(false)

  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e:React.FormEvent):void =>  {
    e.preventDefault()
    setIsLoading(true)

    emailjs
    .sendForm('service_phf0kjo', 'template_qe92p5u', form.current as HTMLFormElement, {
      publicKey: 'c0zCWWjxpA7GQuqGQ',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setIsLoading(false)
        setSuccessMsg(true)
        if(form.current !== null) form.current.reset()
      },
      (error) => {
        console.log('FAILED...', error.text);
        setIsLoading(false)
        setErrMsg(true)
      },
    );
  }
  return (
    <div className="w-full h-screen py-10 flex place-content-center text-text-light dark:text-text-dark">
      <div className="w-full max-w-lg my-auto space-y-5 px-5 sm:px-0">
        <h2 className="text-4xl font-bold h-min">Get in touch</h2>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit} ref={form}>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            icon={HiUser}
            placeholder="Jeremiah"
            required
            name="from_name"
          />
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Your email" />
          </div>
          <TextInput
            id="email4"
            type="email"
            icon={HiMail}
            placeholder="udohjeremiah@example.com"
            required
            name="user_email"
          />
          <div>
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
              name="message"
            />
          </div>
          <Button className="bg-primary-light dark:bg-primary-dark" type="submit" disabled={isLoading?true:false}>{isLoading?<Spinner/>+" Submitting":"Submit"}</Button>
        </form>
        <div className="fixed top-3/4 left-1/4">
        {successMsg &&<Toast>
      <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
      <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
      <div onClick={() => setSuccessMsg(false)}><Toast.Toggle /></div>
    </Toast>}
    {errMsg && <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">An error occured.</div>
        <div onClick={() => setErrMsg(false)}><Toast.Toggle /></div>
      </Toast>}
        </div>
      </div>
    </div>
  );
}
