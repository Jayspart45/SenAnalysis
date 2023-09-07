import React, { useEffect, useState, useRef } from "react";
// import data from "./json/data.json";

export default function Transcriber({ audioFile, data }) {
  const [transcription, setTranscription] = useState([]);
  const audioRef = useRef(null);
  useEffect(() => {
    setTranscription(data);
  }, []);

  const handleSeekTo = (time, end) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      audioRef.current.play();
      console.log(end - time);
      setTimeout(() => {
        // if (audioRef.current.currentTime <= end) {
        console.log("Stop");
        audioRef.current.pause();
        // }
      }, (end - time) * 1000); // Convert seconds to milliseconds
    }
  };

  return (
    <div className="w-[48rem] font-Poppins flex flex-col bg-gray-400 p-10 h-[50vh] rounded">
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
      <audio ref={audioRef} controls>
        <source src={URL.createObjectURL(audioFile)} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="mt-5 rounded  p-5 overflow-y-scroll">
        {transcription.map((item, index) => (
          <ul
            onClick={() => handleSeekTo(item.start, item.end)}
            key={index}
            className="cursor-pointer bg-white border p-2 flex space-x-5 "
          >
            <li className=" text-red-500">{item.start}</li>
            <li className="text-green-500">{item.end}</li>
            <li>{item.text}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
