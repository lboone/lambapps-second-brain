"use client";
import { GrDocumentPdf } from "react-icons/gr";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GrDocumentNotes } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import HeaderActions from "@/app/header-actions";
import { ModeToggle } from "@/components/ui/mode-toggle";
import NavItem from "./nav-item";
import { usePathname } from "next/navigation";
import path from "path";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    name: "Documents",
    href: "/dashboard/documents",
    icon: <GrDocumentPdf />,
  },
  {
    name: "Notes",
    href: "/dashboard/notes",
    icon: <GrDocumentNotes />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <IoSettingsOutline />,
  },
];

interface NavPanelProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}
const NavPanel = ({ setOpen }: NavPanelProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4 items-center justify-between h-[80vh] md:h-[85vh]">
      <ul className="flex flex-col gap-8 items-start">
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            href={item.href}
            setOpen={setOpen}
            className={
              pathname === item.href ? "text-amber-800 dark:text-amber-800" : ""
            }
          >
            {item.icon}
            {item.name}
          </NavItem>
        ))}
      </ul>
      <ul className="flex flex-row gap-2 items-center border-t border-slate-200  w-full py-5 justify-between">
        <li>
          <ModeToggle />
        </li>
        <li>
          <HeaderActions />
        </li>
      </ul>
    </nav>
  );
};

export default NavPanel;
