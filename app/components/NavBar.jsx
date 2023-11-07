"use client";
import Image from "next/image";
import save from "../assets/save.svg";
import search from "../assets/search.svg";
import Link from "next/link";
import NewMenu from "./newMenu";

const NavBar = () => {
  return (
    <header className="px-8 mx-auto">
      <nav className="sticky top-0 flex items-center justify-between py-4 bg-white">
        <div className="flex items-center gap-20">
          <Link href="/">
            <h1 className="text-3xl font-extrabold">Xtech</h1>
          </Link>

          <ul className="hidden lg:flex lg:items-center lg:gap-4">
            <li className="hover:text-[#0C356A]">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#0C356A]">
              <Link href="/about">About us</Link>
            </li>
            <li className="hover:text-[#0C356A]">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-[#0C356A]">
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <button className="flex items-center gap-2 px-3 py-2 text-sm font-extrabold bg-[#0C356A] text-white btn">
            <Image src={save} alt="Search" width={20} height={20} /> Clint Area
          </button>
          <button className="flex items-center gap-2 text-sm font-extrabold text-white">
            <Image src={search} alt="Search" width={20} height={20} />
          </button>
        </div>
        <div className="block lg:hidden">
          <NewMenu />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
