import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageSquare, Plus } from "lucide-react";
import React from "react";

type Props = {
  title: string;
};

const ChatTab = ({ title }: Props) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "group w-full justify-start px-3 py-5"
        // "bg-secondary/10 border-2 border-secondary/5"
      )}
    >
      <div className="flex space-x-3 items-center">
        <MessageSquare
          size={22}
          className="group-hover:scale-110 transition-all duration-200 ease-out"
        />
        <p className="text-base text-start text-ellipsis overflow-hidden whitespace-nowrap w-44 font-light text-white/80">
          {title}
        </p>
      </div>
    </Button>
  );
};

const ChatHistory = () => {
  return (
    <div className="flex flex-col w-full space-y-1 justify-center items-center text-white">
      <Button
        variant="secondary"
        className="w-full justify-start items-center px-4 py-5 mb-1"
      >
        <div className="flex space-x-3 items-center">
          <Plus size={22} />
          <p className="text-base">New Chat</p>
        </div>
      </Button>

      <ChatTab title="Q2 Original Selling Plans" />
      <ChatTab title="Top 5 movies in 2023" />
    </div>
  );
};

export default ChatHistory;
