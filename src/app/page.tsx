"use client";

import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [nav, setNav] = useState(false);
  const openNavHandler = () => setNav(true);
  const closeNavHandler = () => setNav(false);

  return (
    <div>
      <div className="overflow-x-hidden">
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNavHandler} />
        <Navbar openNav={openNavHandler} />
        {/* Hero */}
        <Hero />
      </div>
    </div>
  );
}
