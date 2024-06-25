"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doc } from "../../convex/_generated/dataModel";
import { Button } from "./ui/button";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";

interface DocumentCardProps {
  document: Doc<"documents">;
}
const DocumentCard = ({ document }: DocumentCardProps) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
      </CardHeader>

      <CardContent>
        {!document.description ? (
          <>
            {new Array(4).fill(0).map((_, index) => (
              <Skeleton key={index} className="h-[20px] w-full mb-2" />
            ))}
          </>
        ) : (
          <p>{document.description}</p>
        )}
      </CardContent>
      <CardFooter className="bg-slate-100/25 pt-4 border-t border-slate-200 dark:border-none dark:bg-black/90">
        <Button asChild variant="outline" size="site" className="w-full">
          <Link href={`/documents/${document._id}`}>
            <EyeIcon className="w-4 h-4 mr-2" /> View Document
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
