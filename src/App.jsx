import Navbar from "components/Navbar";
import About from "sections/About";
import BackedBy from "sections/BackedBy";
import FeaturedOn from "sections/FeaturedOn";
import Get from "sections/Get";
import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";
import Mission from "sections/Mission";
import Product from "sections/Product";
import Roadmap from "sections/Roadmap";
import Tokenomics from "sections/Tokenomics";

function App() {
  return (
    <div className="flex flex-col relative z-10">
        <div className="lg:absolute top-4 2xl:top-3 left-0 w-full z-20">
            <Navbar />
          </div>

      <main className="flex-1">
        <div className="relative z-10">
        

          <div className="mb-10 lg:mb-20">
            <Hero />
          </div>
        </div>

        <div className="mb-20" id="about">
          <About />
        </div>

        <div className="mb-14 lg:mb-20" id="tokenomics">
          <Tokenomics />
        </div>
        <div className="mb-14 lg:mb-20" id="tokenomics">
         <Product/>
        </div>
        <div>
          <Mission/>
        </div>
        <img
          src="/images/white-strip.svg"
          className="w-full scale-x-[1.2] mb-6"
          alt=""
        />

        <div id="roadmap">
          <Roadmap />
        </div>

        {/* <div className="mb-20">
          <Get />
        </div> */}

        {/* <div>
          <BackedBy />
        </div> */}

        {/* <img
          src="/images/star.png"
          className="h-[10rem] lg:h-[12rem] mt-[-1.4rem] lg:mt-[-2.4rem] mb-[-1.4rem] lg:mb-[-2.4rem] w-full object-contain z-[60] relative pointer-events-none select-none"
          alt=""
        /> */}

        <div className="my-20">
          {/* <FeaturedOn /> */}
          <div className="my-10 mx-auto flex justify-center">
            <a href="" className="py-3 px-10 rounded-full bg-[#ffffff] text-xl transition-all duration-200  hover:bg-transparent text-black border-black hover:border-white  hover:text-white border ">
              Buy Now
            </a>

          </div>
        </div>
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;
