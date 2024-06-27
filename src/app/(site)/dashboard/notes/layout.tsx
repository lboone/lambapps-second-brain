"use client";
import { api } from "../../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import NotesNavPanel from "./nav-panel";
import PageTitle from "@/components/page-title";
import CreateNoteButton from "@/components/create-note-button";
import NothingFound from "@/components/nothing-found";
export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const notes = useQuery(api.notes.getNotes);
  return (
    <>
      <PageTitle>
        Notes <CreateNoteButton />
      </PageTitle>

      {notes && notes.length === 0 ? (
        <NothingFound message="You have no notes yet.">
          <CreateNoteButton />
        </NothingFound>
      ) : (
        <div className="flex flex-col md:flex-row gap-2">
          <div className="w-[100%] md:w-[30%] flex md:pr-10  md:border-r md:border-slate-200 md:mr-5 md:h-[93vh] pt-10 md:pt-20 pb-5 md:pb-10">
            <NotesNavPanel notes={notes} />
          </div>
          <div className="w-[100%] h-[70vh] mt-10 mb-10 bg-slate-200/50 dark:bg-slate-950 p-10 rounded-3xl">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
