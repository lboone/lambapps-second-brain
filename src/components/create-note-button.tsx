"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { useToast } from "./ui/use-toast";

import CreateNoteForm from "@/components/create-note-form";
import { PlusIcon } from "lucide-react";

const CreateNoteButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="site" size="site">
          <div className="flex items-center gap-2 justify-center text-md md:text-lg">
            <PlusIcon className="" />
            <p className="">Create Note</p>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a New Note</DialogTitle>
          <DialogDescription>
            Type whatever note you want to be searchable later on.
          </DialogDescription>
        </DialogHeader>
        <CreateNoteForm
          onCreate={() => {
            setIsOpen(false);
            toast({
              title: "Note Created",
              description: "Your note has been created.",
            });
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteButton;
