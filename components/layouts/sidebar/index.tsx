import React from "react";
import NavCollapsible from "./nav-collapsible";
import { Separator } from "@/components/ui/separator";
import ChatHistory from "./chat-history";
import Header from "./header";
import Profile from "./profile";
import { getUser } from "@/services/user.service";

const SideBar = async () => {
  const session = await getUser();
  return (
    <aside className="flex flex-col justify-between items-center py-10 px-8 w-80">
      <div className="space-y-12">
        <Header />
        <div className="space-y-4 w-full">
          <NavCollapsible />
          <Separator />
          <ChatHistory />
        </div>
      </div>
      <Profile image={session.user?.image} name={session.user?.name} />
    </aside>
  );
};

export default SideBar;
