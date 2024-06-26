"use client";

import { Button } from "@/components/ui/button";
import { HiOutlineUpload } from "react-icons/hi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tooltip } from "@radix-ui/react-tooltip";
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";
import { useToast } from "./ui/use-toast";

const CreateDocumentButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="site" size="site">
          <div className="flex items-center gap-2 justify-center text-md md:text-lg">
            <HiOutlineUpload className="" />
            <p className="">Upload Doc</p>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Your New Document</DialogTitle>
          <DialogDescription>
            Upload a team document for you to search over in the future.
          </DialogDescription>
        </DialogHeader>
        <UploadDocumentForm
          onUpload={() => {
            setIsOpen(false);

            toast({
              title: "Document Uploaded",
              description: "Your document has been uploaded.",
            });
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateDocumentButton;
