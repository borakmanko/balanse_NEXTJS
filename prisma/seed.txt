import {
  PrismaClient,
  Prisma,
  Gender,
  UserRole,
  ExperienceLevel,
  BookingStatus,
} from "../src/generated/prisma";

const prisma = new PrismaClient();

const profiles: Prisma.UserProfileCreateInput[] = [
  {
    firstName: "Admin",
    lastName: "User",
    age: 35,
    city: "Cebu City",
    state: "Cebu",
    gender: Gender.OTHER,
    role: UserRole.ADMIN,
    bio: "System administrator for the yoga studio",
    preferences: {
      create: {
        yogaTypes: ["Hatha", "Vinyasa", "Yin"],
        experienceLevel: ExperienceLevel.ADVANCED,
        goals: ["Maintain system", "Support users"],
      },
    },
    userStats: {
      create: {
        classesJoined: 0,
        hoursPracticed: 0,
        membershipSince: new Date("2024-01-01"),
        currentStreak: 0,
      },
    },
  },
  {
    firstName: "Maya",
    lastName: "Santos",
    age: 28,
    city: "Cebu City",
    state: "Cebu",
    gender: Gender.FEMALE,
    role: UserRole.INSTRUCTOR,
    bio: "Certified yoga instructor specializing in Vinyasa and Power Yoga. 5+ years of teaching experience.",
    preferences: {
      create: {
        yogaTypes: ["Vinyasa", "Power", "Ashtanga"],
        experienceLevel: ExperienceLevel.ADVANCED,
        goals: ["Teach mindfulness", "Build community", "Share yoga wisdom"],
      },
    },
    userStats: {
      create: {
        classesJoined: 150,
        hoursPracticed: 800,
        favoriteYogaType: "Vinyasa",
        membershipSince: new Date("2022-03-15"),
        currentStreak: 45,
      },
    },
  },
  {
    firstName: "Carlos",
    lastName: "Rodriguez",
    age: 32,
    city: "Mandaue",
    state: "Cebu",
    gender: Gender.MALE,
    role: UserRole.INSTRUCTOR,
    bio: "Hatha and Yin yoga specialist. Focuses on alignment and deep relaxation practices.",
    preferences: {
      create: {
        yogaTypes: ["Hatha", "Yin", "Restorative"],
        experienceLevel: ExperienceLevel.ADVANCED,
        goals: [
          "Promote healing",
          "Teach proper alignment",
          "Create peaceful environment",
        ],
      },
    },
    userStats: {
      create: {
        classesJoined: 120,
        hoursPracticed: 650,
        favoriteYogaType: "Hatha",
        membershipSince: new Date("2022-06-01"),
        currentStreak: 30,
      },
    },
  },
  {
    firstName: "Ana",
    lastName: "Dela Cruz",
    age: 25,
    city: "Cebu City",
    state: "Cebu",
    gender: Gender.FEMALE,
    role: UserRole.USER,
    bio: "Yoga enthusiast and beginner. Looking to improve flexibility and find inner peace.",
    preferences: {
      create: {
        yogaTypes: ["Hatha", "Beginner Vinyasa", "Yin"],
        experienceLevel: ExperienceLevel.BEGINNER,
        goals: [
          "Improve flexibility",
          "Reduce stress",
          "Learn proper breathing",
        ],
      },
    },
    userStats: {
      create: {
        classesJoined: 15,
        hoursPracticed: 25,
        favoriteYogaType: "Hatha",
        membershipSince: new Date("2024-02-01"),
        currentStreak: 7,
      },
    },
  },
  {
    firstName: "Miguel",
    lastName: "Tan",
    age: 40,
    city: "Lapu-Lapu",
    state: "Cebu",
    gender: Gender.MALE,
    role: UserRole.USER,
    bio: "Business professional seeking work-life balance through yoga practice.",
    preferences: {
      create: {
        yogaTypes: ["Power", "Vinyasa", "Hot"],
        experienceLevel: ExperienceLevel.INTERMEDIATE,
        goals: ["Stress relief", "Build strength", "Improve focus"],
      },
    },
    userStats: {
      create: {
        classesJoined: 45,
        hoursPracticed: 80,
        favoriteYogaType: "Power",
        membershipSince: new Date("2023-09-15"),
        currentStreak: 12,
      },
    },
  },
  {
    firstName: "Sofia",
    lastName: "Reyes",
    age: 22,
    city: "Talisay",
    state: "Cebu",
    gender: Gender.FEMALE,
    role: UserRole.USER,
    bio: "College student discovering the benefits of yoga for mental health and physical wellness.",
    preferences: {
      create: {
        yogaTypes: ["Vinyasa", "Yin", "Meditation"],
        experienceLevel: ExperienceLevel.BEGINNER,
        goals: ["Mental health", "Better sleep", "Connect with others"],
      },
    },
    userStats: {
      create: {
        classesJoined: 8,
        hoursPracticed: 12,
        favoriteYogaType: "Yin",
        membershipSince: new Date("2024-03-10"),
        currentStreak: 3,
      },
    },
  },
];

