import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <nav className="z-[100]  ">
        <div className="container-wrapper bg-[#00000044] h-14 lg:h-16 2xl:h-20 rounded-full flex justify-between lg:justify-normal lg:grid lg:grid-cols-[1fr_16rem_1fr] gap-8 items-center backdrop-blur-xl">
          <div className="items-center justify-evenly text-base font-medium text-white hidden lg:flex">
            <a
              href="#about"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              About us
            </a>
            <a href="#road"
              
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
             Roadmap
            </a>
          </div>

          <div>
            <img
              src="/images/logo.png"
              className="w-full max-w-[4rem] lg:max-w-[5rem] mx-auto"
              alt=""
            />
          </div>

          <button
            className="text-2xl text-white flex lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <IoMenu />
          </button>

          <div className="items-center justify-evenly text-base font-medium text-white hidden lg:flex">
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
             Socials
            </Link>
            <a
              href="#token"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Tokenomics
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-[16rem] h-screen z-[1000] bg-black text-white border-l-4 border-white pt-6 px-8 transition-all duration-300 ${
          !sidebarOpen ? "translate-x-[16rem]" : "translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <img src="/images/logo.png" className="w-full max-w-[5rem]" alt="" />

          <button
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            <IoClose />
          </button>
        </div>

        <div className="space-y-5 flex flex-col text-left items-start text-white font-medium">
          <a
            href="#about"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
        About us
          </a>
          <a
            href="#roadmap"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            Roadmap
          </a>
          <Link
            to="about"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
           Twitter
          </Link>
          <Link
            to="tokenomics"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            Tokenomics
          </Link>
        </div>
      </div>

      <div
        className={`black-screen z-[900] ${sidebarOpen ? "show" : ""}`}
      ></div>
    </>
  );
}

export default Navbar;
