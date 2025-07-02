"use client"
import { useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import React from 'react'
import { FaCopy, FaRegCopy } from 'react-icons/fa';
import { LiaCopySolid } from 'react-icons/lia';
import Upload from '../(menu)/components/UploadFile';
import { useUser } from '@clerk/nextjs';

const VIDEo = () => {
  const { user } = useUser();
  const userId = user?.id;
  const videoData = useQuery(api.videoData.getData, { user: userId });
  const [copiedIdx, setCopiedIdx] = React.useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-green-900 tracking-tight drop-shadow-lg">Your Generated Video Scripts</h1>
    <div className='flex w-full max-w-2xl'>
        <form className='w-full max-w-md grid grid-cols-1 gap-6 p-4 bg-white/90 rounded-xl shadow border border-green-200'>
        {videoData && videoData.length === 0 && (
          <div className="col-span-full text-center text-gray-500 text-base font-medium py-10 bg-white/70 rounded-xl shadow-inner">No videos found.</div>
        )}
        {videoData && videoData.map((data, idx) => (
          <div
            className='relativew-fit flex flex-col justify-between bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-700 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-xl p-4 min-h-40'
            key={idx}
          >
            <div className='flex flex-col gap-2 border-b border-green-200 pb-2'>
              <label className='text-green-900 font-semibold text-sm mb-0.5'>Title</label>
              <input className='font-bold text-green-800 mb-1 truncate underline bg-green-100 border border-green-300 rounded px-2 py-1 text-sm' value={data.topic} disabled></input>
              <label className='text-green-900 font-semibold text-sm mb-0.5'>Generated Script</label>
              <div className='flex items-center gap-1'>
                <input className='bg-green-50 text-gray-800 rounded p-2 text-xs whitespace-pre-wrap max-h-24 overflow-y-auto mb-1 flex-1 border border-green-200' value={`${JSON.stringify(data.scriptVariant, null, 2)}`} disabled></input>
                <button
                  type="button"
                  className={`ml-1 p-1 rounded border border-green-400 bg-green-100 hover:bg-green-200 text-green-900 transition-colors duration-150 ${copiedIdx === idx ? 'ring-2 ring-green-400' : ''}`}
                  onClick={() => handleCopy(JSON.stringify(data.scriptVariant, null, 2), idx)}
                  title={copiedIdx === idx ? 'Copied!' : 'Copy to clipboard'}
                >
                  <FaRegCopy size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Use the neat Upload component only once below the video cards */}
        <Upload />
      </form>
      <div  className='w-full max-w-md p-4 bg-white/90 rounded-xl shadow border border-green-200 ml-6 flex flex-col gap-4'>
        preview
      </div>
    </div>
    </div>
  );
}

export default VIDEo;