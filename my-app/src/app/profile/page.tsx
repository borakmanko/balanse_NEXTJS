"use client";

import { useState } from "react";
import { ArrowLeft, Edit3 } from "lucide-react";
import Link from "next/link";
import UserStats from "./components/UserStats";
import StreakCalendar from "./components/StreakCalendar";
import ProfileForm from "./components/ProfileForm";
import { UserProfile, UserStats as UserStatsType, StreakData } from "../../types/user";


// Mock data - replace with actual data fetching
const mockStats: UserStatsType = {
  classesJoined: 42,
  hoursPracticed: 120,
  favoriteYogaType: "Vinyasa",
  membershipSince: "Jan 2024",
  currentStreak: 7,
};

const mockProfile: UserProfile = {
  id: "1",
  firstName: "Sarah",
  middleName: "",
  lastName: "Johnson",
  age: 28,
  city: "San Francisco",
  state: "CA",
  gender: "female",
  avatar: "🧘‍♀️",
  preferences: {
    yogaTypes: ["Vinyasa", "Hatha"],
    experienceLevel: "intermediate",
    goals: ["Flexibility", "Stress Relief", "Mindfulness"],
  },
  bio: "Passionate about yoga and mindfulness. I love exploring different styles and finding balance in my daily practice.",
};

// Generate mock streak data for the last 84 days
const generateMockStreakData = (): StreakData[] => {
  const data: StreakData[] = [];
  const today = new Date();
  
  for (let i = 83; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Random activity level (weighted towards recent days for streak)
    const isRecentWeek = i < 7;
    const randomLevel = isRecentWeek 
      ? Math.floor(Math.random() * 5) // 0-4 for recent days
      : Math.floor(Math.random() * 3); // 0-2 for older days
    
    const classes = randomLevel === 0 ? 0 : randomLevel + Math.floor(Math.random() * 2);
    
    data.push({
      date: date.toISOString().split('T')[0],
      level: randomLevel as 0 | 1 | 2 | 3 | 4,
      classes,
    });
  }
  
  return data;
};

const mockStreakData = generateMockStreakData();

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>(mockProfile);

  const handleSaveProfile = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log("Saving profile:", updatedProfile);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="min-h-screen bg-brand-lighter py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center text-brand-primary hover:text-brand-primary-hover transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Profile
            </button>
          </div>
          
          <ProfileForm
            profile={profile}
            onSave={handleSaveProfile}
            onCancel={handleCancelEdit}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-lighter py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-brand-primary hover:text-brand-primary-hover transition-colors mr-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-4">
              {profile.profilePicture ? (
                <img
                  src={profile.profilePicture}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover border-4 border-brand-primary"
                />
              ) : profile.avatar ? (
                <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-3xl border-4 border-brand-primary">
                  {profile.avatar}
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center border-4 border-brand-primary">
                  <span className="text-2xl font-bold text-brand-primary">
                    {profile.firstName[0]}{profile.lastName[0]}
                  </span>
                </div>
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {profile.firstName} {profile.lastName}
                </h1>
                <p className="text-brand-primary font-medium">
                  {profile.city}, {profile.state}
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setIsEditing(true)}
            className="brand-button flex items-center"
          >
            <Edit3 className="w-5 h-5 mr-2" />
            Edit Profile
          </button>
        </div>

        {/* User Stats */}
        <UserStats stats={mockStats} />

        {/* Streak Calendar */}
        <StreakCalendar 
          streakData={mockStreakData} 
          currentStreak={mockStats.currentStreak} 
        />

        {/* Profile Summary */}
        <div className="brand-card p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">About Me</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Personal Information
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Age:</span> {profile.age}</p>
                <p><span className="font-medium">Gender:</span> {profile.gender === 'other' ? profile.customGender : profile.gender}</p>
                <p><span className="font-medium">Location:</span> {profile.city}, {profile.state}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Yoga Preferences
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">Experience Level:</span>
                  <span className="ml-2 px-3 py-1 bg-brand-light text-brand-primary rounded-full text-sm font-medium capitalize">
                    {profile.preferences.experienceLevel}
                  </span>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700 block mb-2">Preferred Types:</span>
                  <div className="flex flex-wrap gap-2">
                    {profile.preferences.yogaTypes.map((type) => (
                      <span
                        key={type}
                        className="px-3 py-1 bg-brand-primary text-white rounded-full text-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="font-medium text-gray-700 block mb-2">Goals:</span>
                  <div className="flex flex-wrap gap-2">
                    {profile.preferences.goals.map((goal) => (
                      <span
                        key={goal}
                        className="px-3 py-1 bg-brand-lighter text-brand-primary rounded-full text-sm border border-brand-light"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {profile.bio && (
            <div className="mt-8 pt-6 border-t border-brand-light">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Bio</h4>
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}