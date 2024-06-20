"use client";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import DocumentCard from "@/components/document-card";
import CreateDocumentButton from "@/components/create-document-button";
export default function Home() {
  const documents = useQuery(api.documents.getDocuments);
  return (
    <main className="py-24  flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold ">Documents</h1>
        <CreateDocumentButton />
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-4 ">
        {documents?.map((doc) => <DocumentCard key={doc._id} document={doc} />)}
      </div>
    </main>
  );
}
