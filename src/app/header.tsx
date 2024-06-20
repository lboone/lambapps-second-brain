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
    <header className="py-3 border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 justify-between">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src="/sheep.png"
                  width={40}
                  height={40}
                  alt="Second Brain Logo"
                  className="w-10 h-10 p-1 rounded-full bg-white"
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

        <div className="flex items-center gap-2 justify-between">
          <ModeToggle />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
