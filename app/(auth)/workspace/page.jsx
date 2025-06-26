"use client"
import React from 'react'
import { useState } from 'react'
const Page = () => {

const [menu,setMenu] = useState("dashboard")

const selector = (e)=>{
  const selected = e.target.textContent
switch(selected){
  case "create video":setMenu(selected);
  break;
  case "your videos": setMenu(selected);
  break;
  case "billing": setMenu(selected);
  break;
  case "settings": setMenu(selected);
  break;
  default:setMenu("dashboard");
}
}

  return (
    <div className='px-3 min-md:flex justify-baseline items-start border-t-2 max-md:flex-col-reverse'>
<div className='flex-1/5 h-[90vh] rounded-2xl overflow-scroll border-r-4 justify-start items-center gap-5 flex-col'>
<h1 className='font-sans  mt-4 px-2 bg-green-900 text-green-50 opacity-85 font-bold p-3 italic  mb-5'>creating your video ,almost there !</h1>

<div className='flex-4/5 min-md:hidden'>

{menu == "dashboard"?<div className='flex-col justify-center items-center'>

 
</div>:<div></div>}
{menu == "create video"?<div>
  
   <h1>share a brief and somewhat description of what you want the video to be about </h1>

</div>:<div></div>}
{menu == "your videos"?<div>your videos</div>:<div></div>}
{menu == "billing"?<div>billing</div>:<div></div>}
{menu == "settings"?<div>setting</div>:<div></div>}

</div>
<div className='flex-col flex'>
  <button onClick={selector}  className=' border-t-2 border-b-2 py-2 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'>dashboard</button>
<button onClick={selector}  className=' border-t-2 border-b-2 py-2 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'>create video</button>
<button onClick={selector} className=' border-t-2 border-b-2 py-2 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'>your videos</button>
<button onClick={selector}  className=' border-t-2 border-b-2 py-2 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'>billing</button>
<button onClick={selector}  className=' border-t-2 border-b-2 py-2 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'>settings</button>

</div>

</div>
<div className='flex-4/5 max-md:hidden h-[90vh] flex-col justify-center items-center'>
{menu == "dashboard"?<div>dashboard</div>:<div></div>}
{menu == "create video"?<div className=' bg-green-50 h-[100vh] flex-col justify-center items-center'>
  
  
  
   <h1>share a brief and somewhat description of what you want the video to be about </h1>
      <h1>share a brief and somewhat description of what you want the video to be about </h1>
         <h1>share a brief and somewhat description of what you want the video to be about </h1>


</div>:<div></div>}
{menu == "your videos"?<div>your videos</div>:<div></div>}
{menu == "billing"?<div>billing</div>:<div></div>}
{menu == "settings"?<div>setting</div>:<div></div>}


</div>

    </div>
  )
}

export default Page