import { useNavigate } from "react-router-dom";

export default function AudioInput({ handleFileChange, audioFile }) {
  const Navigate = useNavigate();

  const handleUpload = () => {
    if (audioFile) {
      Navigate("/transcriber");
    }
  };
  return (
    <div className="shadow-xl w-[48rem] bg-neutral-700 font-Poppins s p-10 rounded flex flex-col space-y-5">
      <label className=" text-white mb-2 text-xl   ">Upload Audio file</label>
      <input
        onChange={handleFileChange}
        className=" w-full text-sm p-2 text-gray-900 border border-gray-300 rounded cursor-pointer bg-gray-50 "
        type="file"
        accept="audio/*"
      />
      <button
        onClick={handleUpload}
        className="py-2 px-4 bg-gray-400 rounded mx-auto shadow-lg hover:rounded-none hover:bg-white"
      >
        Upload
      </button>
    </div>
  );
}
