import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";

import HeaderActions from "./header-actions";
import MobileNavPanel from "./dashboard/mobile-nav-panel";
import SiteLogo from "./site-logo";

const Header = () => {
  return (
    <header className="py-3 border-b border-[#ededf1] dark:border-slate-700 bg-[#f5f5f5] dark:bg-[#090a0b]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between gap-12">
          <Link href="/" className="flex items-center gap-2 justify-between">
            <SiteLogo />
            <h1 className="text-2xl font-bold text-slate-600 dark:text-slate-100 hidden md:block">
              second.brain
            </h1>
          </Link>
          <nav>
            <Link
              href="/dashboard"
              className="
              px-4 
              py-2 
              rounded-full 
              border 
              hover:bg-slate-100 
              border-[#f5f5f5] 
              hover:border-slate-300
              dark:hover:bg-slate-800 
              dark:border-[#090a0b]
              dark:hover:border-slate-800"
            >
              Dashboard
            </Link>
          </nav>
        </div>
        <div className="">
          <MobileNavPanel />
          <div className="hidden md:flex items-center gap-2 justify-between">
            <ModeToggle />
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
