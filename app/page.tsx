"use client"
import { Button } from "@/components/ui/button"

import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInButton } from "@clerk/nextjs";
import { ClerkProvider, SignedOut, SignUpButton } from "@clerk/clerk-react";

export default function Home() {
   const tasks = useQuery(api.task.get);


  return (
    <div className="flex flex-col justify-center items-center">
      
      <div className="text-green-300 hover:text-yellow-300 duration-700 w-fit shadow-xl shadow-black h-fit text-9xl px-[10rem] py-40 justify-center items-center flex bg-gradient-to-tr from-black opacity-90 border-[#c4b9b9] border-4 via-black to-white font-serif  "><p className="animate-zoom">AdGenNow</p>
        <p className="animate-blink">_</p>
          <p className="bg-black border-t-4 border-gray-700  w-14 translate-y-[15rem] h-4 fixed border-b"></p>
      <p className="border-2 border-green-700 font-bold text-[8px] animate-blink2 bold  translate-y-[12.5rem] translate-x-[8rem]">o</p>
      </div>
    
  
    <p className=" text-green-900 font-sans mt-7 font-bold  text-5xl opacity-85 animate-slide">
      The number one leading platform for high quality creation of Ads 
    </p> 
   
    <p className=" font-serif text-muted-foreground  mt-7 font-bold italic text-[1rem] animate-slide2">
   for all your business or personal needs any time anywhere all in less than 5 minutes generate now. 
   </p>
    
   <div className=" hover:animate-none duration-2000 text-xl animate-bounce flex justify-center items-center ring-4 ring-green-100 bg-black p-2 rounded-2xl border-2 border-green-950 text-green-100 px-5  mt-7">
     <SignUpButton signInFallbackRedirectUrl="/home" mode="modal" >get started</SignUpButton>
     </div> 
   
  <main className="flex min-h-screen flex-col text-black items-center justify-between p-24">
      {tasks?.map(({ _id, name }) => <div key={_id}>{name}</div>)}
    </main>

  


    </div>
  )
}