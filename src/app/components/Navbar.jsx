"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  {
    /*Keyboard shortcuts to bring up and exit mobile menu  */
  }
  useEffect(() => {
    const handleKeys = (e) => {
      const key = e.key.toLowerCase();

      if (key === "escape") {
        setOpenMenu(false);
      }

      if (key === "?" || key === "/") {
        setOpenMenu((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeys);

    return () => {
      window.removeEventListener("keydown", handleKeys);
    };
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <Link href="/" onClick={() => setOpenMenu(false)}>
        <Image src="/logo.png" alt="logo" width={75} height={75} />
      </Link>

      {/* Desktop navigation */}
      <div className="nav-links">
        {links.map((link) => (
          <Link className="link" key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Hamburger menu */}
      <div
        className={`hamburger ${openMenu ? "open" : ""}`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span />
        <span />
        <span />
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${openMenu ? "show" : ""}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpenMenu(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
