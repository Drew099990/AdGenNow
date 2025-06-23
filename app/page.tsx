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
      <div className="text-green-300 w-fit h-fit text-9xl px-[10rem] py-40 justify-center items-center flex bg-gradient-to-tr from-black opacity-90 border-[#c4b9b9] border-4 via-black to-white font-serif  ">AdGenNow<p className="animate-blink">_</p></div>
    
  
    <p className="text-green-900 font-sans mt-7 font-bold  text-5xl opacity-85">
      The number one leading platform for high quality creation of Ads 
    </p> 
    <p className="text-green-800 font-serif text-muted-foreground  mt-7 font-bold italic text-[1rem]">
   for all your business or personal needs any time anywhere all in less than 5 minutes generate now. </p>
    
   <div className=" text-xl flex justify-center items-center ring-4 ring-green-100 bg-black p-2 rounded-2xl border-2 border-green-950 text-green-100 px-5  mt-7"> <SignUpButton mode="modal" >get started</SignUpButton></div> 
   
  <main className="flex min-h-screen flex-col text-black items-center justify-between p-24">
      {tasks?.map(({ _id, name }) => <div key={_id}>{name}</div>)}
    </main>

  


    </div>
  )
}