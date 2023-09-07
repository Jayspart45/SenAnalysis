import AudioInput from "./AudioInput";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transcriber from "./Transcriber";
import { useState } from "react";

export default function Home() {
  const [audioFile, setAudioFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    setAudioFile(selectedFile);
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center flex-col">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <AudioInput
                handleFileChange={handleFileChange}
                audioFile={audioFile}
              />
            }
          />
          <Route
            path="/transcriber"
            element={<Transcriber audioFile={audioFile} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
