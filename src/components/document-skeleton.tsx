import React from "react";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const DocumentSkeleton = () => {
  return (
    <div className="p-4 flex flex-col gap-12 mt-10">
      <div className="flex">
        <Skeleton className="h-12 w-[50%] rounded-xl" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-1">
          <Skeleton className="h-10 w-[150px]" />
          <Skeleton className="h-10 w-[150px]" />
        </div>
        <Skeleton className="h-[500px] rounded-xl" />
      </div>
    </div>
  );
};

export default DocumentSkeleton;
