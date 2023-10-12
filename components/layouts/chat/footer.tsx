import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-grow-0 flex-shrink-0 h-32 justify-center items-center">
      <div className="flex space-x-2 items-center w-3/5">
        <Textarea
          className="resize-none h-full"
          minRows={1}
          maxRows={4}
          placeholder="Send a message here"
        />
        <Button className="h-full px-3">
          <Send />
        </Button>
      </div>
    </div>
  );
};

export default Footer;
