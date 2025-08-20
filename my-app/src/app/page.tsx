"use client";

import Link from "next/link";
import {
  Heart,
  ArrowRight,
  Play,
  Star,
  Users,
  Clock,
  Award,
  Zap,
  Moon,
  Quote,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Menu,
  X,
  User,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Stats data
  const stats = [
    { value: "500+", label: "Happy Students" },
    { value: "50+", label: "Expert Instructors" },
    { value: "4.9", label: "Average Rating" },
  ];

  // Services data
  const services = [
    {
      icon: Heart,
      title: "Hatha Yoga",
      description:
        "Gentle, slow-paced yoga focusing on basic postures and breathing techniques.",
      duration: "60 min",
      level: "Beginner",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Vinyasa Flow",
      description:
        "Dynamic sequences that link movement and breath in a flowing practice.",
      duration: "75 min",
      level: "Intermediate",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      title: "Ashtanga",
      description:
        "Traditional, vigorous style of yoga with a set sequence of poses.",
      duration: "90 min",
      level: "Advanced",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Moon,
      title: "Restorative Yoga",
      description:
        "Relaxing practice using props to support the body in restful poses.",
      duration: "60 min",
      level: "All Levels",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Users,
      title: "Hot Yoga",
      description:
        "Yoga practiced in a heated room to enhance flexibility and detoxification.",
      duration: "60 min",
      level: "Intermediate",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "Power Yoga",
      description:
        "Fitness-based vinyasa practice with strength-building poses.",
      duration: "45 min",
      level: "Advanced",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  // Instructors data
  const instructors = [
    {
      name: "Sarah Chen",
      specialty: "Vinyasa Flow & Meditation",
      experience: "8 years",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Sarah brings mindfulness and grace to every class, helping students find their inner strength.",
      certifications: ["RYT-500", "Meditation Teacher", "Prenatal Yoga"],
      students: 200,
    },
    {
      name: "Michael Rodriguez",
      specialty: "Ashtanga & Power Yoga",
      experience: "10 years",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Michael challenges students to push their limits while maintaining proper alignment and breath.",
      certifications: ["RYT-500", "Ashtanga Certified", "Anatomy Specialist"],
      students: 180,
    },
    {
      name: "Emma Thompson",
      specialty: "Hatha & Restorative Yoga",
      experience: "6 years",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Emma creates a nurturing environment where students can heal and restore their bodies and minds.",
      certifications: ["RYT-200", "Yin Yoga", "Trauma-Informed Yoga"],
      students: 150,
    },
    {
      name: "David Kim",
      specialty: "Hot Yoga & Flexibility",
      experience: "7 years",
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "David helps students build strength and flexibility through challenging yet accessible sequences.",
      certifications: ["RYT-300", "Hot Yoga Certified", "Flexibility Coach"],
      students: 170,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Jessica Martinez",
      role: "Marketing Manager",
      image:
        "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Balanse has completely transformed my approach to wellness. The instructors are incredibly knowledgeable and the community is so supportive. I've never felt stronger or more centered.",
      class: "Vinyasa Flow",
    },
    {
      name: "Robert Chen",
      role: "Software Engineer",
      image:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "As someone who sits at a desk all day, yoga has been a game-changer for my posture and stress levels. The flexibility in class scheduling makes it easy to maintain consistency.",
      class: "Hatha Yoga",
    },
    {
      name: "Maria Rodriguez",
      role: "Teacher",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The prenatal yoga classes here helped me through my entire pregnancy. The instructors are so caring and knowledgeable about modifications. Highly recommend!",
      class: "Prenatal Yoga",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <Heart className="w-4 h-4 text-white" fill="white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Balanse
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#classes"
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Classes
              </a>
              <a
                href="#instructors"
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Instructors
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#footer"
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                <User size={16} />
                <span>Log In</span>
              </Link>
              <Link
                href="/auth/signup"
                className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
              >
                <UserPlus size={16} />
                <span>Sign Up</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
                >
                  Home
                </Link>
                <Link
                  href="/classes"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
                >
                  Classes
                </Link>
                <Link
                  href="/instructors"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
                >
                  Instructors
                </Link>
                <Link
                  href="/book"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600"
                >
                  Book Class
                </Link>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <Link
                    href="/auth/login"
                    className="flex items-center justify-center space-x-2 text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
                  >
                    <User size={16} />
                    <span>Log In</span>
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="flex items-center justify-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 mx-3 mt-2"
                  >
                    <UserPlus size={16} />
                    <span>Sign Up</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  Rated #1 Yoga Studio
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Find Your
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Inner Peace
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Transform your mind, body, and spirit with our expert-led yoga
                classes. Join thousands who have discovered their path to
                wellness and inner peace.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/classes"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Book Your First Class
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>

                <button className="inline-flex items-center px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Yoga practice"
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                />

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-emerald-600 fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        4.9/5 Rating
                      </div>
                      <div className="text-sm text-gray-600">
                        From 500+ reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="classes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Yoga Classes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the perfect class for your journey. From gentle
              beginners' sessions to challenging advanced practices, we have
              something for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${service.color}`}
                  ></div>
                  <div className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.color} text-white`}
                        >
                          {service.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Join thousands of students who have transformed their lives
                through yoga
              </p>
              <Link
                href="/classes"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Book Your First Class
                <Heart className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Instructors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from certified yoga professionals who are passionate about
              guiding you on your wellness journey with expertise, compassion,
              and dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {instructor.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-600">
                        {instructor.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-emerald-600 font-medium mb-2">
                    {instructor.specialty}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {instructor.bio}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      <span>{instructor.experience}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{instructor.students}+ students</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">
                      Certifications
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {instructor.certifications.map((cert, certIndex) => (
                        <span
                          key={certIndex}
                          className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our amazing community
              of yogis who have transformed their lives through our classes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-emerald-500 opacity-50" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-emerald-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-emerald-600 font-medium">
                      {testimonial.class}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <Heart className="w-12 h-12 mx-auto mb-4 fill-current" />
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Transformation?
              </h3>
              <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                Join our community of wellness warriors and discover what yoga
                can do for you. Your journey to better health and inner peace
                starts here.
              </p>
              <Link
                href="/classes"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Book Your First Class
                <Heart className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" fill="white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Balanse
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transform your mind, body, and spirit with our expert-led yoga
                classes. Find your inner balance and join our wellness
                community.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/classes"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Classes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/instructors"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Instructors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schedule"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Classes */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Popular Classes</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/classes/vinyasa"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Vinyasa Flow
                  </Link>
                </li>
                <li>
                  <Link
                    href="/classes/hatha"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Hatha Yoga
                  </Link>
                </li>
                <li>
                  <Link
                    href="/classes/power"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Power Yoga
                  </Link>
                </li>
                <li>
                  <Link
                    href="/classes/restorative"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Restorative Yoga
                  </Link>
                </li>
                <li>
                  <Link
                    href="/classes/hot"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Hot Yoga
                  </Link>
                </li>
                <li>
                  <Link
                    href="/classes/meditation"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    Meditation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">123 Wellness Street</p>
                    <p className="text-gray-400">Mindful City, MC 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-gray-400">(555) 123-YOGA</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-gray-400">hello@balanse.com</p>
                </div>
              </div>

              {/* Studio Hours */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Studio Hours</h4>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                  <p>Saturday: 7:00 AM - 8:00 PM</p>
                  <p>Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Balanse Yoga Studio. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
