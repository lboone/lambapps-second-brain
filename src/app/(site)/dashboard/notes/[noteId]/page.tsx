"use client";
import { api } from "../../../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "../../../../../../convex/_generated/dataModel";

import ChatPannel from "@/components/chat-pannel";

import DocumentSkeleton from "@/components/document-skeleton";
import DeleteDocumentButton from "@/components/delete-document-button";

const NotePage = ({ params }: { params: { noteId: Id<"notes"> } }) => {
  const note = useQuery(api.notes.getNote, {
    noteId: params.noteId,
  });

  return (
    <>
      {!note && <DocumentSkeleton />}
      {note && (
        <main className="p-10 space-y-8">
          <div className="flex justify-between gap-8">
            <p className="font-bold">{note.text}</p>
            {/* <DeleteDocumentButton noteId={note._id} documentTitle={note.text} /> */}
          </div>
        </main>
      )}
    </>
  );
};

export default NotePage;
