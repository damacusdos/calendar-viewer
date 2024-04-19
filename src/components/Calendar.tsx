// react
import * as React from "react";
// date-fns
import {
  getMonth,
  format,
  getDay,
  getDaysInMonth,
  getDate,
  getYear,
} from "date-fns";
// css
import { cn } from "../lib/util";
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

  const today = getDate(new Date());
  const currentMonth = getMonth(new Date());
  const currentYear = getYear(new Date());

  const displayDays = React.useMemo(() => {
    // total days
    const daysInMonth = getDaysInMonth(new Date(Number(year), month));
    // start day
    const startDayOfMonth = getDay(new Date(Number(year), month, 1));
    // end day
    const endDayOfMonth = getDay(new Date(Number(year), month, daysInMonth));

    // current month
    const days = Array.from({ length: daysInMonth }, (_, i) => ({
      year: Number(year),
      month: month,
      day: i + 1,
    }));

    // prev month
    const prevMonthTotalDays = getDaysInMonth(
      new Date(Number(year), month - 1)
    );
    const prevMonthDays = Array.from(
      { length: startDayOfMonth === 0 ? 6 : startDayOfMonth - 1 },
      (_, i) => ({
        year: Number(year),
        month: month - 1,
        day: prevMonthTotalDays - i,
      })
    ).reverse();
    // next month
    const nextMonthDays = Array.from(
      { length: endDayOfMonth === 0 ? 0 : 7 - endDayOfMonth },
      (_, i) => ({ year: Number(year), month: month + 1, day: i + 1 })
    );

    return [...prevMonthDays, ...days, ...nextMonthDays];
  }, [month, year]);

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
    <article className="bg-white rounded-[20px] pt-[46px] px-[62px] pb-[57px] shadow-lg">
      {/* header */}
      <div className="flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold">
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
            <div key={day} className="text-black text-md font-bold text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-x-4 gap-y-2 mt-2">
          {displayDays.map(({ year: _year, month: _month, day }, i) => (
            <div
              key={i}
              className={cn(
                { "text-black": month === _month },
                { "text-gray-300": month !== _month },
                {
                  "text-white bg-[rgb(116,74,255)] rounded-full":
                    day === today &&
                    _month === currentMonth &&
                    Number(_year) === currentYear,
                },
                "text-md flex justify-center items-center w-12 h-12"
              )}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
