"use client";

import React from "react";

interface DaySelectorProps {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDay, setSelectedDay }) => {
  return (
    <div className="flex justify-center gap-2 my-4">
      {days.map((day) => (
        <button
          key={day}
          onClick={() => setSelectedDay(day)}
          className={`px-4 py-2 rounded-md ${
            day === selectedDay ? "bg-gray-700 text-white" : "bg-gray-600 text-gray-300 hover:bg-gray-500"
          }`}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
