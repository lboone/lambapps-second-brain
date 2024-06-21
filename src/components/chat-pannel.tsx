import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useAction, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { askQuestion } from "../../convex/documents";
import { Id } from "../../convex/_generated/dataModel";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatPannelContent from "./chat-pannel-content";
import LoadingButton from "./loading-button";

interface ChatPannelProps {
  documentId: Id<"documents">;
}
const ChatPannel = ({ documentId }: ChatPannelProps) => {
  const [loading, setLoading] = useState(false);
  const chats = useQuery(api.chats.getChatsForDocument, { documentId });
  const askQuestion = useAction(api.documents.askQuestion);
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
          <form
            className="flex gap-2 p-2"
            onSubmit={async (event) => {
              event.preventDefault();
              setLoading(true);
              const form = event.target as HTMLFormElement;
              const formData = new FormData(form);
              const question = formData.get("text") as string;

              await askQuestion({ question, documentId }).then(console.log);
              form.reset();
              setLoading(false);
            }}
          >
            <Input
              required
              name="text"
              type="text"
              placeholder="Type your message"
            />
            <LoadingButton
              isLoading={loading}
              variant="site"
              size="site"
              type="submit"
              loadingText=""
            >
              Submit
            </LoadingButton>
          </form>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChatPannel;
