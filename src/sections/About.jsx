import Title from "components/Title";

function About() {
  return (
    <section className="bg-purp mx-8 rounded-b-2xl py-12" id="about">
      <div className="container-wrapper grid lg:grid-cols-2 gap-10 ">
        <div>
          <img
            src="/images/about.jpeg"
            className=" rounded-3xl h-auto sm:h-[400px] w-auto"
            alt=""
          />
        </div>

        <div>
          <Title className="lh-1_5 mb-3 text-[#000]">About Us</Title>

          <p className="font-daughter text-2xl font-medium text-black ">
            Meow! Welcome to CatWitHat, where cuteness meets high gains! 😺
            Catwithat embodies the spirit of all things cute, silly, and meme
            fun. Our founder, Catwithat herself, is here to revolutionize the
            meme world with her hilarious creations and laid-back approach to
            making money.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
