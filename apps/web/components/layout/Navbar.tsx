"use client";

import { usePathname } from "next/navigation";
import { getCurrentPage } from "@/lib/get-current-page";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

export default function Navbar() {
  const pathname = usePathname();
  const page = getCurrentPage(pathname);

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/90 px-8 backdrop-blur">
      <div>
        <h1 className="text-2xl font-bold text-white">{page.title}</h1>

        <p className="text-sm text-slate-400">{page.subtitle}</p>
      </div>

      <div className="flex items-center gap-6">
        <SearchBar />
        <UserMenu />
      </div>
    </header>
  );
}
