import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-grow-0 flex-shrink-0 h-32 justify-center items-center">
      <div className="w-3/5">
        <Textarea className="resize-none" />
      </div>
    </div>
  );
};

export default Footer;
