import React from "react";

export default function Transcriber({ audioFile }) {
  return (
    <div className="w-[48rem] font-Poppins flex flex-col bg-gray-400 p-10 rounded">
      <h2 className="mb-2 font-medium">Transcription Component</h2>
      <audio  controls>
        <source src={URL.createObjectURL(audioFile)} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <textarea className="mt-5 rounded h-32 p-5"></textarea>
    </div>
  );
}
