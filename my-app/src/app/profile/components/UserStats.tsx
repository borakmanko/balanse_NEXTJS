"use client";

import { Calendar, Clock, Heart, Trophy } from "lucide-react";
import { UserStatsData as UserStatsType } from "../../../types/user";


interface UserStatsProps {
  stats: UserStatsType;
}

export default function UserStats({ stats }: UserStatsProps) {
  const statItems = [
    {
      icon: Trophy,
      label: "Classes Joined",
      value: stats.classesJoined.toString(),
      color: "text-brand-primary",
      bgColor: "bg-brand-lighter",
    },
    {
      icon: Clock,
      label: "Hours Practiced",
      value: `${stats.hoursPracticed}h`,
      color: "text-brand-secondary",
      bgColor: "bg-brand-light",
    },
    {
      icon: Heart,
      label: "Favorite Type",
      value: stats.favoriteYogaType,
      color: "text-brand-accent",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Calendar,
      label: "Member Since",
      value: stats.membershipSince,
      color: "text-brand-primary",
      bgColor: "bg-brand-lighter",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="brand-card p-6 text-center hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}
            >
              <IconComponent className={`w-6 h-6 ${item.color}`} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {item.value}
            </div>
            <div className="text-sm text-gray-600">{item.label}</div>
          </div>
        );
      })}
    </div>
  );
}