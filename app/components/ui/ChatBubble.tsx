"use client";

export default function ChatBubble({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="fixed bottom-5 right-5">
      <img
        src="/chatbubble.gif"
        alt="Chat Bubble"
        className="w-14 h-14 rounded-full shadow-lg cursor-pointer"
      />
    </button>
  );
}
