import Image from "next/image";
const Hero = () => {
  return (
    <section className="bg-[#2B12AE] px-8 ">
      <div className="flex items-center justify-between mb-20 pt-14 ">
        <figure className="hidden lg:block">
          <Image src="/hero.png" alt="Hero" width={700} height={700} />
        </figure>
        <div className="flex flex-col gap-8 w-[40rem]">
          <h1 className="flex flex-col gap-2 text-5xl text-white text-start lg:text-7xl">
            Applications{" "}
            <span className="text-[#FB17CE] font-bold">Made fun</span>
          </h1>
          <p className="text-xl font-light text-white text-start ">
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail.
          </p>
          <div className="flex items-center gap-4 mt-6 ">
            <button className="lg:px-8 px-4 py-2 Lg:py-4 text-center white-btn bg-white text-[#FB17CE] font-extrabold">
              Find out more
            </button>
            <button className="lg:px-8 px-4 py-2 Lg:py-4 text-center white-btn bg-[#FB17CE] text-white font-extrabold">
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