const yogaClasses: Prisma.YogaClassCreateInput[] = [
  {
    name: "Morning Flow",
    type: "Vinyasa",
    description:
      "Start your day with energizing vinyasa sequences that build heat and focus.",
    duration: 60,
    level: "Intermediate",
    maxCapacity: 20,
    price: 500.0,
    instructor: {
      connect: { id: "instructor_maya_id" }, // This will be updated after creating users
    },
  },
  {
    name: "Gentle Hatha",
    type: "Hatha",
    description:
      "Slow-paced class focusing on basic postures and breathing techniques.",
    duration: 75,
    level: "Beginner",
    maxCapacity: 15,
    price: 450.0,
    instructor: {
      connect: { id: "instructor_carlos_id" },
    },
  },
  {
    name: "Power Yoga Blast",
    type: "Power",
    description:
      "High-intensity yoga workout that builds strength and endurance.",
    duration: 45,
    level: "Advanced",
    maxCapacity: 12,
    price: 600.0,
    instructor: {
      connect: { id: "instructor_maya_id" },
    },
  },
  {
    name: "Yin & Restore",
    type: "Yin",
    description: "Deep relaxation and stretching with long-held passive poses.",
    duration: 90,
    level: "All Levels",
    maxCapacity: 18,
    price: 550.0,
    instructor: {
      connect: { id: "instructor_carlos_id" },
    },
  },
  {
    name: "Sunset Vinyasa",
    type: "Vinyasa",
    description:
      "Evening flow practice to unwind and release tension from the day.",
    duration: 60,
    level: "Intermediate",
    maxCapacity: 16,
    price: 500.0,
    instructor: {
      connect: { id: "instructor_maya_id" },
    },
  },
];

