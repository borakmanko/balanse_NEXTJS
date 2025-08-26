"use client";

import { Flame } from "lucide-react";
import { StreakData } from "../../../types/user";

interface StreakCalendarProps {
  streakData: StreakData[];
  currentStreak: number;
}

export default function StreakCalendar({ streakData, currentStreak }: StreakCalendarProps) {
  // Generate last 12 weeks of data (84 days)
  const generateCalendarData = () => {
    const today = new Date();
    const days = [];
    
    for (let i = 83; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      const dateString = date.toISOString().split('T')[0];
      const existingData = streakData.find(d => d.date === dateString);
      
      days.push({
        date: dateString,
        level: existingData?.level || 0,
        classes: existingData?.classes || 0,
        dayOfWeek: date.getDay(),
      });
    }
    
    return days;
  };

  const calendarData = generateCalendarData();
  const weeks = [];
  
  // Group days into weeks
  for (let i = 0; i < calendarData.length; i += 7) {
    weeks.push(calendarData.slice(i, i + 7));
  }

  const getTooltipText = (day: any) => {
    const date = new Date(day.date);
    const formattedDate = date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
    
    if (day.classes === 0) {
      return `${formattedDate}: No classes`;
    }
    
    return `${formattedDate}: ${day.classes} class${day.classes > 1 ? 'es' : ''}`;
  };

  return (
    <div className="brand-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Practice Streak</h3>
        <div className="flex items-center space-x-2 bg-brand-gradient text-white px-4 py-2 rounded-full">
          <Flame className="w-5 h-5" />
          <span className="font-semibold">{currentStreak}-day streak</span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex space-x-1 min-w-max">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col space-y-1">
              {week.map((day, dayIndex) => (
                <div
                  key={day.date}
                  className={`w-3 h-3 rounded-sm streak-${day.level} hover:ring-2 hover:ring-brand-primary hover:ring-opacity-50 transition-all duration-200 cursor-pointer`}
                  title={getTooltipText(day)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <span>Less</span>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 rounded-sm streak-0"></div>
          <div className="w-3 h-3 rounded-sm streak-1"></div>
          <div className="w-3 h-3 rounded-sm streak-2"></div>
          <div className="w-3 h-3 rounded-sm streak-3"></div>
          <div className="w-3 h-3 rounded-sm streak-4"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
}