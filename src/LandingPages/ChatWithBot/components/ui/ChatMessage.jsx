import React from "react";

export function ChatMessage({ role, content }) {
  const isBot = role === "assistant";

  return (
    <li className={`message ${isBot ? "bot" : "user"}`}>
      <span>{isBot ? "GPT" : "Tú"}</span>
      <p>{content}</p>
    </li>
  );
}
