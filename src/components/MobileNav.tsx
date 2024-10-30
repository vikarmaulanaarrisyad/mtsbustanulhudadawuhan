import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimition = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimition} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#200f31]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">Beranda</div>
        <div className="nav-link-mobile">Profil</div>
        <div className="nav-link-mobile">Berita Terbaru</div>
        <div className="nav-link-mobile">Kegiatan</div>
        <div className="nav-link-mobile">Prestasi</div>
        <div className="nav-link-mobile">Contact</div>
        <a
          href="#"
          className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-t from-transparent via-transparent to-gray-700 "></span>
          <span className="relative">PPDB 2025</span>
        </a>
      </div>
      <div
        onClick={closeNav}
        className="absolute cursor-pointer top-[2rem] z-[1000000] right-[2rem] w-[2rem] h-[2rem] text-white"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
