import { FaTelegram, FaTwitter } from "react-icons/fa";

function Hero() {
  return (

 

      <section className="relative z-10 overflow-hidden   ">
        <img
          src="/images/bg.png"
          className="absolute top-0 left-0 w-full h-full object-cover object-top -z-10 "
          alt=""
        />
        <div className=" h-screen bg-[#00000063] absolute top-0 w-full "></div>

        <div className="container-wrapper lg:h-screen flex flex-col sm:flex-row items-center justify-between pt-6 pb-12 lg:drop-shadow-[0_0_10rem_white]">
          <div>
            <img
              src="/images/hero-couple-no-shadow.png"
              className="w-full  object-contain floating"
              alt=""
            />
          </div>

          <div className=" drop-shadow-xl">
            <p className=" text-6xl sm:text-8xl text-center py-2 stroke-black text-stroke-3 font-bold font-coffee text-[#8ff852]">
              Royal pepe
            </p>
            <p className=" text-center text-base font-bold text-[#8ff852]">
              Royal PEPE is the real king of the Solana meme world
            </p>
            <div className=" justify-center flex  items-center gap-3">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-2 rounded-full bg-[#000] border-2 border-[#8ff852] text-white font-bold transition-all duration-200 hover:bg-transparent hover:text-[#8ff852] relative text-xl"
              >
                <FaTwitter />
              </a>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-2 rounded-full bg-[#000] border-2 border-[#8ff852] text-white font-bold transition-all duration-200 hover:bg-transparent hover:text-[#8ff852] relative text-xl"
              >
                <FaTelegram />
              </a>

              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/"
                target="_blank"
                rel="noreferrer"
                className="py-2 px-2 rounded-full bg-[#000] border-2 border-[#8ff852] text-white font-bold transition-all duration-200 hover:bg-transparent hover:text-[#8ff852] relative text-xl"
              >
                <img src="images/dex.png" alt="" className=" h-[24px] w-auto" />
              </a>
            </div>
            <button className="py-2 px-4 mt-2 rounded-full bg-[#000] border-2 border-[#8ff852] text-white font-bold transition-all duration-200 hover:bg-transparent hover:text-[#8ff852] text-xs sm:text-sm relative">
              CA: soon....
            </button>
          </div>
        </div>
      </section>

  );
}

export default Hero;
