import Message from "@/components/layouts/chat/message";

export default function Home() {
  return (
    <div>
      <Message sender="USER" message="Hello" />
      <Message sender="AGENT" message="Hi" />
    </div>
  );
}
