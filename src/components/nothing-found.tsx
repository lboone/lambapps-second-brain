import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NothingFoundProps {
  className?: string | "";
  children: React.ReactNode;
  message: string;
}
const NothingFound = ({ className, children, message }: NothingFoundProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12 pt-12">
        <Image
          src="/no_documents_found.svg"
          alt="No Documents Found"
          width={200}
          height={200}
          className={cn("size-[200px] md:size-[400px]", className)}
        />
        <h2 className="text-2xl">{message}</h2>
        {children}
      </div>
    </>
  );
};

export default NothingFound;
