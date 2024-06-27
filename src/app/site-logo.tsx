import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SiteLogo = () => {
  return (
    <>
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
    </>
  );
};

export default SiteLogo;
