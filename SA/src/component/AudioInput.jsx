import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AudioInput({ handleFileChange, audioFile }) {
  const Navigate = useNavigate();

  const handleUpload = () => {
    const Data = new FormData();
    Data.append("audioFile", audioFile);
    if (audioFile) {
      axios.post("fetchText/", Data).then((res) => console.log(res));
      Navigate("/transcriber");
    }
  };
  return (
    <div className="shadow-xl w-[48rem] bg-neutral-400 font-Poppins s p-10 rounded flex flex-col space-y-5">
      <label className="text-white group mb-2 text-lg font-semibold text-center">
        🚀 Ready to Rock?
        <span className="bg-slate-800 px-2 rounded mx-2 font-light">
          Upload Your Awesome Audio!
        </span>
      </label>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300  rounded cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-400 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag
              and drop         
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
                            select audio file (.mp3)           
            </p>
          </div>
          <input
            type="file"
            onChange={handleFileChange}
            id="dropzone-file"
            accept="audio/*"
            className="hidden"
          />
        </label>
      </div>
      {audioFile ? (
        <p className="bg-green-200 rounded p-2 px-10 flex items-center ">
          Saved
          <span className="mx-2 text-slate-600">{audioFile.name}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>
        </p>
      ) : (
        <></>
      )}
      <input
        onChange={handleFileChange}
        className=" w-full text-sm p-2 text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 "
        type="file"
        accept="audio/*"
      />
      <button
        onClick={handleUpload}
        className="py-2 px-4 bg-slate-800 text-white rounded mx-auto shadow-lg hover:rounded-none  hover:bg-slate-950"
      >
        Upload
      </button>
    </div>
  );
}
