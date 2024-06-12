import Title from "components/Title";

function About() {
  return (

    <>

    <img src="images/wave.svg" alt="" className=" w-full h-[45px]" />
      <section className="mx-8 rounded-b-2xl py-12" id="about">
      <div className="container-wrapper grid lg:grid-cols-2 gap-10 ">
        <div>
          <img
            src="/images/about.jpeg"
            className=" rounded-3xl h-auto sm:h-[400px] w-auto"
            alt=""
          />
        </div>

        <div>
          <Title className="lh-1_5 mb-3  py-2 stroke-black text-stroke-3 font-bold font-coffee text-[#8ff852]">About Us</Title>

          <p className=" text-2xl font-medium text-black ">
          Welcome to the kingdom of Royal Pepe, where memes meet crypto in a fusion of fun and fortune! Royal Pepe is not just another meme coin; we're on a mission to become the one true ruler of Solana's meme realm. Royal Pepe brings you endless excitement, hype on every pump, and best of all, a 0% fee on all purchases for our beloved holders!
          </p>
        </div>
      </div>
    </section>
    </>
  
  );
}

export default About;
