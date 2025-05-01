import React, { useEffect, useState } from "react";
import { CreateWebWorkerMLCEngine } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/+esm";

const SELECTED_MODEL = "Llama-3-8B-Instruct-q4f32_1-MLC-1k";

export function useChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [infoText, setInfoText] = useState("");
  const [engine, setEngine] = useState(null);
  const [isThinking, setIsThinking] = useState(false); // NUEVO: evita múltiples envíos

  useEffect(() => {
    if (engine) return; // Previene reinicialización

    async function initEngine() {
      try {
        const worker = new Worker("/worker.js", { type: "module" });
        const newEngine = await CreateWebWorkerMLCEngine(worker, SELECTED_MODEL, {
          initProgressCallback: (info) => {
            setInfoText(info.text);
            if (info.progress === 1) {
              setIsLoading(false);
              addBotMessage("¡Hola! Soy bot, una IA que se ejecuta completamente en tu navegador. ¿En qué puedo ayudarte hoy?");
            }
          }
        });
        setEngine(newEngine);
      } catch (err) {
        console.error("Error al inicializar el motor:", err);
        setInfoText("Error al cargar el modelo.");
      }
    }

    initEngine();
  }, [engine]);

  const addUserMessage = (content) => {
    setMessages(prev => [...prev, { role: "user", content }]);
  };

  const addBotMessage = (content) => {
    setMessages(prev => [...prev, { role: "assistant", content }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || !engine || isThinking) return;

    const messageText = inputValue.trim();
    setInputValue("");
    addUserMessage(messageText);
    setIsThinking(true); // Marcar que está pensando

    try {
      const currentMessages = [...messages, { role: "user", content: messageText }];
      const chunks = await engine.chat.completions.create({ messages: currentMessages, stream: true });

      let reply = "";
      addBotMessage(""); // Mensaje vacío como placeholder

      for await (const chunk of chunks) {
        const choice = chunk.choices[0];
        const content = choice?.delta?.content ?? "";
        reply += content;

        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: "assistant", content: reply };
          return newMessages;
        });
      }
    } catch (err) {
      console.error("Error al generar respuesta:", err);
      addBotMessage("❌ Hubo un error generando la respuesta.");
    } finally {
      setIsThinking(false); // Finaliza el estado de espera
    }
  };

  return {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    infoText,
    handleSubmit
  };
}
