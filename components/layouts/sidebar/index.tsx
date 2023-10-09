import Image from "next/image";
import React from "react";
import NavCollapsible from "./nav-collapsible";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ChatHistory from "./chat-history";
import Header from "./header";

const SideBar = () => {
  return (
    <aside className="flex flex-col justify-start items-center py-10 px-8 w-80 space-y-12">
      <Header />
      <div className="space-y-4 w-full">
        <NavCollapsible />
        <Separator />
        <ChatHistory />
      </div>
    </aside>
  );
};

export default SideBar;
