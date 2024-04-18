// react
import * as React from "react";
// date-fns
import { getMonth, format } from "date-fns";
// icons
import ArrowLeft from "../assets/arrow-left.svg?react";
import ArrowRight from "../assets/arrow-right.svg?react";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Calendar = () => {
  const [month, setMonth] = React.useState(getMonth(new Date()));
  const [year, setYear] = React.useState(format(new Date(), "yyyy"));

  const onPrevMonth = () => {
    const _month = month - 1;
    if (_month < 0) {
      setMonth(11);
      setYear((prev) => String(Number(prev) - 1));
    } else {
      setMonth(_month);
    }
  };

  const onNextMonth = () => {
    const _month = month + 1;
    if (_month > 11) {
      setMonth(0);
      setYear((prev) => String(Number(prev) + 1));
    } else {
      setMonth(_month);
    }
  };

  return (
    <article className="bg-white rounded-[20px] pt-[46px] px-[62px] pb-[57px]">
      {/* header */}
      <div className="flex justify-between items-center">
        <h1 className="text-black text-4xl font-bold">
          {MONTH[month]} {year}
        </h1>
        <div className="flex gap-x-8">
          <ArrowLeft className="hover:cursor-pointer" onClick={onPrevMonth} />
          <ArrowRight className="hover:cursor-pointer" onClick={onNextMonth} />
        </div>
      </div>
      {/* days */}
      <div className="mt-14">
        <div className="grid grid-cols-7 gap-x-6 my-6">
          {WEEKDAYS.map((day) => (
            <div key={day} className="text-black text-lg font-bold text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-x-6 gap-y-4 mt-2">
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <div key={day} className="text-black text-[22px] text-center py-2">
              {day}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
