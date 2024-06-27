"use client";
import CreateNoteButton from "@/components/create-note-button";
import NothingFound from "@/components/nothing-found";
import PageTitle from "@/components/page-title";
import { useQuery } from "convex/react";
import React from "react";
import { api } from "../../../../../convex/_generated/api";
import Link from "next/link";

const Notes = () => {
  const notes = useQuery(api.notes.getNotes);

  return (
    <main className="flex flex-col gap-8 ">
      <div>Click the note to view it.</div>
    </main>
  );
};

export default Notes;
