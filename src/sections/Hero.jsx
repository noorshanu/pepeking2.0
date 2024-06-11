import { FaTelegram, FaTwitter } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative z-10 overflow-hidden m-4  ">
      <img
        src="/images/bg.webp"
        className="absolute top-0 left-0 w-full h-full object-cover object-top -z-10 rounded-t-2xl"
        alt=""
      />

      <div className="container-wrapper lg:h-screen flex flex-col items-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <img
          src="/images/hero-couple-no-shadow.png"
          className="w-full lg:w-[70%] lg:h-[70%] object-contain"
          alt=""
        />

        <div className=" justify-center flex items-center gap-3">

          <a href="https://x.com/catwithatonsol" target="_blank" rel="noreferrer" className="py-2 px-2 rounded-full bg-[#fff] border-2 border-[#000] text-black font-bold transition-all duration-200 hover:bg-transparent hover:text-[#000] relative text-xl">
          <FaTwitter/>
          </a>

          <a href="https://t.me/Catwithatcoin" target="_blank" rel="noreferrer" className="py-2 px-2 rounded-full bg-[#fff] border-2 border-[#000] text-black font-bold transition-all duration-200 hover:bg-transparent hover:text-[#000] relative text-xl">
          <FaTelegram/>
          </a>

          <a href="https://www.dextools.io/app/en/solana/pair-explorer/4SDBHr3K4V8MPBEQhqLCDPBGohmdcPq68JdTiMdfd2xJ?t=1718025151269"  target="_blank" rel="noreferrer"  className="py-2 px-2 rounded-full bg-[#fff] border-2 border-[#000] text-black font-bold transition-all duration-200 hover:bg-transparent hover:text-[#000] relative text-xl">
          <img src="images/dex.png" alt="" className=" h-[24px] w-auto" />
          </a>

        </div>
          <button className="py-2 px-4 mt-2 rounded-full bg-[#fff] border-2 border-[#000] text-black font-bold transition-all duration-200 hover:bg-transparent hover:text-[#000] relative">
         
           CA: 3TXMpXWB9sM7bEamM46WqQ5fCg2Ngo1Cn3R7xu5nmtxx
          </button>
      </div>
  
      <img
        src="/images/pink-wave.svg"
        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-full scale-x-[1.1]"
        alt=""
      />
    </section>
  );
}

export default Hero;
