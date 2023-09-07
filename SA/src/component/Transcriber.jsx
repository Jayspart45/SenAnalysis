import React from "react";

export default function Transcriber({ audioFile }) {
  return (
    <div className="w-[48rem] font-Poppins flex flex-col bg-gray-400 p-10 rounded">
      <h2 className="mb-2 flex mx-auto font-medium text-center ">
        <span className="bg-white px-2 mx-2 rounded">Transcription</span>
        Component
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-100 ml-2 animate-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
          />
        </svg>
      </h2>
      <audio controls>
        <source src={URL.createObjectURL(audioFile)} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <textarea className="mt-5 rounded h-32 p-5"></textarea>
    </div>
  );
}
