import React, { useState } from 'react';
import { FaImage, FaUpload } from 'react-icons/fa';

const Upload = () => {
  const [images, setImages] = useState([]);
  const MAX_IMAGES = 5;

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.slice(0, MAX_IMAGES));
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-50 via-white to-green-100 rounded-2xl shadow-2xl border border-green-300 max-w-md mx-auto mt-12">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-flex items-center justify-center size-6 rounded-full bg-green-100 border-2 border-green-300 shadow">
            <FaUpload className="text-green-700 text-[1rem]" />
          </span>
          <h2 className=" font-extrabold text-green-900 tracking-tight drop-shadow">
            Upload Inspiration
          </h2>
        </div>
        <p className="text-green-800 text-[0.7rem] mb-6 text-center flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100 shadow-sm">
          <FaImage className="text-green-400 text-lg" />
          Upload an image or video of products or visuals
        </p>
        <div className="w-full">
          {images.length > 0 && (
            <div className="flex gap-4 w-full overflow-x-auto py-3 mb-4 bg-white/90 rounded-xl shadow-inner border border-green-100 px-3 scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-green-50">
              {images.map((img, idx) => (
                <div key={idx} className="flex flex-col items-center flex-shrink-0 bg-green-50 border border-green-200 rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Preview ${idx + 1}`}
                    className="h-[90px] w-[60px] object-cover rounded-md border border-green-300 shadow mb-1 transition-transform duration-200 hover:scale-105"
                  />
                  <span className="text-xs text-gray-600 mt-1 truncate max-w-[60px] text-center">{img.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <label
          htmlFor="upload-input"
          className="w-full cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-green-400 bg-white hover:bg-green-50 transition rounded-xl py-6 mb-4"
        >
          <FaImage className="text-green-300 text-4xl mb-2" />
          <span className="text-green-700 font-semibold">
            Click to select an image
          </span>
        </label>
        <input
          id="upload-input"
          type="file"
          accept="image/*"
        
          onChange={handleFileChange}
          className="hidden"
        />
 
      </div>
    </div>
  );
};

export default Upload;