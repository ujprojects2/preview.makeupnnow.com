"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Categories", href: "/artists" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-onyx-deep/80 backdrop-blur-md shadow-sm shadow-primary/10">
      <div className="flex items-center justify-between px-container-margin-mobile md:px-container-margin-desktop h-16">
        <Link href="/" className="flex items-center gap-2 active:scale-95 transition-transform cursor-pointer">
          <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight font-bold">
            Makeupnnow
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-label-md text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/register"
            className="bg-primary text-white px-6 py-2 rounded-full font-label-md uppercase tracking-widest active:scale-95 transition-all shadow-sm hover:opacity-90"
          >
            Login / Register
          </Link>
          <button aria-label="Search" className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-opacity">
            search
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden material-symbols-outlined text-on-surface-variant"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-outline-variant/30 px-container-margin-mobile py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-label-md text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="bg-primary text-white px-6 py-2 rounded-full font-label-md uppercase tracking-widest text-center"
          >
            Login / Register
          </Link>
        </div>
      )}
    </header>
  );
}
