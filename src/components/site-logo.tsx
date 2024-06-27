import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string | "";
}
const SiteLogo = ({ className }: SiteLogoProps = {}) => {
  return (
    <>
      <Image
        src="/sheep.png"
        width={40}
        height={40}
        alt="Second Brain Logo"
        className={cn(
          "w-10 h-10 p-1 rounded-full bg-[#f5f5f5]  dark:bg-white",
          className
        )}
      />
    </>
  );
};

export default SiteLogo;
