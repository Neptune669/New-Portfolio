"use client";
import Counting from "./NumberCounter";
import Image from "next/image";

const Technology = () => {
  return (
    <section className="flex flex-col gap-8 px-8 mx-auto bg-white rounded-bl-lg lg:flex-row max-w-7xl">
      <div className="flex flex-col gap-6 w-fit ">
        <h1 className="text-4xl font-extrabold">
          <span className="text-[#FB17CE]">Technology </span> <br />
          for Innovators
        </h1>
        <p className="text-[181818]">
          Objectively integrate enterprise-wide strategic theme areas with{" "}
          <br />
          functionalized infrastructures. Interactively productize premium
          technologies <br /> whereas interdependent quality vectors.
        </p>
        <div className="grid items-center lg:grid-cols-3 gap-y-4">
          <ul className="flex flex-col gap-6 lg:border-r  lg:border-[#0000002b] w-48 ">
            <li className="text-[#210D94]  text-4xl">
              <Counting startValue={1} endValue={250} duration={0.5} />
            </li>
            <li>
              Million of client <br /> logins monthly
            </li>
          </ul>
          <ul className="flex flex-col gap-6 lg:px-3 lg:border-r lg:justify-center lg:items-center lg:border-[#0000002b] w-48 ">
            <li className="text-[#FB17CE]  text-4xl">
              <Counting startValue={1} endValue={120} duration={0.5} />
            </li>
            <li className="text-center">Languages and countries</li>
          </ul>
          <ul className="flex flex-col w-48 gap-6 px-3">
            <li className="text-[#83E5C5]   text-4xl">
              <Counting startValue={1} endValue={170} duration={0.5} />
            </li>
            <li>
              Million of client <br /> logins monthly
            </li>
          </ul>
        </div>
        <button className="btn bg-[#210D94] w-fit text-white py-4 px-5 ">
          find out more
        </button>
      </div>
      <figure>
        <Image
          src="/technology.png"
          width={700}
          height={700}
          alt="Technology"
        />
      </figure>
    </section>
  );
};

export default Technology;
