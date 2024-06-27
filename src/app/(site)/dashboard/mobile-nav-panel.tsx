"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import Header from "@/app/header";
import NavPanel from "./nav-panel";
import PageTitle from "@/app/page-title";
import SiteLogo from "@/app/site-logo";
import { useState } from "react";

const MobileNavPanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="block md:hidden">
        <RxHamburgerMenu className="cursor-pointer w-6 h-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <PageTitle>
              <SiteLogo />
              second.brain
              <div></div>
            </PageTitle>
          </SheetTitle>
          <SheetDescription className="pt-10">
            <NavPanel setOpen={setOpen} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavPanel;
