import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HeaderActions from "./header-actions";

const Header = () => {
  return (
    <header className="py-3 border-b border-[#ededf1] dark:border-slate-700 bg-[#f5f5f5] dark:bg-[#090a0b]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between gap-12">
          <Link href="/" className="flex items-center gap-2 justify-between">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/sheep.png"
                    width={40}
                    height={40}
                    alt="Second Brain Logo"
                    className="w-10 h-10 p-1 rounded-full bg-[#f5f5f5]  dark:bg-white"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Second Brain</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <h1 className="text-2xl font-bold text-slate-600 dark:text-slate-100 hidden md:block">
              second.brain
            </h1>
          </Link>
          <nav>
            <Link
              href="/"
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
              Documents
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2 justify-between">
          <ModeToggle />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
