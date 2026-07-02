"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ITEMS = [
  { label: "Explore", href: "/", icon: "auto_awesome" },
  { label: "Artists", href: "/artists", icon: "groups" },
  { label: "Services", href: "/services", icon: "design_services" },
  { label: "Register", href: "/register", icon: "person" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface/80 dark:bg-onyx-deep/80 backdrop-blur-md h-16 px-4 flex justify-around items-center shadow-[0_-4px_20px_rgba(134,78,93,0.05)]">
      {ITEMS.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center active:scale-90 transition-transform ${
              active ? "text-primary font-bold" : "text-on-surface-variant/70"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={active ? { fontVariationSettings: '"FILL" 1' } : undefined}
            >
              {item.icon}
            </span>
            <span className="font-label-sm uppercase tracking-widest text-[10px] mt-1">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
