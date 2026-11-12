"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return <header><div className="wrap header-inner"><Link className="brand" href="/" aria-label="Boost MP home" onClick={() => setOpen(false)}>boost<span>mp</span><b>↗</b></Link><button className="menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "Close −" : "Menu +"}</button><nav id="nav" aria-label="Main navigation" className={open ? "open" : ""}>{[["Home", "/"], ["About", "/about"], ["Tools", "/tools"], ["Contact", "/contact"]].map(([label, href]) => <Link key={href} href={href} aria-current={path === href ? "page" : undefined} onClick={() => setOpen(false)}>{label}{label === "Contact" ? " ↗" : ""}</Link>)}</nav></div></header>;
}
