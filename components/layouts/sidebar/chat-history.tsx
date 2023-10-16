"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MessageSquare, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  title: string;
};

const ChatTab = ({ title }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      <Button
        variant="ghost"
        className={cn(
          "group w-full justify-start px-3 py-5 relative"
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
    </motion.div>
  );
};

const ChatHistory = () => {
  const [chat, setChat] = useState([
    "Q2 Original Selling Plans",
    "Top 5 movies in 2023",
  ]);
  const handleNewChat = () => {
    setChat((prev) => [
      // random loerm generator
      "Q" + String(Math.floor(Math.random() * 100)),
      ...prev,
    ]);
  };
  return (
    <div className="flex flex-col flex-auto w-full space-y-1 justify-start items-center text-white overflow-scroll">
      <Button
        variant="secondary"
        className="w-full justify-start items-center px-4 py-5 mb-1"
        onClick={handleNewChat}
      >
        <div className="flex space-x-3 items-center">
          <Plus size={22} />
          <p className="text-base">New Chat</p>
        </div>
      </Button>

      <AnimatePresence>
        {chat.map((title) => (
          <ChatTab key={title} title={title} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ChatHistory;
