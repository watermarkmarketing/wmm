"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const MenuDrawer: React.FC = () => {
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const menuToggle = menuToggleRef.current;

    if (!menuToggle) return;

    const menuBar = gsap
      .timeline({ reversed: true })
      .to(
        ".bar-1",
        { attr: { d: "M8,2 L2,8" }, x: 1, ease: "power2.inOut" },
        "start"
      )
      .to(".bar-2", { autoAlpha: 0 }, "start")
      .to(
        ".bar-3",
        { attr: { d: "M8,8 L2,2" }, x: 1, ease: "power2.inOut" },
        "start"
      )
      .reverse();

    const tl = gsap
      .timeline({ paused: true })
      .to(".fullpage-menu", {
        duration: 0,
        display: "block",
        ease: "expo.inOut",
      })
      .from(".menu-bg span", {
        duration: 1,
        x: "100%",
        stagger: 0.1,
        ease: "expo.inOut",
      })
      .from(
        ".main-menu li a",
        { duration: 1.5, y: "100%", stagger: 0.2, ease: "expo.inOut" },
        "-=0.5"
      )
      .from(
        ".social-links li",
        {
          duration: 1,
          y: "-100%",
          opacity: 0,
          stagger: 0.1,
          ease: "expo.inOut",
        },
        "-=0.5"
      )
      .reverse();

    const toggleMenu = () => {
      menuBar.reversed(!menuBar.reversed());
      tl.reversed(!tl.reversed());
    };

    menuToggle.addEventListener("click", toggleMenu);

    return () => {
      menuToggle.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 flex justify-between items-center p-10">
        <div className="brand-logo">
          <Link href="/">
            <img src="/logo-light.svg" alt="Logo" />
          </Link>
        </div>
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          aria-label="Toggle menu"
        >
          X
        </button>
      </header>

      <section className="fullpage-menu">
        <nav>
          <ul className="main-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/work">Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="placeholder-title">
        <h1>
          Fullpage Navigation Menu with <span>GSAP</span>
        </h1>
      </section>
    </>
  );
};

export default MenuDrawer;
