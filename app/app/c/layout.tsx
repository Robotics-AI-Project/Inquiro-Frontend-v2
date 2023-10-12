import Footer from "@/components/layouts/chat/footer";
import Header from "@/components/layouts/chat/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Chat",
  description: "New Chat for Inquiro",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full w-full">
      <Header />
      <div className="flex flex-auto">{children}</div>
      <Footer />
    </div>
  );
}
