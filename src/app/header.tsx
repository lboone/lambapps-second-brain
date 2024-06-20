"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
          <Unauthenticated>
            <div className="rounded-full px-6 py-1 text-slate-100 dark:text-slate-600 bg-slate-600 dark:bg-slate-100  ">
              <SignInButton />
            </div>
          </Unauthenticated>
          <Authenticated>
            <div className="flex items-center justify-between gap-4">
              <ModeToggle />
              <UserButton />
            </div>
          </Authenticated>
        </div>
      </div>
    </header>
  );
};

export default Header;
