import React from "react";
import { useChatBot } from "../hook/useChatBot";
import { ChatList } from "../ui/ChatList";
import Icons from "../ui/icons";
import Arrow from "../../assets/svg/Arrow";

function FirstSection() {
  const {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    infoText,
    handleSubmit,
  } = useChatBot();

  return (
    <div className="flex flex-col min-h-screen p-4 text-black bg-white dark:text-white dark:bg-neutral-900">
      <div className="max-w-[80rem] mx-auto">
        {isLoading ? (
          <div className="text-center loading">
            <i className="block mb-2 animate-spin">⏳</i>
            <h4>Cargando...</h4>
            <h5>{infoText || "Esto puede tardar un poco. Paciencia."}</h5>
          </div>
        ) : (
          <ChatList messages={messages} />
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className=" w-full max-w-[80rem] mx-auto flex gap-2 mt-4"
      >
        <input
          className="flex-1 p-2 border rounded"
          placeholder="Escribe tu mensaje aquí..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="p-2 text-white rounded bg-emerald-800"
          disabled={isLoading}
        >
          Enviar
        </button>
      </form>

      <small className="block mt-2 text-center text-gray-400">{infoText}</small>
    </div>
  );
}

export default FirstSection;
