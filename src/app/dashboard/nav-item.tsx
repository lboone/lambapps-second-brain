import Link from "next/link";
import React from "react";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}
const NavItem = ({ children, href, setOpen }: NavItemProps) => {
  return (
    <li
      className="border px-6 py-3 w-full rounded-full"
      onClick={setOpen ? () => setOpen(false) : undefined}
    >
      <Link
        className="text-lg hover:text-slate-500 dark:hover:text-slate-400 flex items-center gap-2 "
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
