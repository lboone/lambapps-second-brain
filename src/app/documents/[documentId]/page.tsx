"use client";
import { api } from "../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "../../../../convex/_generated/dataModel";
import { Divide } from "lucide-react";

const DocumentPage = ({
  params,
}: {
  params: { documentId: Id<"documents"> };
}) => {
  const document = useQuery(api.documents.getDocument, {
    documentId: params.documentId,
  });

  if (!document) {
    return <div>You dohn't have acces to the document!</div>;
  }
  return (
    <main className="p-24 space-y-8">
      <div className="flex flex-col justify-between items-center gap-8">
        <h1 className="text-4xl font-bold">{document.title}</h1>
      </div>
      <div className="flex gap-12">
        <div className="bg-gray-900 p-4 rounded h-[600px] flex-1">
          {document.documentUrl && (
            <iframe
              src={document.documentUrl}
              className="w-full h-full"
            ></iframe>
          )}
        </div>
        <div className="w-[300px] bg-gray-900"></div>
      </div>
    </main>
  );
};

export default DocumentPage;
