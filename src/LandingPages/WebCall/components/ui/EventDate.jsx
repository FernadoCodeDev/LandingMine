import { useEffect, useState } from "react";

const months = [
  "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
  "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
];

export default function EventTime() {
  const [date, setdate] = useState({ day1: 0, day2: 0, day3: 0, month: "" });

  useEffect(() => {
    const today = new Date();
    const FirstDay = new Date(today);
    FirstDay.setDate(today.getDate() + 1);
    const secondDay = new Date(today);
    secondDay.setDate(today.getDate() + 2);
    const ThirdDay = new Date(today);
    ThirdDay.setDate(today.getDate() + 3);

    setdate({
      day1: FirstDay.getDate(),
      day2: secondDay.getDate(),
      day3: ThirdDay.getDate(),
      month: months[FirstDay.getMonth()]
    });
  }, []);


  return (
    <div className="m-auto max-w-[100rem] grid grid-cols-1 md:grid-cols-3">
        <div className="grid grid-cols-3 md:col-start-3 justify-self-end">
          <div className="flex flex-col p-2 bg-amber-50">
            <h1 className="text-purple-300 font-fantasy md:text-3xl">DÍA 01</h1>
            <p className="text-purple-300 ">{date.day1} DE {date.month}</p>
          </div>

          <div className="flex flex-col p-2 border border-amber-50">
            <h1 className="text-amber-50 font-fantasy md:text-3xl">DÍA 02</h1>
            <p className="text-amber-50 ">{date.day2} DE {date.month}</p>
          </div>

          <div className="flex flex-col p-2 border border-amber-50">
            <h1 className="text-amber-50 font-fantasy md:text-3xl">DÍA 03</h1>
            <p className="text-amber-50 ">{date.day3} DE {date.month}</p>
          </div>
        </div>
      </div>
  );
}
