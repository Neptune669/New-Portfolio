import Image from "next/image";

const PortfolioCard = ({ imgSrc, title, description }) => {
  return (
    <ul className="bg-[#F5F5F5] w-[400px] pb-6 flex flex-col gap-3 rounded-lg hover:shadow-xl shadow-md ">
      <li>
        <Image
          className="rounded-lg"
          src={imgSrc}
          alt="Logo"
          width={450}
          height={450}
        />
      </li>
      <ul className="flex flex-col gap-3 px-8">
        <li className="text-3xl font-bold">{title}</li>
        <li className="text-sm font-semibold max-w-fit ">{description}</li>
        <li className="font-bold text-primary">Learn more &rarr;</li>
      </ul>
    </ul>
  );
};
const data = [
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
  {
    imgSrc: "/blog.jpg",
    title: "Empowering the Internet Generation",
    description:
      "Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services.",
  },
];
const PortfolioList = () => {
  return (
    <section className="px-8 py-12 mx-auto max-w-7xl">
      <main className="grid gap-y-10 gap-x-6 lg:grid-cols-3 ">
        {data.map((item, index) => {
          return <PortfolioCard key={index} {...item} />;
        })}
      </main>
    </section>
  );
};

export default PortfolioList;
