import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-[#2B12AE]  ">
      <div className="flex items-center justify-between w-full mb-20 pt-14 ">
        <figure className="mt">
          <Image src="/hero.png" alt="Hero" width={700} height={700} />
        </figure>
        <div className="flex flex-col gap-8 w-[40rem]">
          <h1 className="flex flex-col gap-2 text-white text-start text-7xl">
            Applications{" "}
            <span className="text-[#FB17CE] font-bold">Made fun</span>
          </h1>
          <p className="text-xl font-light text-white text-start ">
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail.
          </p>
          <div className="flex items-center gap-4 mt-6 ">
            <button className="px-8 py-4 text-center white-btn text-[#FB17CE] font-extrabold">
              Find out more
            </button>
            <button className="px-8 py-4 font-extrabold text-center bg-[#FB17CE] text-white btn">
              Explore Products
            </button>
          </div>
          <div className="">
            <a
              className="relative w-4 h-4 bg-white bg-opacity-0 rounded-lg shadow-inner"
              href="/"
            ></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div className="w-[3rem]"></div>
      </div>
    </section>
  );
};

export default Hero;
