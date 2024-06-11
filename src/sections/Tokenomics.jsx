import Title from "components/Title";

function Tokenomics() {
  return (
    <div className=" mx-8 rounded-2xl border-2" id="token">
    <section className="container-wrapper   py-10 sm:py-14 px-4 sm:px-10">
      <Title className="text-white  mb-10 text-center">Tokenomics</Title>

      <div className="grid sm:grid-cols-3 gap-10 items-center">
       <div>
        <h1 className=" text-center font-daughter text-2xl">
          LP BURN
        </h1>
       <img src="/images/burn.jpeg" className="w-auto rounded-2xl" alt="" />
       </div>

       <div>
       <h1 className=" text-center font-daughter text-2xl">
         TAX 0%
        </h1>
        <img src="/images/tax.jpeg" className="w-auto rounded-2xl" alt="" />
       </div>
       
       <div>
       <h1 className=" text-center font-daughter text-2xl">
         RENOUNCED
        </h1>
        <img src="/images/anno.jpeg" className="w-auto rounded-2xl" alt="" />
       </div>
        
      </div>
    </section>
    </div>
  );
}

export default Tokenomics;
