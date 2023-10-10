"use client";
import Image from "next/image";
import save from "../assets/save.svg";
import search from "../assets/search.svg";
const NavBar = () => {
  return (
    <header className="max-w-full px-8 mx-auto bg-[#2B12AE]">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center gap-20">
          <figure className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={180} height={180} />
          </figure>
          <ul className="flex items-center gap-4 text-white">
            <li>Home</li>
            <li>About us</li>
            <li>Pages</li>
            <li>Portfolio</li>
            <li>News</li>
            <li>Elements</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-extrabold bg-[#FB17CE] text-white btn">
            <Image src={save} alt="Search" width={20} height={20} /> Support
            site
          </button>
          <button className="flex items-center gap-2 text-sm font-extrabold text-white ">
            <Image src={search} alt="Search" width={20} height={20} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
