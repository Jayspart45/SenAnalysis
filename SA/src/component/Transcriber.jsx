import React, { useEffect, useRef, useState } from "react";

export default function Transcriber({ audioFile }) {
  const [transcript, setTranscript] = useState(""); // State to store transcript text
  const audioRef = useRef(null);

  // Event handler for text input
  const handleTextChange = (event) => {
    setTranscript(event.target.value);
  };

  // Event handler for audio time updates
  const handleTimeUpdate = () => {
    // Update the audio's currentTime based on the text input
    if (audioRef.current) {
      audioRef.current.currentTime = calculateAudioTime(transcript);
    }
  };

  // Function to calculate audio time based on transcript text
  const calculateAudioTime = (text) => {
    // Implement your logic here to map text to time in the audio
    // For example, you could use regular expressions to find keywords or timestamps
    // and calculate the corresponding time in seconds.
    // Replace this example logic with your specific use case.

    // Example: Searching for "[00:30]" in the transcript
    const match = /\[(\d+:\d+)\]/.exec(text);
    if (match) {
      const timestamp = match[1]; // Extract the timestamp part
      const [minutes, seconds] = timestamp.split(":");
      const timeInSeconds = parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
      return timeInSeconds;
    }

    // If no match found, return 0 as the default time
    return 0;
  };

  useEffect(() => {
    // Add an event listener for time updates on the audio element
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  return (
    <div className="w-[48rem] font-Poppins flex flex-col bg-gray-400 p-10 rounded">
      <h2 className="mb-2 font-medium">Transcription Component</h2>
      <audio ref={audioRef} controls>
        <source src={URL.createObjectURL(audioFile)} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <textarea
        className="mt-5 rounded h-32 p-5"
        value={transcript}
        onChange={handleTextChange}
      ></textarea>
    </div>
  );
}
