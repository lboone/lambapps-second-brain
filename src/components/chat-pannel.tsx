import React, { useEffect } from "react";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

import { Id } from "../../convex/_generated/dataModel";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatPannelContent from "./chat-pannel-content";
import QuestionForm from "./question-form";

interface ChatPannelProps {
  documentId: Id<"documents">;
}
const ChatPannel = ({ documentId }: ChatPannelProps) => {
  const chats = useQuery(api.chats.getChatsForDocument, { documentId });

  const chatContainerRef = React.useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chats?.length]);

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={90} maxSize={90} minSize={90}>
        <ScrollArea className="h-[99%]  border rounded-lg p-2 ">
          <div className="text-white flex flex-col gap-4">
            {chats?.map((chat, index) => (
              <ChatPannelContent key={index} isHuman={chat.isHuman}>
                {chat.text}
              </ChatPannelContent>
            ))}
            <div ref={chatContainerRef} />
          </div>
        </ScrollArea>
      </ResizablePanel>
      <ResizablePanel defaultSize={10} maxSize={10} minSize={10}>
        <div>
          <QuestionForm documentId={documentId} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChatPannel;
