"use client";
import { api } from "../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "../../../../convex/_generated/dataModel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ChatPannel from "@/components/chat-pannel";
import { GiArtificialHive } from "react-icons/gi";
import { GrDocumentPdf } from "react-icons/gr";
import DocumentSkeleton from "@/components/document-skeleton";

const DocumentPage = ({
  params,
}: {
  params: { documentId: Id<"documents"> };
}) => {
  const document = useQuery(api.documents.getDocument, {
    documentId: params.documentId,
  });

  return (
    <>
      {!document && <DocumentSkeleton />}
      {document && (
        <main className="p-10 space-y-8">
          <div className="flex flex-col justify-between items-center gap-8">
            <h1 className="text-4xl font-bold">{document.title}</h1>
          </div>
          <Tabs defaultValue="document">
            <TabsList>
              <TabsTrigger value="document">
                <>
                  <div className="hidden sm:flex gap-2 items-center">
                    <GrDocumentPdf className="size-4" />
                    Your Document
                  </div>
                  <div className="flex gap-2 items-center sm:hidden">
                    <GrDocumentPdf className="size-4" />
                    Document
                  </div>
                </>
              </TabsTrigger>
              <TabsTrigger value="chat">
                <>
                  <div className="hidden sm:flex gap-2 items-center">
                    <GiArtificialHive className="size-4" /> Chat With Your
                    Document
                  </div>
                  <div className="flex gap-2 items-center sm:hidden">
                    <GiArtificialHive className="size-4" /> Chat
                  </div>
                </>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="document" className="border rounded-lg p-2">
              {document.documentUrl && (
                <iframe
                  src={document.documentUrl}
                  className="w-full h-[550px] rounded-lg"
                ></iframe>
              )}
            </TabsContent>
            <TabsContent
              value="chat"
              className="border rounded-lg p-2 h-[550px]"
            >
              <ChatPannel documentId={params.documentId}></ChatPannel>
            </TabsContent>
          </Tabs>
        </main>
      )}
    </>
  );
};

export default DocumentPage;
