import AudioInput from "./AudioInput";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transcriber from "./Transcriber";
import { useState } from "react";

export default function Home() {
  const [audioFile, setAudioFile] = useState(null);
  const [transcription, setTranscription] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setAudioFile(selectedFile);
  };

  return (
    <div className=" bg-neutral-200 w-full h-screen flex justify-center items-center flex-col">
      <h1 className="font-Poppins flex text-5xl mb-10 font-bold text-slate-800">
        Audio Aunnotation
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 text-white bg-slate-700 p-2 rounded animate-pulse ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
          />
        </svg>
      </h1>

      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AudioInput
                handleFileChange={handleFileChange}
                audioFile={audioFile}
                setTranscription={setTranscription}
              />
            }
          />
          <Route
            path="/transcriber"
            element={
              <Transcriber
                audioFile={audioFile}
                data={transcription}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
