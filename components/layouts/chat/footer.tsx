import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col flex-grow-0 flex-shrink-0 h-32 justify-end items-center space-y-2 pb-8">
      <div
        className="flex space-x-2 items-end w-3/5
      "
      >
        <Textarea
          className="resize-none h-full"
          minRows={1}
          maxRows={4}
          placeholder="Send a message here"
        />
        <Button className="pl-[10px] pr-3">
          <Send />
        </Button>
      </div>
      <p className="text-gray-400 text-sm">
        Text-To-SQL Query Generation and Data Visualization using Large Language
        Model
      </p>
    </div>
  );
};

export default Footer;
