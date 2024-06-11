import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";

const Button = ({ children, className, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className={`py-3 px-4 rounded-full bg-[rgba(255,255,255,.2)] text-sm transition-all duration-200 hover:bg-white hover:text-black hover:border-black border ${className}`}
    >
      {children}
    </a>
  );
};


function JoinCommunity() {
  return (
    <section className="pb-14 relative z-10 overflow-hidden" id="contact">
      <div
        className="absolute top-[4rem] left-0 w-full h-full -z-20 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent to-[#000000]"></div>

      <div className="container-wrapper">
        <div className=" flex items-center justify-center">
          <img
            src="/images/glass.png"
            className="w-full max-w-[24rem]  lg:mx-0 hidden sm:block mx-auto"
            alt=""
          />

    
        </div>

        <div className="flex flex-col  items-center justify-center mb-2 lg:mb-20 text-center lg:text-left space-y-6 lg:space-y-0">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold font-dream lh-1_4">
            JOIN OUR <br />
            COMMUNITY
          </h1>
          <div className="flex items-center -m-1 flex-wrap justify-center lg:justify-normal">
            <Button className="m-1" link="https://www.dextools.io/app/en/solana/pair-explorer/4SDBHr3K4V8MPBEQhqLCDPBGohmdcPq68JdTiMdfd2xJ?t=1718025151269">DexTools</Button>
            <Button link="https://x.com/catwithatonsol" className="m-1">
              Twitter
            </Button>
            <Button link="https://t.me/Catwithatcoin" className="m-1">
              Telegram
            </Button>
            
          </div>
      
        </div>

        <div className="">
      

          <p className="text-center">
            All rights reserved by CATWITHAT 2024
          </p>
        </div>
      
      </div>
    </section>
  );
}

export default JoinCommunity;
