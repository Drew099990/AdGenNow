"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInButton } from "@clerk/nextjs";
import { ClerkProvider, SignedOut, SignUpButton, useUser } from "@clerk/clerk-react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
export default function Home() {

  const [display,setDisplay] = useState(true);
   
   const user = useUser()
     
 if (user.isSignedIn){

  
 alert("you are already logged in")
 }

  return (
    <div className="flex flex-col justify-center items-center my-7">
      
      {display ? <div className="text-green-300 duration-700 w-fit shadow-xl shadow-black h-fit text-9xl px-[10rem] py-40 justify-center items-center flex bg-gradient-to-tr from-black opacity-90 border-[#c4b9b9] border-4 via-black to-white font-serif  "><p className="animate-zoom">AdGenNow</p>
        <p className="animate-blink">_</p>
          <p className="bg-black border-t-4 border-gray-700  w-14 translate-y-[15rem] h-4 fixed border-b"></p>
      <p className="border-2 border-green-700 font-bold text-[8px] animate-blink2 bold  translate-y-[12.5rem] translate-x-[8rem]">o</p>
      </div>
    
  :

  <div className="text-green-300 text-yellow-300 duration-700 w-fit shadow-xl shadow-black h-fit text-9xl px-[10rem] py-40 justify-center items-center flex bg-gradient-to-tr from-black opacity-90 border-[#c4b9b9] border-4 via-black to-white font-serif  "><p className="animate-zoom">AdGenNow</p>
        <p className="animate-blink">_</p>
          <p className="bg-black border-t-4 border-gray-700  w-14 translate-y-[15rem] h-4 fixed border-b"></p>
      <p className="border-2 border-green-700 font-bold text-[8px] animate-blink2 bold  translate-y-[12.5rem] translate-x-[8rem]">o</p>
      </div>
    }
  
    <p className="text-green-900 font-sans mt-7 font-bold text-5xl opacity-85 animate-slide">
      #1 leading platform offering you short form cinematic videos
    </p>

    <p className="font-serif text-muted-foreground mt-7 font-bold italic text-[1rem] animate-slide2">
      for all your business, startup, heck even your own personal needs any time anywhere all in less than 3 minutes.
    </p>

    <div
      onMouseEnter={() => { setDisplay(!display); }}
      className="shadow-2xl hover:text-yellow-100 duration-2000 text-xl animate-none flex justify-center items-center ring-4 ring-green-100 bg-black p-2 rounded-2xl border-2 border-green-950 text-green-100 px-5 mt-7"
    >
      <SignUpButton signInFallbackRedirectUrl="/workspace" mode="modal">
        get started
      </SignUpButton>
    </div>
   
 
  


    </div>
  )
}