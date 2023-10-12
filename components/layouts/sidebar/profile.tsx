"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Loader2, LogOut } from "lucide-react";
import React, { useState } from "react";
import { signOut } from "next-auth/react";

type Props = {
  image?: string | null;
  name?: string | null;
};

const Profile = ({ image, name }: Props) => {
  const [loading, setLoading] = useState(false);
  const handleSignOut = async () => {
    setLoading(true);
    try {
      signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      console.log("sidebar error:", error);
    }
    setLoading(false);
  };
  return (
    <div className="flex w-full justify-between items-center">
      <Avatar>
        <AvatarImage src={image || ""} />
        <AvatarFallback>{name?.[0]}</AvatarFallback>
      </Avatar>
      <Button variant="ghost" className="text-white" onClick={handleSignOut}>
        {loading ? <Loader2 className="animate-spin" /> : <LogOut />}
      </Button>
    </div>
  );
};

export default Profile;