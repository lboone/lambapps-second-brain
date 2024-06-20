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
        <Button variant="outline" size="site" className="w-full">
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
