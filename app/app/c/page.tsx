"use client";

import Message from "@/components/layouts/chat/message";
import { AnimatePresence, motion } from "framer-motion";
import { cubicBezier } from "framer-motion";
import { useEffect, useState } from "react";

export default function Chat() {
  const [cnt, setCnt] = useState(10);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCnt((cnt) => cnt + 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // });
  return (
    <div className="w-full">
      <AnimatePresence initial={false}>
        {Array.from({ length: cnt }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ ease: cubicBezier(0.35, 0.17, 0.3, 0.86) }}
          >
            <Message
              sender={i % 2 === 0 ? "USER" : "AGENT"}
              message={`Hello ${i + 1}`}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
