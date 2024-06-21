"use client";
import { api } from "../../../../convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "../../../../convex/_generated/dataModel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ChatPannel from "@/components/chat-pannel";

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
    <main className="p-10 space-y-8">
      <div className="flex flex-col justify-between items-center gap-8">
        <h1 className="text-4xl font-bold">{document.title}</h1>
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className="p-2 border rounded-lg"
      >
        <ResizablePanel
          defaultSize={75}
          maxSize={75}
          minSize={75}
          className="h-[650px]"
        >
          {document.documentUrl && (
            <iframe
              src={document.documentUrl}
              className="w-full h-full"
            ></iframe>
          )}
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="h-[650px]">
          <ChatPannel documentId={params.documentId}></ChatPannel>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};

export default DocumentPage;
