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
    <section className="relative z-10 overflow-hidden border-2 mx-8 rounded-3xl" id="road">
      <div className="container-wrapper mb-14">
        <Title className="text-center mb-4 pt-8">ROADMAP</Title>
        <p className=" text-center">
        Join Catwithat on our journey to save the Solana meme world, one meme at a time! Meow!
        </p>

        <div className=" flex justify-center gap-4 flex-col sm:flex-row items-center">
          <div className="w-full">
            <img src="images/cats.png" alt="" />
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" bg-[#cff4fd] backdrop-blur-2xl  rounded-2xl p-2 text-center w-full border border-black  ">
              <h2 className="text-[#000] font-semibold text-xl py-2">
               Phase 1
              </h2>
              <p className="text-black font-medium text-sm">
              Launch <br />
              More Memes, More Fun  <br />
              1 Million Mcap <br />
              Big Marketing <br />
              CMC and CG Fasttrack listing <br />

               
              </p>
            </div>

            <div className=" bg-[#cff4fd] backdrop-blur-2xl  rounded-2xl p-2 text-center w-full border border-black  ">
              <h2 className="text-[#000] font-semibold text-xl py-2">
                Phase 2
              </h2>
              <p className="text-black font-medium text-sm">
              Expansion into Solana world <br />
              Launch staking and NFTs <br />
              Community Building
              </p>
            </div>

            <div className=" bg-[#cff4fd] backdrop-blur-2xl  rounded-2xl p-2 text-center w-full border border-black  ">
              <h2 className="text-[#000] font-semibold text-xl py-2">
              Phase 3
              </h2>
              <p className="text-black font-medium text-sm">
              Tier 1 Exchange listing
              Events, giveaways, partnership and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
