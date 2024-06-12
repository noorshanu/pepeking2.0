import Title from "components/Title";

const Grid = ({ direction = "left" }) => {
  return (
    <div
      className={`absolute top-0 w-1/2 h-full -z-20 pointer-events-none select-none ${
        direction === "right" ? "right-0" : "left-0"
      }`}
    >
      <div
        className={`absolute top-0 ${
          direction === "right" ? "right-[-2px]" : "left-[-2px]"
        } w-full h-full opacity-50 z-10`}
        style={{
          backgroundImage:
            "linear-gradient(white 2px, transparent 2px),linear-gradient(90deg, white 2px, transparent 2px)",
          backgroundSize: "3rem 3rem",
        }}
      ></div>

      <div
        className={`absolute z-20 w-full h-full top-0 left-0 from-transparent to-primary ${
          direction === "right" ? "bg-gradient-to-l" : "bg-gradient-to-r"
        }`}
      ></div>
    </div>
  );
};

function Roadmap() {
  return (
    <section
      className="relative z-10 overflow-hidden    bg-[#181818df]"
      id="road"
    >
      <img
        src="/images/wave.svg"
        alt=""
        className="bottom-[-45px] absolute  w-full left-0 right-0  z-10 h-[55px]"
      />
      <div className="container-wrapper mb-14">
        <Title className=" mb-10 mt-2 text-center text-3xl sm:text-6xl lg:text-6xl font-bold  lh-1_4 stroke-black text-stroke-3  font-coffee text-[#8ff852]">
          ROADMAP
        </Title>
        <p className=" text-center">
          Our journey is just beginning, and here's what's in store!
        </p>

        <div className="  items-center">
          <div className="w-full flex justify-evenly items-center gap-4 flex-col sm:flex-row mt-4">
            <img src="images/logo.png" alt="" className=" h-[150px]" />
            <div className="  backdrop-blur-2xl  rounded-2xl p-2 text-center w-full   border-2 border-[#8ff852]  ">
              <h2 className="text-[#fff]   font-semibold text-xl py-2">
                Phase 1
              </h2>
              <p className="text-white font-medium text-sm">
                Launch <br />
                100 to 1000 holders <br />
                CMC & CG <br />
                Big Marketing <br />
              </p>
            </div>

            <img
              src="images/stock.jpeg"
              alt=""
              className=" rounded-full h-[150px]"
            />
          </div>
          <div className=" flex justify-center gap-4 flex-col sm:flex-row  mt-8  ">
            <div className=" border-2 border-[#8ff852] backdrop-blur-2xl  rounded-2xl p-2 text-center w-full  ">
              <h2 className="text-[#fff] font-semibold text-xl py-2">
                Phase 2
              </h2>
              <p className="text-white font-medium text-sm">
                Events, competitions, and giveaways. <br />
                Tier 1 exchange <br />
                Community Building
              </p>
            </div>

            <div className="  backdrop-blur-2xl  rounded-2xl p-2 text-center w-full border-2 border-[#8ff852] ">
              <h2 className="text-[#fff] font-semibold text-xl py-2">
                Phase 3
              </h2>
              <p className="text-white font-medium text-sm">
                Influencer Partnerships <br />
                Further work on utility{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
