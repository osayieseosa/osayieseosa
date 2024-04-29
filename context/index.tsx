"use client"

import React,{ createContext, useState, useContext, useEffect} from "react";
import { useRouter } from "next/navigation";

const AppContext= createContext<any>(undefined)

export function AppWrapper({children}: {
    children: React.ReactNode;
}){
    const [openModal, setOpenModal] = useState<boolean>(false);
    const router = useRouter()
    const homepageLink = 'http://localhost:3000'
    const keyDownHandler = (event:KeyboardEvent) => {
       
        if((event.ctrlKey || event.metaKey) && event.key === 'k'){
            event.preventDefault()
            console.log('working')
            setOpenModal(true)
        }else if(event.key === 'Escape'){
            event.preventDefault()
            setOpenModal(false)
        }
        // else if(event.key === 'h'){
        //     router.push('/')
        //     setOpenModal(false)
        // }else if(event.key === 'a'){
        //     router.push('/about')
        //     setOpenModal(false)
        // }else if(event.key === 'p'){
        //     router.push('/projects')
        //     setOpenModal(false)
        // }else if(event.key === 'b'){
        //     router.push('/blogs')
        //     setOpenModal(false)
        // }else if(event.key === 'c'){
        //     router.push('/contact')
        //     setOpenModal(false)
        // }else if(event.key === 't'){
        //     router.push('/tools')
        //     setOpenModal(false)
        // }
    }

    useEffect(() => {
        window.addEventListener('keydown', keyDownHandler)
    },[])

    return (
        <AppContext.Provider value={{openModal, setOpenModal,homepageLink}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}