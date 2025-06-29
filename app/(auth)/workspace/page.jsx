"use client"
import { useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import { useEffect, useState } from 'react'
import { api } from "../../../convex/_generated/api"

const WorkSpaceProvider = () => {

  const [userinput,setUserinput] = useState();
  const [loading,setLoading] = useState();

async function generator(e) {
  setLoading(true)
  const generate_video = await axios.post("./api/createscripts",{
    topic:userinput
  })
 setLoading(false)};
 


  const [menu, setMenu] = useState("dashboard");
  const newUserMutation = useMutation(api.users.newUser)
  const { user } = useUser()

  const createUser = async () => {
    try {
      const result = await newUserMutation({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        picture: user?.imageUrl,
      });
      console.log(result);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    if (user) {
      createUser();
    }
  }, [user]);


const selector = (e)=>{
  const selected = e.target.textContent
setMenu(selected)
}


  return (
    <div className=' min-md:flex border-green-500 bg-green-50 justify-baseline items-start border-t-2 max-md:flex-col-reverse'>
<div className='flex-1/6 h-[90vh] rounded-2xl  border-r-4 justify-start items-center gap-5 flex-col'>
<h1 className='font-sherif text-[0.9rem]  pl-4 opacity-50 from-green-800  to-green-600 bg-gradient-to-r rounded-tr-2xl text-yellow-200  p-3 italic  mb-5'></h1>

<div className='flex-4/5 min-md:hidden'>

{menu == "dashboard"?<div className='flex-col  justify-center items-center'>

 
</div>:<div></div>}
{menu == "create video"?<div className='flex-col p-2 justify-center items-center flex '>

    <h1 className="text-3xl font-extrabold font-sans">Please Share a Brief Description </h1>
    <h1 className='font-extrabold font-sans'>of Your Video Concept</h1>
<h4 className='italic px-2 mt-3 font-serif bg-green-200 rounded-br-2xl' >For example: "The latest vanilla milkshake flavor blended with milk from a street vendor with the cheapest prices ...."</h4 >
<h4 className='italic font-serif'> Please be as descriptive as possible for the best results :).</h4 >
<form className='flex flex-col justify-center items-center'>

<textarea  placeholder='eg. generate cinemstic videoof the rain...' type='text'autoComplete={"true"} autoCorrect={"true"} maxLength={200}   className=' from-yellow-200 to-green-500 bg-gradient-to-r mt-5 text-green-800 font-semibold rounded-2xl px-5 p-3 w-100 border-2 border-gray-700  border border-green-700'></textarea>
  <button onSubmit={{}} className='m-2 w-20 mt-6 border-2 opacity-75 border-green-700 p-2 from-green-600 hover:opacity-88 to-green-300 bg-gradient-to-r rounded-2xl text-green-950'>generate</button>
</form></div>:<div></div>}
{menu == "your videos"?<div>your videos</div>:<div></div>}
{menu == "billing"?<div>billing</div>:<div></div>}
{menu == "settings"?<div>setting</div>:<div></div>}

</div>
<div className='flex-col flex '>
  <button onClick={selector}  className=' border-t-2 max-md:bg-gradient-to-l max-md:from-green-800 max-md:to-green-700 max-md:text-white max-md:opacity-50 max-md:rounded-tr-2xl
  max-md:rounded-tl-2xl min-md:border-b-2 py-2 animate-right min-md:hover:bg-gradient-to-l min-md:hover:from-green-200 max-md:hover:opacity-60 min-md:hover:to-green-100 px-3'>dashboard</button>
<button onClick={selector}  className=' border-t-2 border-b-2 py-2 animate-right2 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'>create video</button>
<button onClick={selector} className=' border-t-2 border-b-2 py-2 animate-right3 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'>your videos</button>
<button onClick={selector}  className=' border-t-2 border-b-2 py-2 animate-right4 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'>billing</button>
<button onClick={selector}  className='rounded-br-2xl hover:opacity-60 rounded-bl-2xl border-t-2 border-b-2 py-2 animate-right5 bg-gradient-to-l from-green-800 to-green-700 text-white opacity-50 px-3'>settings</button>

</div>

</div>
<div className='flex-4/5 max-md:hidden h-[90vh] flex-col justify-center items-center'>
{menu == "dashboard"?<div className=' flex justify-center'> dashboard</div>:<div></div>}
{menu == "create video"?<div className=' h-full  flex justify-center items-center'>
  
  
  <div className='flex-col p-2 justify-center items-center flex  '>
<div className='flex mb-6'>
  <div className="size-40 rounded-[50%] bg-green-200 absolute bottom-120 right-134 animate-r1 delay-500 duration-150 transition"></div>
  <div className="size-40 rounded-[50%] bg-yellow-200 absolute bottom-120 right-134  delay-700 animate-m1"></div>
  <div className="size-40 rounded-[50%] bg-green-200 absolute bottom-120 right-134 animate-l1 delay-100"></div>
</div>
    <h1 className="text-4xl font-extrabold font-sans mt-40">Please Share a Brief Description of Your Video Concept</h1>
<h4 className='italic font-serif mt-2 bg-green-200 p-1 rounded-br-2xl' >For example: "The latest vanilla milkshake flavor blended with milk from a street vendor with the cheapest prices ...."</h4 >
<h4 className='italic font-serif'> Please be as descriptive as possible for the best results :).</h4 >
<form className='flex flex-col justify-center items-center'>

<textarea  onChange={(e)=>{setUserinput(e.target.value)}} placeholder='eg. generate cinemstic videoof the rain...' 
type='text'autoComplete={true} autoCorrect={true} maxLength={200} 
  className='from-yellow-200  border-2 border-green-800 to-green-500 bg-gradient-to-r mt-5 text-green-800 font-semibold rounded-2xl px-5 p-7 w-120 border-2 border-gray-700'></textarea>
  <button onClick={generator} 
  className='m-2 w-20 mt-6 border-2 ring-4 ring-green-200 opacity-75 border-green-500 shadow-2xl p-2 from-green-600 hover:opacity-88 to-green-300 bg-gradient-to-r rounded-2xl text-green-950'>
   {loading?"genrating...":"genrate"} </button>
</form>
  </div>
</div>:<div></div>}
{menu == "your videos"?<div>your videos</div>:<div></div>}
{menu == "billing"?<div>billing</div>:<div></div>}
{menu == "settings"?<div>setting</div>:<div></div>}


</div>

    </div>
  )
}

export default WorkSpaceProvider