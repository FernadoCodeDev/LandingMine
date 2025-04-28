import React from "react";
import { ChatMessage } from "./ChatMessage";

export function ChatList({ messages }) {
  return (
    <ul>
      {messages.map((msg, index) => (
        <ChatMessage key={index} role={msg.role} content={msg.content} />
      ))}
    </ul>
  );
}
