"use client"
import { SignOutButton, useUser } from '@clerk/nextjs'
import { useMutation } from 'convex/react'
import { useEffect, useState } from 'react'
import { api } from "../../../convex/_generated/api"
import axios from 'axios'
import { FaVideo, FaHome, FaUser, FaCog, FaCreditCard, FaSignOutAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const WorkSpaceProvider = () => {
  const [userinput, setUserinput] = useState("");
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState("dashboard");
  const newUserMutation = useMutation(api.users.newUser)
  const newVideoMutation = useMutation(api.videoData.createNewVideo)
  const { user } = useUser()

  async function generator(e) {
    e.preventDefault();
 setLoading(true);
    try {
      // Send user input to OpenAI API route
      const generate_video = await axios.post("./api/createscripts", {
        topic: userinput
      });
      // Save result to Convex DB, now with user reference
      await newVideoMutation({
        topic: userinput,
        scriptVariant: generate_video.data?.message || generate_video.data,
        user: user?.id // Add user reference
      });
      setUserinput("");
    } catch (err) {
      alert("Failed to generate and save video script.");
    }
    setLoading(false);
  }

  const createUser = async () => {
    try {
      await newUserMutation({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        picture: user?.imageUrl,
      });
    } catch (error) {
      console.log("could not save new user")
    }
  };

  useEffect(() => {
    if (user) {
      createUser();
    }
    
  }, [user]);

  const selector = (e) => {
    setMenu(e.target.textContent)
  }

  return (
    <div className='min-md:flex border-green-200 bg-green-50 justify-baseline items-start border-t-2 max-md:flex-col-reverse'>
      <div className='flex-1/6 h-[90vh] rounded-2xl border-r-4 border-[#a3c1af] justify-start items-center gap-5 flex-col'>
        <h1 className='font-sherif text-[0.9rem] pl-4 opacity-50 from-green-950 to-green-700 bg-gradient-to-r rounded-tr-2xl text-yellow-200 p-3 italic mb-5'></h1>
        <div className='flex-4/5 min-md:hidden'>
          {menu === "dashboard" ? <div className='flex-col justify-center items-center'></div> : <div></div>}
          {menu === "create video" ? (
            <div className="flex-col p-4 justify-center items-center flex bg-white/80 rounded-2xl shadow-lg border border-green-200 mx-2 my-4">
              <h1 className="text-3xl font-extrabold font-sans mb-1 text-green-900"><FaVideo className="inline mr-2" />Please Share a Brief Description</h1>
              <h1 className="font-extrabold font-sans mb-2 text-green-800">of Your Video Concept</h1>
              <h4 className="italic px-2 mt-3 font-serif bg-green-200 rounded-br-2xl text-green-900 mb-1">
                For example: "The latest vanilla milkshake flavor blended with milk from a street vendor with the cheapest prices ...."
              </h4>
              <h4 className="italic font-serif text-green-700 mb-4">Please be as descriptive as possible for the best results :).</h4>
              <form className="flex flex-col justify-center items-center w-full max-w-xl" onSubmit={generator}>
                <textarea
                  value={userinput}
                  onChange={(e) => setUserinput(e.target.value)}
                  placeholder="eg. generate cinematic video of the rain..."
                  type="text"
                  autoComplete={"true"}
                  autoCorrect={"true"}
                  maxLength={200}
                  className="from-yellow-200 to-green-500 bg-gradient-to-r mt-5 text-green-800 font-semibold rounded-2xl px-5 py-3 w-full border-2 border-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm resize-none min-h-[100px]"
                ></textarea>
                <button
                  type="submit"
                  className="m-2 w-32 mt-6 border-2 ring-4 ring-green-200 opacity-90 border-green-500 shadow-xl p-2 from-green-600 hover:opacity-100 to-green-300 bg-gradient-to-r rounded-2xl text-green-950 font-bold text-lg transition-all duration-200"
                  disabled={loading || !userinput.trim()}
                >
                  {loading ? <FaVideo className="inline mr-2 animate-spin" /> : <FaVideo className="inline mr-2" />} {loading ? "generating..." : "generate"}
                </button>
              </form>
            </div>
          ) : <div></div>}
          {menu === "your videos" ? <div><FaUser className="inline mr-2" />your videos</div> : <div></div>}
          {menu === "billing" ? <div><FaCreditCard className="inline mr-2" />billing</div> : <div></div>}
          {menu === "settings" ? <div><FaCog className="inline mr-2" />setting</div> : <div></div>}
        </div>
        <div className='flex-col flex '>
          <button onClick={selector} className=' border-t-2 max-md:bg-gradient-to-l max-md:from-green-800 max-md:to-green-700 max-md:text-white max-md:opacity-50 max-md:rounded-tr-2xl max-md:rounded-tl-2xl min-md:border-b-2 py-2 animate-right min-md:hover:bg-gradient-to-l min-md:hover:from-green-200 max-md:hover:opacity-60 min-md:hover:to-green-100 px-3'><FaHome className="inline mr-2" />dashboard</button>
          <button onClick={selector} className=' border-t-2 border-b-2 py-2 animate-right2 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'><FaVideo className="inline mr-2" />create video</button>
          <button onClick={selector} className=' border-t-2 border-b-2 py-2 animate-right3 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3'><FaUser className="inline mr-2" />your videos</button>
          <button onClick={selector} className=' border-t-2 border-b-2 py-2 animate-right4 hover:bg-gradient-to-l hover:from-green-200 hover:to-green-100 px-3 pr-10'><FaCreditCard className="inline mr-2" />billing</button>
          <button onClick={selector} className=' hover:opacity-60 rounded-bl-2xl border-t-2 border-b-2 py-2 animate-right5 bg-gradient-to-l from-green-950 to-green-700 text-white opacity-50 px-3'><FaCog className="inline mr-2" />settings</button>
        </div>
        <div className='flex-col flex animate-slide'>
          <button className='  rounded-tl-2xl mt-8 border-t-2 border-b-2 py-2  bg-gradient-to-l from-green-950 to-green-800 text-white opacity-50 px-3'>leave a message</button>
          <label className=' border-t-2 border-b-2 py-2  hover:from-green-200 hover:to-green-100 px-3'><FaEnvelope className="inline mr-2" />email:</label>
          <input placeholder='will@gmail.com' className=' border-t-2 border-b-2 py-2 border-green-200  hover:bg-gradient-to-l hover:from-green-100 hover:to-green-100 px-3'></input>
          <label className=' border-t-2 border-b-2 py-2  hover:from-green-200 hover:to-green-100 px-3'>message:</label>
          <input placeholder='i would ...' className='py-4 border-t-2 border-b-2 py-2 border-green-200  hover:bg-gradient-to-l hover:from-green-100 hover:to-green-100 px-3'></input>
          <button className=' hover:opacity-60 rounded-bl-2xl border-t-2 border-b-2 py-2  bg-gradient-to-l from-green-950 to-green-700 text-white opacity-50 px-3'><FaPaperPlane className="inline mr-2" />send</button>
          <SignOutButton className='rounded-2xl animate-none hover:opacity-60 rounded-bl-2xl border-t-2 border-b-2 py-2  bg-gradient-to-l from-green-950 to-green-700 text-white opacity-50 px-3 mt-8'>logout</SignOutButton>
        </div>
      </div>
      <div className='flex-4/5 max-md:hidden h-[90vh] flex-col justify-center items-center'>
        {menu === "dashboard" ? <div className=' flex justify-center'><FaHome className="inline mr-2" />dashboard</div> : <div></div>}
        {menu === "create video" ? <div className=' h-full flex justify-center items-center'>
          <div className='flex-col p-2 justify-center items-center flex'>
            <div className='flex mb-6'>
              <div className="size-40 rounded-[50%] bg-green-200 absolute bottom-120 right-134 animate-r1 delay-500 duration-150 transition"></div>
              <div className="size-40 rounded-[50%] bg-yellow-200 absolute bottom-120 right-134 delay-700 animate-m1"></div>
              <div className="size-40 rounded-[50%] bg-green-200 absolute bottom-120 right-134 animate-l1 delay-100"></div>
            </div>
            <h1 className="text-4xl font-extrabold font-sans mt-40"><FaVideo className="inline mr-2" />Please Share a Brief Description of Your Video Concept</h1>
            <h4 className='italic font-serif mt-2 bg-green-200 p-1 rounded-br-2xl'>For example: "The latest vanilla milkshake flavor blended with milk from a street vendor with the cheapest prices ...."</h4>
            <h4 className='italic font-serif'> Please be as descriptive as possible for the best results :).</h4>
            <form className='flex flex-col justify-center items-center' onSubmit={generator}>
              <textarea value={userinput} onChange={(e) => setUserinput(e.target.value)} placeholder='eg. generate cinematic video of the rain...' type='text' autoComplete={"true"} autoCorrect={"true"} maxLength={200} className='from-yellow-200 border-2 border-green-800 to-green-500 bg-gradient-to-r mt-5 text-green-800 font-semibold rounded-2xl px-5 p-7 w-120 border-2 border-gray-700'></textarea>
              <button type="submit" className='m-2 w-20 mt-6 border-2 ring-4 ring-green-200 opacity-75 border-green-500 shadow-2xl p-2 from-green-600 hover:opacity-88 to-green-300 bg-gradient-to-r rounded-2xl text-green-950 flex w-fit' disabled={loading || !userinput.trim()}> {loading ? "generating..." : "generate"}{loading ? <FaVideo className="text-xl ml-1 pt-2 animate-spin "  /> :  <FaVideo className="text-xl ml-1 pt-2 " />} </button>
            </form>
          </div>
        </div> : <div></div>}
        {menu === "your videos" ? <div><FaUser className="inline mr-2" />your videos</div> : <div></div>}
        {menu === "billing" ? <div><FaCreditCard className="inline mr-2" />billing</div> : <div></div>}
        {menu === "settings" ? <div><FaCog className="inline mr-2" />setting</div> : <div></div>}
      </div>
    </div>
  )
}

export default WorkSpaceProvider