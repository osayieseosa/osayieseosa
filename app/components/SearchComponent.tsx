import { useAppContext } from "@/context"
import { Button } from "flowbite-react"

export default function SearchComponent() {
  const {setOpenModal} = useAppContext()


  return (
    <Button onClick={() => setOpenModal(true)} color="transparent" className="bg-transparent border-2 dark:border-secondary-dark border-secondary-light"><svg className=" my-[auto] w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
</svg>&nbsp;<span className="font-mono text-xs flex my-auto">CTRL+K</span></Button>



  )
}


