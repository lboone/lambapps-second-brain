"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function Home() {
  const createDocumen = useMutation(api.documents.createDocument);
  const documents = useQuery(api.documents.getDocuments);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button onClick={() => createDocumen({ title: "hello world" })}>
          Click Me
        </Button>
      </div>
      <div>{documents?.map((doc) => <div key={doc._id}>{doc.title}</div>)}</div>
    </main>
  );
}
