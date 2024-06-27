"use client";
import { Id } from "../../../../../convex/_generated/dataModel";
import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NotesNavPanel = ({ notes }: { notes: any[] | undefined | null }) => {
  const { noteId } = useParams<{ noteId: Id<"notes"> }>();

  return (
    <ul className="flex flex-col gap-4 text-lg">
      {notes?.map((note) => (
        <li
          key={note._id}
          className={cn("hover:text-amber-800 dark:hover:text-amber-800", {
            "text-amber-800 dark:text-amber-800": note._id === noteId,
          })}
        >
          <Link
            href={`/dashboard/notes/${note._id}`}
          >{`${note.text.substring(0, 20)}...`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesNavPanel;
