"use client";

import { getDate } from "bangla-calendar";
import SocialMedia from "./SocialMedia";
import { FaSearch } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import logo from "../../public/image/images-removebg-preview.png";
import Image from "next/image";

export default function Header() {
  const today = new Date();

  // bangla Calender date
  const banglaDate = getDate(today, {
    format: "D MMMM, YYYYb",
    calculationMethod: "BD",
  });

  // Banglish Date
  const banglishDate = today.toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="">
      {/* Top navbar */}
      <section className="">
        <div className="hidden px-5 md:flex flex-row justify-between items-center py-6 max-w-7xl mx-auto">
          <div>
            {banglishDate} | {banglaDate}
          </div>
          <div className="font-bold text-xl">Top nav</div>
          <div>
            <SocialMedia />
          </div>
        </div>

        <div className="flex flex-row px-5 justify-between items-center max-w-7xl mx-auto  ">
          <div className="block md:hidden justify-center items-center">
            <button>
              <FaSearch size={25} />
            </button>
          </div>
          <div className="gap-4 hidden md:flex">
            <a href="#">
              <img
                className="w-[130px]"
                src="/app-store-apple.png"
                alt="app-store-apple"
              />
            </a>
            <a href="#">
              <img
                className="w-[130px]"
                src="/icons-google-play.png"
                alt="icons-google-play"
              />
            </a>
          </div>

          <a
            className="relative w-[150px] h-[100px]  text-2xl font-bold rounded-full"
            href="/"
          >
            <div>
              <Image src={logo} fill alt="logo" priority />
            </div>
          </a>

          <div>
            <button className="px-4 bg-black text-white hover:text-red-600 md:px-6 py-1 md:py-2 rounded-lg">
              English
            </button>
          </div>
        </div>

        <div className="shadow-xl sticky top-0 z-50 bg-white">
          <Navbar />
        </div>

        <div className="max-w-7xl mx-auto flex bg-[#303C5D] px-2 text-white font-bold text-xl">
          <p className="hidden md:block px-5 py-2 shadow-2xl">সর্বশেষ</p>
          <Marquee pauseOnHover={true} speed={100}>
            <li className="list-disk">
              <a href="#">
                শেষ ওভারে ১৭ রানের সমীকরণে প্রথম তিন বলে ১২ রান নিয়েও জিততে পারল
                না আরব আমিরাত।
              </a>
            </li>
          </Marquee>
        </div>
      </section>
    </header>
  );
}
