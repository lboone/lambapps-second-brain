import { cn } from "@/lib/utils";
import React from "react";

interface ChatPannelContentProps {
  isHuman?: boolean;
  children: React.ReactNode;
}
const ChatPannelContent = ({
  isHuman = false,
  children,
}: ChatPannelContentProps) => {
  return (
    <div
      className={cn("border p-4 rounded-lg bg-slate-800 whitespace-pre-wrap", {
        "bg-slate-700 text-right": isHuman,
      })}
    >
      {children}
    </div>
  );
};

export default ChatPannelContent;
