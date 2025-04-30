import React from "react";
import { useEffect, useState } from "react";
import { CreateWebWorkerMLCEngine } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/+esm";

const SELECTED_MODEL = "Llama-3-8B-Instruct-q4f32_1-MLC-1k";

export function useChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [infoText, setInfoText] = useState("");
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return; 
  
    async function initEngine() {
      const worker = new Worker("/worker.js", { type: "module" });
      const newEngine = await CreateWebWorkerMLCEngine(worker, SELECTED_MODEL, {
        initProgressCallback: (info) => {
          setInfoText(info.text);
          if (info.progress === 1) {
            setIsLoading(false);
          }
        }
      });
      setEngine(newEngine);
    }
  
    initEngine();
  }, []);
  

  const addUserMessage = (content) => {
    setMessages((prev) => [...prev, { role: "user", content }]);
  };

  const addBotMessage = (content) => {
    setMessages((prev) => [...prev, { role: "assistant", content }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const messageText = inputValue.trim();
    setInputValue("");
    addUserMessage(messageText);

    if (!engine) return;

    const currentMessages = [
      ...messages,
      { role: "user", content: messageText },
    ];
    const chunks = await engine.chat.completions.create({
      messages: currentMessages,
      stream: true,
    });

    let reply = "";
    addBotMessage("");
    for await (const chunk of chunks) {
      const choice = chunk.choices[0];
      const content = choice?.delta?.content ?? "";
      reply += content;
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: "assistant",
          content: reply,
        };
        return newMessages;
      });
    }
  };

  return {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    infoText,
    handleSubmit,
  };
}
