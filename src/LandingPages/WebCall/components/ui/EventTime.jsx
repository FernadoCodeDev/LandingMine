import { useEffect, useState } from "react";

const months = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
  "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

export default function EventTime() {
  const [date, setdate] = useState({ day1: 0, day2: 0, month: "" });
  const [remainingTime, setremainingTime] = useState({ hours: 0, minutos: 0 });

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const past = new Date(today);
    past.setDate(today.getDate() + 3);

    setdate({
      day1: tomorrow.getDate(),
      day2: past.getDate(),
      month: months[tomorrow.getMonth()]
    });
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const endOfTheDay = new Date();
      endOfTheDay.setHours(23, 59, 59, 999); 

      const difference = endOfTheDay - now;

      const hours = Math.floor(difference / 1000 / 60 / 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);

      setremainingTime({ hours, minutes });
    };

    updateTime(); 
    const interval = setInterval(updateTime, 60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-1">
      <div className="flex flex-col items-center justify-center col-span-2 p-2 bg-purple-400 md:col-span-1">
        <p className="text-center font-fantasy md:text-3xl">
          {date.day1} - {date.day2} DE {date.month} DE 2025
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-2 border border-amber-50">
        <p className="font-fantasy md:text-3xl">01</p>
        <span className="font-mono md:text-3xl">DÍA</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 border border-amber-50">
        <p className="font-fantasy md:text-3xl">{String(remainingTime.hours).padStart(2, "0")}</p>
        <span className="font-mono md:text-3xl">Hora/s</span>
      </div>
      <div className="flex flex-col items-center justify-center col-span-2 p-2 border md:col-span-1 border-amber-50">
        <p className="font-fantasy md:text-3xl">{String(remainingTime.minutes).padStart(2, "0")}</p>
        <span className="font-mono md:text-3xl">MINUTOS</span>
      </div>
    </div>
  );
}
