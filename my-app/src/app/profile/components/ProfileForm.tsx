"use client";

import { useState } from "react";
import { Camera, User, X } from "lucide-react";
import { UserProfile } from "../../../types/user";


interface ProfileFormProps {
  profile: UserProfile;
  onSave: (profile: UserProfile) => void;
  onCancel: () => void;
}

const YOGA_TYPES = ["Hatha", "Vinyasa", "Ashtanga", "Yin", "Restorative"];
const EXPERIENCE_LEVELS = ["beginner", "intermediate", "advanced"] as const;
const GOALS = ["Flexibility", "Strength", "Stress Relief", "Mindfulness", "Weight Loss"];

const AVATAR_OPTIONS = [
  "🧘‍♀️", "🧘‍♂️", "🧘", "🕉️", "🌸", "🌿", "🌺", "🦋"
];

export default function ProfileForm({ profile, onSave, onCancel }: ProfileFormProps) {
  const [formData, setFormData] = useState<UserProfile>(profile);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleInputChange = (field: keyof UserProfile, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePreferencesChange = (field: keyof UserProfile['preferences'], value: any) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [field]: value
      }
    }));
  };

  const handleYogaTypeToggle = (type: string) => {
    const current = formData.preferences.yogaTypes;
    const updated = current.includes(type)
      ? current.filter(t => t !== type)
      : [...current, type];
    
    handlePreferencesChange('yogaTypes', updated);
  };

  const handleGoalToggle = (goal: string) => {
    const current = formData.preferences.goals;
    const updated = current.includes(goal)
      ? current.filter(g => g !== goal)
      : [...current, goal];
    
    handlePreferencesChange('goals', updated);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setPreviewImage(result);
        handleInputChange('profilePicture', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarSelect = (avatar: string) => {
    handleInputChange('avatar', avatar);
    setShowAvatarPicker(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            {previewImage || formData.profilePicture ? (
              <img
                src={previewImage || formData.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-brand-light"
              />
            ) : formData.avatar ? (
              <div className="w-24 h-24 rounded-full bg-brand-light flex items-center justify-center text-4xl border-4 border-brand-primary">
                {formData.avatar}
              </div>
            ) : (
              <div className="w-24 h-24 rounded-full bg-brand-light flex items-center justify-center border-4 border-brand-primary">
                <User className="w-12 h-12 text-brand-primary" />
              </div>
            )}
            
            <label className="absolute bottom-0 right-0 bg-brand-primary text-white p-2 rounded-full cursor-pointer hover:bg-brand-primary-hover transition-colors">
              <Camera className="w-4 h-4" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
          
          <button
            type="button"
            onClick={() => setShowAvatarPicker(!showAvatarPicker)}
            className="brand-button-outline text-sm"
          >
            Choose Avatar
          </button>
          
          {showAvatarPicker && (
            <div className="grid grid-cols-4 gap-2 p-4 bg-brand-lighter rounded-lg">
              {AVATAR_OPTIONS.map((avatar, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleAvatarSelect(avatar)}
                  className="w-12 h-12 text-2xl hover:bg-brand-light rounded-lg transition-colors"
                >
                  {avatar}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-2 border border-brand-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Middle Name
            </label>
            <input
              type="text"
              value={formData.middleName || ''}
              onChange={(e) => handleInputChange('middleName', e.target.value)}
              className="w-full px-4 py-2 border border-brand-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-2 border border-brand-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age *
            </label>
            <input
              type="number"
              required
              min="13"
              max="120"
              value={formData.age}
              onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-brand-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="w-full px-4 py-2 border border-brand-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State *
            </label>
            <input
              type="text"
              required
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className="w-full px-4 py-2 border border-brand-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Gender *
          </label>
          <div className="flex flex-wrap gap-4">
            {(['male', 'female', 'other'] as const).map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={formData.gender === gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="mr-2 text-brand-primary focus:ring-brand-primary"
                />
                <span className="capitalize">{gender}</span>
              </label>
            ))}
          </div>
          
          {formData.gender === 'other' && (
            <input
              type="text"
              placeholder="Please specify"
              value={formData.customGender || ''}
              onChange={(e) => handleInputChange('customGender', e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-brand-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
          )}
        </div>

        {/* Preferences */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-gray-900">Preferences</h4>
          
          {/* Yoga Types */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Preferred Yoga Types
            </label>
            <div className="flex flex-wrap gap-2">
              {YOGA_TYPES.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleYogaTypeToggle(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    formData.preferences.yogaTypes.includes(type)
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-lighter text-brand-primary hover:bg-brand-light'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Experience Level *
            </label>
            <div className="flex gap-4">
              {EXPERIENCE_LEVELS.map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="radio"
                    name="experienceLevel"
                    value={level}
                    checked={formData.preferences.experienceLevel === level}
                    onChange={(e) => handlePreferencesChange('experienceLevel', e.target.value)}
                    className="mr-2 text-brand-primary focus:ring-brand-primary"
                  />
                  <span className="capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Goals */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Goals
            </label>
            <div className="flex flex-wrap gap-2">
              {GOALS.map((goal) => (
                <button
                  key={goal}
                  type="button"
                  onClick={() => handleGoalToggle(goal)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    formData.preferences.goals.includes(goal)
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-lighter text-brand-primary hover:bg-brand-light'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            rows={4}
            value={formData.bio || ''}
            onChange={(e) => handleInputChange('bio', e.target.value)}
            placeholder="Tell us about yourself and your yoga journey..."
            className="w-full px-4 py-2 border border-brand-light rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="brand-button flex-1"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="brand-button-outline flex-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}