async function main() {
  console.log("🌱 Starting seed...");

  // Create user profiles
  console.log("Creating user profiles...");
  const createdProfiles = [];
  for (const profile of profiles) {
    const createdProfile = await prisma.userProfile.create({
      data: profile,
      include: {
        preferences: true,
        userStats: true,
      },
    });
    createdProfiles.push(createdProfile);
    console.log(
      `✅ Created user: ${createdProfile.firstName} ${createdProfile.lastName}`
    );
  }

  // Find instructors
  const instructors = createdProfiles.filter(
    (profile) => profile.role === UserRole.INSTRUCTOR
  );
  const mayaInstructor = instructors.find(
    (instructor) => instructor.firstName === "Maya"
  );
  const carlosInstructor = instructors.find(
    (instructor) => instructor.firstName === "Carlos"
  );

  // Create yoga classes
  console.log("Creating yoga classes...");
  const createdClasses = [];
  for (const yogaClass of yogaClasses) {
    // Update instructor connection based on the class
    if (yogaClass.name.includes("Hatha") || yogaClass.name.includes("Yin")) {
      yogaClass.instructor = { connect: { id: carlosInstructor!.id } };
    } else {
      yogaClass.instructor = { connect: { id: mayaInstructor!.id } };
    }

    const createdClass = await prisma.yogaClass.create({
      data: yogaClass,
      include: {
        instructor: true,
      },
    });
    createdClasses.push(createdClass);
    console.log(
      `✅ Created class: ${createdClass.name} (${createdClass.type})`
    );
  }

  // Create sample bookings
  console.log("Creating sample bookings...");
  const users = createdProfiles.filter(
    (profile) => profile.role === UserRole.USER
  );

  const bookings: Prisma.BookingEventCreateInput[] = [
    {
      date: "2024-08-26",
      timeIn: "07:00",
      timeOut: "08:00",
      status: BookingStatus.COMPLETED,
      user: { connect: { id: users[0].id } },
      class: { connect: { id: createdClasses[0].id } },
      instructorId: mayaInstructor!.id,
    },
    {
      date: "2024-08-26",
      timeIn: "18:00",
      timeOut: "19:00",
      status: BookingStatus.BOOKED,
      user: { connect: { id: users[1].id } },
      class: { connect: { id: createdClasses[4].id } },
      instructorId: carlosInstructor!.id,
    },
    {
      date: "2024-08-27",
      timeIn: "09:00",
      timeOut: "10:15",
      status: BookingStatus.BOOKED,
      user: { connect: { id: users[2].id } },
      class: { connect: { id: createdClasses[1].id } },
      instructorId: carlosInstructor!.id,
    },
    {
      date: "2024-08-25",
      timeIn: "19:00",
      timeOut: "20:30",
      status: BookingStatus.COMPLETED,
      user: { connect: { id: users[0].id } },
      class: { connect: { id: createdClasses[3].id } },
      instructorId: mayaInstructor!.id,
    },
    {
      date: "2024-08-27",
      timeIn: "06:30",
      timeOut: "07:15",
      status: BookingStatus.BOOKED,
      user: { connect: { id: users[1].id } },
      class: { connect: { id: createdClasses[2].id } },
      instructorId: carlosInstructor!.id,
    },
  ];

  for (const booking of bookings) {
    const createdBooking = await prisma.bookingEvent.create({
      data: booking,
      include: {
        user: true,
        class: true,
      },
    });
    console.log(
      `✅ Created booking: ${createdBooking.user.firstName} -> ${createdBooking.class.name}`
    );
  }

  // Create streak data for active users
  console.log("Creating streak data...");
  const streakData: Prisma.StreakDataCreateInput[] = [
    {
      date: "2024-08-20",
      level: 2,
      classes: 1,
      user: { connect: { id: users[0].id } },
    },
    {
      date: "2024-08-21",
      level: 3,
      classes: 2,
      user: { connect: { id: users[0].id } },
    },
    {
      date: "2024-08-22",
      level: 1,
      classes: 1,
      user: { connect: { id: users[1].id } },
    },
    {
      date: "2024-08-23",
      level: 4,
      classes: 3,
      user: { connect: { id: users[1].id } },
    },
    {
      date: "2024-08-24",
      level: 2,
      classes: 1,
      user: { connect: { id: users[2].id } },
    },
  ];

  for (const streak of streakData) {
    const createdStreak = await prisma.streakData.create({
      data: streak,
      include: {
        user: true,
      },
    });
    console.log(
      `✅ Created streak data for ${createdStreak.user.firstName}: Level ${createdStreak.level}`
    );
  }

  console.log("🎉 Seed completed successfully!");
  console.log(`
  📊 Summary:
  - ${createdProfiles.length} user profiles created
  - ${createdClasses.length} yoga classes created
  - ${bookings.length} bookings created
  - ${streakData.length} streak data entries created
  `);
}

main()
  .catch((e) => {
    console.error("❌ Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
