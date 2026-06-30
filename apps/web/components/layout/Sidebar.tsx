"use client";

import { navigation } from "@/constants/navigation";
import SidebarItem from "./SidebarItems";
import { Logo } from "@/components/common/Logo";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r border-slate-800 bg-slate-950 px-6 py-8">
      <Logo />

      <div className="mt-10 flex flex-col gap-2">
        {navigation
          .filter((item) => item.showInSidebar)
          .map((item) => (
            <SidebarItem
              key={item.href}
              title={item.title}
              href={item.href}
              icon={item.icon}
            />
          ))}
      </div>

      <div className="mt-auto rounded-2xl bg-slate-900 p-4">
        <p className="font-semibold text-white">Sathish Raja</p>

        <p className="text-sm text-slate-400">AI Recruiter</p>
      </div>
    </aside>
  );
}
