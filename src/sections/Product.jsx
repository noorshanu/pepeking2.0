import Title from "components/Title";
import React from "react";

function Product() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="text-center">
          <Title className="text-white">What's on the horizon?</Title>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 my-5">
          <div className=" bg-[#cff4fd] rounded-2xl p-2 text-center w-full border border-black shadow-xl  ">
            <h2 className="text-black font-semibold text-xl py-2 ">
            Viral Cute Cat Memes
            </h2>
            <p className="text-black font-medium text-sm">
            Laugh till you purr with our hilarious cat memes that'll have you rolling on the floor!
            </p>
          </div>
          <div className=" bg-[#cff4fd] rounded-2xl p-2 text-center w-full border border-black ">
            <h2 className="text-[#000] font-semibold text-xl py-2">
            NFTs
            </h2>
            <p className="text-black font-medium text-sm">
            Own a piece of Catwithat history with our exclusive NFTs featuring Catwithat in all her glory.
            </p>
          </div>
          <div className=" bg-[#cff4fd] rounded-2xl p-2 text-center w-full border border-black ">
            <h2 className="text-black font-semibold text-xl py-2">
            High Staking Rewards
            </h2>
            <p className="text-black font-medium text-sm">
            Earn big just by holding onto our coin. Sit back, relax, and watch your investment grow!
            </p>
          </div>
          <div className=" bg-[#cff4fd] rounded-2xl p-2 text-center w-full border border-black  ">
            <h2 className="text-[#000] font-semibold text-xl py-2">
            Trading Bots
            </h2>
            <p className="text-black font-medium text-sm">
              Explore secure, user-friendly trading with our dynamic trading bot
              collection – covering everything from MEV to copy trading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
