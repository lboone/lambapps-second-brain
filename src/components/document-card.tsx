"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doc } from "../../convex/_generated/dataModel";
import { Button } from "./ui/button";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

interface DocumentCardProps {
  document: Doc<"documents">;
}
const DocumentCard = ({ document }: DocumentCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <p></p>
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
