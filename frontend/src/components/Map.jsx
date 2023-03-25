import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import ReactTooltip from "react-tooltip";

const Map = () => {
  const randomValues = getRange(366).map((index) => {
    return {
      date: shiftDate(new Date("2024-01-01"), -index),
      count: getRandomInt(0, 4),
    };
  });
  return (
    <div className=" py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">CIPHER MAP</h1>
      </div>
      <div className=" w-full">
        <CalendarHeatmap
          startDate={new Date("2022-12-31")}
          endDate={new Date("2024-01-01")}
          values={randomValues}
          classForValue={(value) => {
            if (!value) {
              return "color-empty";
            }
            return `color-cipher-${value.count}`;
          }}
          tooltipDataAttrs={(value) => {
            return {
              "data-tip": `${value.date
                .toISOString()
                .slice(0, 10)} has count: ${value.count}`,
            };
          }}
          showWeekdayLabels={true}
        />
        <ReactTooltip />
      </div>
    </div>
  );
};

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Map;
