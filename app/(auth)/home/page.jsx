"use client"

import React from 'react';
import {useQuery} from "convex/react";
import { api } from "../../../../convex/_generated/api";

const Home = () => {
 const credits = useQuery(api.users.newUser);

  
  return (
    <div className='grid grid-rows-2 grid-cols-1 gap-4 p-10 text-green-100'>
      {/* First Row */}
      <div className='animate-left rounded-2xl from-green-900 shadow-2xl shadow-green-300 bg-gradient-to-br to-green-300 opacity-85 p-4 h-[40vh]'>
       <div className='flex justify-between items-center'> 
        <p>short Ad generator </p>
        <p className=" bg-green-100 w-30 px-1 rounded-2xl text-green-900" >credit count :{credits?credits:0}</p>
       </div> 
       <div className='flex-col justify-center items-center'>
        <button className=' animate-visible opacity-0 absolute delay-2000  top-[350px] right-[9.5rem] min-md: bg-gradient-to-t from-green-900 to-green-600 p-2 rounded-2xl hover:opacity-90 px-9'>generate video</button>
        </div> </div>
      
      {/* Second Row */}
      <div className='grid min-md:grid-cols-3 gap-4 max-md:grid-cols-1 animate-right'>
        <div className='rounded-2xl from-green-900 shadow-2xl shadow-green-300 bg-gradient-to-br to-green-300 opacity-85 p-4'>
        <div className='flex justify-between items-center'> 
        <p> aethetic video generator</p>
        <p className=" bg-green-100 w-30 px-1 rounded-2xl text-green-900" >credit count :{credits?credits:0}</p>
       </div> 
       
</div>
        <div className=' rounded-2xl from-green-900 shadow-2xl shadow-green-300 bg-gradient-to-br to-green-300 opacity-85 p-4'><div className='flex justify-between items-center'> 
        <p> nature video generator</p>
        <p className=" bg-green-100 w-30 px-1 rounded-2xl text-green-900" >credit count :{credits?credits:0}</p>
       </div> 
       </div>
        <div className='rounded-2xl from-green-900 shadow-2xl shadow-green-300 bg-gradient-to-br to-green-300 opacity-85 p-4'><div className='flex justify-between items-center'> 
        <p> short cinematic video generator</p>
        <p className=" bg-green-100 w-30 px-1 rounded-2xl text-green-900" >credit count :{credits?credits:0}</p>
       </div> 
       </div>
      </div>
    </div>
  );
};

export default Home;