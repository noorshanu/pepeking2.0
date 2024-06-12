import Title from "components/Title";

function Tokenomics() {
  return (
    <div className=" relative  " id="token">
      <img
        src="/images/wave.svg"
        alt=""
        className=" absolute -top-10 w-full left-0 right-0 rotate-180 z-10 h-[45px]"
      />

      <img
        src="/images/wave.svg"
        alt=""
        className="bottom-[-35px] absolute  w-full left-0 right-0  z-10 h-[45px]"
      />
      <section className="relative z-10 overflow-hidden   ">
        <img
          src="/images/bg2.png"
          className="absolute top-0 left-0 w-full h-full object-cover object-top -z-10  "
          alt=""
        />
        <div className=" h-screen bg-[#00000090] absolute top-0 w-full  "></div>
        <section className="container-wrapper relative z-50   py-10 sm:py-14 px-4 sm:px-10">
          <Title className=" mb-10 text-center text-3xl sm:text-6xl lg:text-6xl font-bold  lh-1_4 stroke-black text-stroke-3  font-coffee text-[#8ff852]">Tokenomics</Title>

          <div className="grid sm:grid-cols-3 gap-10 items-center">
            <div>
              <h1 className=" text-center  text-2xl text-b">LP BURN</h1>
              <img
                src="/images/burn.jpeg"
                className="w-auto rounded-2xl"
                alt=""
              />
            </div>

            <div>
              <h1 className=" text-center  text-2xl">TAX 0%</h1>
              <img
                src="/images/tax.jpeg"
                className="w-auto rounded-2xl"
                alt=""
              />
            </div>

            <div>
              <h1 className=" text-center  text-2xl">RENOUNCED</h1>
              <img
                src="/images/anno.jpeg"
                className="w-auto rounded-2xl"
                alt=""
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Tokenomics;
