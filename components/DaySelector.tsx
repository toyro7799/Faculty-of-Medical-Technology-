import React from 'react';
import { DaySchedule } from '../types';

interface DaySelectorProps {
  days: DaySchedule[];
  selectedDay: string | null;
  onSelect: (dayName: string) => void;
}

export const DaySelector: React.FC<DaySelectorProps> = ({ days, selectedDay, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {days.map((day) => (
        <button
          key={day.dayName}
          onClick={() => onSelect(day.dayName)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
            selectedDay === day.dayName
              ? 'bg-slate-800 text-white shadow-lg'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
          }`}
        >
          {day.dayName}
        </button>
      ))}
    </div>
  );
};