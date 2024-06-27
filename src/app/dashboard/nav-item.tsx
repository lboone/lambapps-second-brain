import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  className?: string;
}
const NavItem = ({ children, href, setOpen, className }: NavItemProps) => {
  return (
    <li
      className="border px-6 py-3 w-full rounded-full"
      onClick={setOpen ? () => setOpen(false) : undefined}
    >
      <Link
        className={cn(
          "text-lg hover:text-amber-800 dark:hover:text-amber-800 flex items-center gap-2",
          className
        )}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
