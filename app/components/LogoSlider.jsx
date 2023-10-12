import Marquee from "react-fast-marquee";
import Image from "next/image";
const logos = [
  {
    image: "/logo-applauz.png",
  },
  {
    image: "/logo-avantage.png",
  },
  {
    image: "/logo-bello.png",
  },
  {
    image: "/logo-estato.png",
  },
  {
    image: "/logo-hotel-berg.png",
  },
  {
    image: "/logo-hotel-california.png",
  },
  {
    image: "/logo-urbanist.png",
  },
];
const LogoSlider = () => {
  return (
    <section className="py-8 bg-[#D6D6D6]">
      <Marquee pauseOnHover duration={200}>
        <div className="flex gap-24">
          {logos.map(({ image, index }) => {
            return (
              <figure
                key={index}
                className="flex items-center justify-center bg-[#D6D6D6] "
              >
                <Image src={image} alt="Hero" width={250} height={250} />
              </figure>
            );
          })}
        </div>
      </Marquee>
    </section>
  );
};

export default LogoSlider;
