import React from "react";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const DocumentCardSkeleton = () => {
  return (
    <Card className="p-4 flex flex-col justify-between gap-4">
      <Skeleton className="h-[125px] rounded-xl" />
      <div className="flex flex-col gap-4">
        <Skeleton className="h-4" />
        <Skeleton className="h-10 w-[100px]" />
      </div>
    </Card>
  );
};

export default DocumentCardSkeleton;
