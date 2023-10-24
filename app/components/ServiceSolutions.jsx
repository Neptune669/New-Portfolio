import Image from "next/image";

const Card = ({ icon, title, description, color }) => {
  return (
    <div>
      <ul className="flex flex-col items-center justify-center gap-6 px-5 py-24 bg-white border shadow-md">
        <li>
          <Image src={icon} width={50} height={50} alt="icon" />
        </li>
        <li>{title}</li>
        <li className="text-center">{description}</li>
        <li>
          <button
            className={`px-16 py-5 text-sm font-bold text-white btn bg-${color}`}
          >
            Read more
          </button>
        </li>
      </ul>
    </div>
  );
};

const data = [
  {
    icon: "/mobile.svg",
    title: "Online at all times",
    description:
      "Deliver efficient performance-based methods of empowerment whereas distributed expertise.",
    color: "primary",
  },
  {
    icon: "/mobile.svg",
    title: "Online at all times",
    description:
      "Deliver efficient performance-based methods of empowerment whereas distributed expertise.",
    color: "secondary",
  },
  {
    icon: "/mobile.svg",
    title: "Online at all times",
    description:
      "Deliver efficient performance-based methods of empowerment whereas distributed expertise.",
    color: "primary",
  },
  {
    icon: "/mobile.svg",
    title: "Online at all times",
    description:
      "Deliver efficient performance-based methods of empowerment whereas distributed expertise.",
    color: "secondary",
  },
  // Add more data objects with different colors if needed
];

const ServiceSolutions = () => {
  return (
    <section className="bg-[#F5F5F5] py-12">
      <main className="grid px-8 mx-auto gap-y-6 lg:grid-cols-4 gap-x-6 max-w-7xl">
        {data.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </main>
    </section>
  );
};

export default ServiceSolutions;
