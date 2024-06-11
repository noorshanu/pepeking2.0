import Title from "components/Title";

function Mission() {
  return (
    <section className="container-wrapper grid lg:grid-cols-2 gap-10 mb-12">
      <div>
        <Title className="lh-1_5 mb-3">MISSION</Title>

        <p className="font-daughter text-xl font-medium ">
        At CatWitHat, our mission is to create a joyful and rewarding experience in Solana's adventurous world through memes, NFTs, and high staking rewards. We bring together meme enthusiasts, NFT collectors, and investors to revolutionize the meme landscape and create lasting value. Join us on this exciting journey to spread laughter and unlock financial potential, one meme at a time. Meow!
        </p>
      </div>

      <div>
        <img src="/images/mission.jpeg" className="w-auto rounded-3xl" alt="" />
      </div>
    </section>
  );
}

export default Mission;
