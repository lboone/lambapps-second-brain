import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import { askQuestion } from "../../convex/documents";
import { Id } from "../../convex/_generated/dataModel";

interface ChatPannelProps {
  documentId: Id<"documents">;
}
const ChatPannel = ({ documentId }: ChatPannelProps) => {
  const askQuestion = useAction(api.documents.askQuestion);

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={90} maxSize={90} minSize={90}>
        <div className="overflow-y-auto h-[99%] text-white">
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
          <div className="p-4 bg-gray-800">Hello</div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={10} maxSize={10} minSize={10}>
        <div>
          <form
            className="flex gap-2 p-2"
            onSubmit={async (event) => {
              event.preventDefault();
              const form = event.target as HTMLFormElement;
              const formData = new FormData(form);
              const question = formData.get("text") as string;

              await askQuestion({ question, documentId }).then(console.log);
            }}
          >
            <Input
              required
              name="text"
              type="text"
              placeholder="Type your message"
            />
            <Button variant="site" size="site" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChatPannel;
