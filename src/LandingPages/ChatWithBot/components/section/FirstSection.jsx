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
      <div className="flex flex-col gap-4 w-full max-w-[80rem] m-auto">
        <div className="flex flex-col gap-4">
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
          className="max-w-[80rem] rounded-2xl grid grid-cols-4 w-full gap-2 p-2 mb-4 border bg-slate-100 dark:bg-neutral-800 border-emerald-800 focus:outline-none focus:ring focus:ring-emerald-800"
        >
          <input
            className="flex-1 col-span-3 p-2 border rounded"
            placeholder="Pregunta lo que quieras"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="p-2 text-white rounded bg-emerald-800"
            disabled={isLoading}
          >
            <Arrow className="w-4 h-auto m-auto" />
          </button>

          <div className="w-full h-auto col-span-4">
            <Icons />
          </div>
        </form>

      </div>
    </div>
  );
}

export default FirstSection;
