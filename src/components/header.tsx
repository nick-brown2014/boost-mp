"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo-wordmark-light.png";

const links = [
  ["About", "/about"],
  ["Tools", "/tools"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="site-header"
      data-solid={scrolled || open || path !== "/"}
    >
      <div className="wrap header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="Boost by Mike home"
          onClick={() => setOpen(false)}
        >
          <Image src={logo} alt="Boost mental performance" preload />
        </Link>
        <button
          className="menu"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="nav"
          aria-label="Main navigation"
          className={open ? "open" : ""}
        >
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
