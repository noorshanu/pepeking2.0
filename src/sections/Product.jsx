import Title from "components/Title";
import React from "react";

function Product() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="text-center">
          <Title className="text-white text-xl">Our objective is simple: to unleash gains of epic proportions!</Title>
        </div>

  <div className=" flex justify-evenly flex-col sm:flex-row gap-8 items-center border-2 border-[#8ff852] rounded-xl bg-[#000000cc] py-4 px-2">

    <div>
      <p className="bg-[#000] border-2 p-2 border-[#8ff852] my-2">100 Holders: 3X gains</p>
      <p className="bg-[#000] border-2 p-2 border-[#8ff852] my-2">
      1000 Holders: 300X gains
      </p>

      <p className="bg-[#000] border-2 p-2 border-[#8ff852] my-2">
      10000 Holders: 3000X gain
      </p>
    </div>
    <div>
      <img src="images/book.jpeg" alt="" className=" h-auto w-[350px] rounded-2xl border-[#8ff852] border-2" />
    </div>

  </div>
      </div>
    </section>
  );
}

export default Product;
