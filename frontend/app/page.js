import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative text-black flex justify-center py-62">
      <div className="bg-white absolute top-2/12 right-2/12 animate-pulse opacity-70 p-1 pr-3 flex items-center gap-2 rounded-xl border w-max border-[#C3C3C3] cursor-pointer mt-3">
        <div className="bg-purple-200 w-max py-1 px-2.5 rounded-lg">C</div>
        <span className="text-black">Student 01</span>
      </div>
      <div className="bg-white absolute top-9/12 right-64 animate-pulse p-1 pr-3 flex items-center gap-2 rounded-xl border w-max border-[#C3C3C3] cursor-pointer mt-3">
        <div className="bg-indigo-200 w-max py-1 px-2.5 rounded-lg">F</div>
        <span className="text-black">Student 02</span>
      </div>
      <div className="bg-white absolute top-7/12 right-9/12 animate-pulse p-1 pr-3 flex items-center gap-2 rounded-xl border w-max border-[#C3C3C3] cursor-pointer mt-3">
        <div className="bg-indigo-200 w-max py-1 px-2.5 rounded-lg">E</div>
        <span className="text-black">Student 03</span>
      </div>
      <div className="bg-white absolute top-2/12 left-3/12 animate-pulse p-1 pr-3 flex items-center gap-2 rounded-xl border w-max border-[#C3C3C3] cursor-pointer mt-3">
        <div className="bg-indigo-200 w-max py-1 px-2.5 rounded-lg">H</div>
        <span className="text-black">Student 04</span>
      </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-7xl font-bold">Study Genius</h1>
          <p className="text-[#545454]">The best app to manage your study time</p>
          <button className="bg-white px-4 py-2 rounded-xl border border-[#C3C3C3] cursor-pointer mt-3 hover:-translate-y-1 transition duration-200">Get started</button>
        </div>
      </div>
    </>
  );
}
