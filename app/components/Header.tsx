"use client";
import React, { useEffect, useState } from "react";
import header from "../styles/header.module.scss";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        closeNav();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={header.header}>
      <div className={`contain ${header.contain}`}>
        <nav className={header.flex}>
          <Link href={"/"}>Home</Link>
          <Link href={"/repair"}>Repairs</Link>
          <Link href={"/locations"}>Locations</Link>
          <Link href={"/about"}>About us</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/careers"}>Join us</Link>
        </nav>
        <div className={header.flex}>
          <button className="btn"> Start a Repair</button>
          <button className={header.tel_btn}>
            <FiPhone /> +1 (877) 966 4349
          </button>
        </div>
        <p onClick={toggleNav}>
          {isNavOpen ? <FaXmark/> :<FaBars />}
        </p>
        {isNavOpen && (
          <div className={header.mobileNav}>
            <Link href={"/"} onClick={closeNav}>Home</Link>
            <Link href={"/repair"} onClick={closeNav}>Repairs</Link>
            <Link href={"/locations"} onClick={closeNav}>Locations</Link>
            <Link href={"/about"} onClick={closeNav}>About us</Link>
            <Link href={"/contact"} onClick={closeNav}>Contact</Link>
            <Link href={"/blog"} onClick={closeNav}>Blog</Link>
            <Link href={"/careers"} onClick={closeNav}>Join us</Link>
            <button className="btn"> Start a Repair</button>
            <button className={header.tel_btn}>
              <FiPhone /> +1 (877) 966 4349
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
