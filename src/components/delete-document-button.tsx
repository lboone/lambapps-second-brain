"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Id } from "../../convex/_generated/dataModel";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { use, useEffect, useRef, useState } from "react";
import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";
import LoadingButton from "./loading-button";
import { error } from "console";
import { cn } from "@/lib/utils";

interface DeleteDocumentButtonProps {
  documentId: Id<"documents">;
  documentTitle: string;
}
const DeleteDocumentButton = ({
  documentId,
  documentTitle,
}: DeleteDocumentButtonProps) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [open, setOpen] = useState(false);
  const deleteDocument = useMutation(api.documents.deleteDocument);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  const handleDelete = async () => {
    if (title === documentTitle) {
      setErrorMessage("");
      setLoading(true);
      await deleteDocument({ documentId }).finally(() => {
        setLoading(false);
        setOpen(false);
        setTitle("");
        window.location.href = "/";
      });
      return;
    }

    inputRef.current?.focus();
    setErrorMessage("Title does not match. Please try again.");
  };

  const handleCancel = () => {
    setOpen(false);
    setTitle("");
    setErrorMessage("");
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <Button
          variant="site"
          size="site"
          className="bg-red-700 flex items-center gap-2"
        >
          <Trash className="size-5" /> Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this document?
          </AlertDialogTitle>
          <AlertDialogDescription>
            <>
              <p className="text-lg mb-2">This action cannot be undone!</p>
              <p>
                Please type the title exactly as shown below to confirm your
                deletion:
                <span className="block mt-2 text-sm text-red-700 font-semibold">
                  {documentTitle}
                </span>
              </p>
              <input
                className={cn(
                  "w-full border rounded-none h-10 p-2 mt-2 focus:outline-none",
                  errorMessage && "focus:outline-1 border-red-700"
                )}
                ref={inputRef}
                id="delete_title"
                type="text"
                value={title}
                placeholder="Type above title here to confirm."
                onChange={(e) => setTitle(e.target.value)}
              />
              {errorMessage && (
                <p className="text-red-700 text-sm mt-2">{errorMessage}</p>
              )}
            </>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-full" onClick={handleCancel}>
            Cancel
          </AlertDialogCancel>
          <LoadingButton
            isLoading={loading}
            loadingText="Deleting..."
            buttonClass="bg-red-700"
            onClick={handleDelete}
          >
            <>Delete</>
          </LoadingButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDocumentButton;
