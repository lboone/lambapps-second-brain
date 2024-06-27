import Link from "next/link";
import React from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const LandingPage = () => {
  return (
    <main className="">
      Landing Page
      <Link
        href="/dashboard"
        className="
              px-4 
              py-2 
              rounded-full 
              border 
            border-slate-300
              hover:text-amber-800
              hover:dark:text-amber-900
              dark:hover:border-slate-800
              flex items-center gap-2 w-[25%]"
      >
        <MdOutlineSpaceDashboard /> Dashboard
      </Link>
    </main>
  );
};

export default LandingPage;
