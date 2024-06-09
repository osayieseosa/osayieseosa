"use client";

import { useAppContext } from "@/context";
import { Modal } from "flowbite-react";
import Link from "next/link";
import React,{ useState, useEffect } from "react";

export default function SearchModal() {
  const {openModal, setOpenModal} = useAppContext();
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<string[]>([])

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const navigationArray = ["Home","About","Projects","Blogs","Contact","Tools"
  ]

  useEffect(() => {
    const searchResult = navigationArray.filter((item) => item.toLowerCase().includes(search.toLowerCase()))
    setSearchResult(searchResult)
  },[search])


  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
            <form className="w-full mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="Search Mockups, Logos..." 
         required value={search} 
         onChange={handleChange}/>
    </div>
          </form>
</Modal.Header>
        <Modal.Body>
          <ul className="">
{
  !searchResult && navigationArray.map((item:string, key) => {
    return(
<li key={key} className="flex justify-between my-2 py-5 border-2 border-gray-300  px-5 rounded-lg text-gray-700 dark:text-white">{item} <span className="font-bold text-gray-300">{item.charAt(0).toUpperCase()}</span></li>
    )
  })
}

{
  searchResult && searchResult.map((item:string, key) => {
    return(
<Link key={key} href={item === "Home"? '/': `/${item.toLowerCase()}`}><li className="my-2 py-5 border-2 border-gray-300 px-5 rounded-lg text-gray-700 dark:text-white">{item}</li></Link>
    )
  })
}
            
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}
