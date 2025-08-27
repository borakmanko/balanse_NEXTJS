// prisma/seed.js
import {
  PrismaClient,
  Gender,
  YogaType,
  YogaLevel,
  ExperienceLevel,
  UserRole,
  BookingStatus,
  PaymentStatus,
  PaymentProvider,
  TransactionType,
} from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Clean existing data (optional - uncomment if you want to reset)
  /*
  await prisma.streakData.deleteMany();
  await prisma.userStats.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.bookingEvent.deleteMany();
  await prisma.yogaClass.deleteMany();
  await prisma.classSchedule.deleteMany();
  await prisma.userPreferences.deleteMany();
  await prisma.address.deleteMany();
  await prisma.userProfile.deleteMany();
  */

  // Create Class Schedules
  const schedule1 = await prisma.classSchedule.create({
    data: {
      dayOfWeek: 1, // Monday
      startTime: "06:00",
      endTime: "07:00",
      isRecurring: true,
    },
  });

  const schedule2 = await prisma.classSchedule.create({
    data: {
      dayOfWeek: 3, // Wednesday
      startTime: "18:00",
      endTime: "19:30",
      isRecurring: true,
    },
  });

  const schedule3 = await prisma.classSchedule.create({
    data: {
      dayOfWeek: 5, // Friday
      startTime: "07:30",
      endTime: "08:30",
      isRecurring: true,
    },
  });

  const schedule4 = await prisma.classSchedule.create({
    data: {
      dayOfWeek: 6, // Saturday
      startTime: "09:00",
      endTime: "10:30",
      isRecurring: true,
    },
  });

  // Create User Profiles (Instructors)
  const instructor1 = await prisma.userProfile.create({
    data: {
      firstName: "Maria",
      middleName: "Santos",
      lastName: "Cruz",
      email: "maria.cruz@yogastudio.com",
      phone: "+639123456789",
      birthDate: new Date("1985-03-15"),
      gender: Gender.FEMALE,
      profilePicture: "https://example.com/maria-profile.jpg",
      bio: "Certified yoga instructor with 8 years of experience in Hatha and Vinyasa yoga.",
      role: UserRole.INSTRUCTOR,
      address: {
        create: {
          city: "Cebu City",
          barangay: "Lahug",
          country: "Philippines",
        },
      },
      preferences: {
        create: {
          yogaTypes: [YogaType.HATHA, YogaType.VINYASA],
          experienceLevel: ExperienceLevel.ADVANCED,
          goals: ["Teaching", "Mindfulness", "Physical Fitness"],
        },
      },
      userStats: {
        create: {
          classesJoined: 150,
          hoursPracticed: 300,
          favoriteYogaType: "HATHA",
          membershipSince: new Date("2020-01-15"),
          currentStreak: 25,
        },
      },
    },
  });

  const instructor2 = await prisma.userProfile.create({
    data: {
      firstName: "Carlos",
      lastName: "Rodriguez",
      email: "carlos.rodriguez@yogastudio.com",
      phone: "+639987654321",
      birthDate: new Date("1990-07-22"),
      gender: Gender.MALE,
      profilePicture: "https://example.com/carlos-profile.jpg",
      bio: "Specializing in Power Yoga and Ashtanga, helping students build strength and flexibility.",
      role: UserRole.INSTRUCTOR,
      address: {
        create: {
          city: "Cebu City",
          barangay: "IT Park",
          country: "Philippines",
        },
      },
      preferences: {
        create: {
          yogaTypes: [YogaType.POWER, YogaType.ASHTANGA],
          experienceLevel: ExperienceLevel.ADVANCED,
          goals: ["Strength Building", "Teaching", "Flexibility"],
        },
      },
      userStats: {
        create: {
          classesJoined: 200,
          hoursPracticed: 400,
          favoriteYogaType: "POWER",
          membershipSince: new Date("2019-06-01"),
          currentStreak: 42,
        },
      },
    },
  });

  // Create User Profiles (Regular Users)
  const user1 = await prisma.userProfile.create({
    data: {
      firstName: "Ana",
      lastName: "Garcia",
      email: "ana.garcia@email.com",
      phone: "+639111222333",
      birthDate: new Date("1992-11-08"),
      gender: Gender.FEMALE,
      profilePicture: "https://example.com/ana-profile.jpg",
      bio: "Yoga enthusiast looking to improve flexibility and reduce stress.",
      role: UserRole.USER,
      address: {
        create: {
          city: "Mandaue City",
          barangay: "Banilad",
          country: "Philippines",
        },
      },
      preferences: {
        create: {
          yogaTypes: [YogaType.HATHA, YogaType.RESTORATIVE],
          experienceLevel: ExperienceLevel.BEGINNER,
          goals: ["Stress Relief", "Flexibility", "Mindfulness"],
        },
      },
      userStats: {
        create: {
          classesJoined: 15,
          hoursPracticed: 22,
          favoriteYogaType: "HATHA",
          membershipSince: new Date("2024-01-20"),
          currentStreak: 5,
        },
      },
    },
  });

  const user2 = await prisma.userProfile.create({
    data: {
      firstName: "Miguel",
      middleName: "Jose",
      lastName: "Dela Rosa",
      email: "miguel.delarosa@email.com",
      phone: "+639444555666",
      birthDate: new Date("1988-04-12"),
      gender: Gender.MALE,
      bio: "Software developer seeking work-life balance through yoga practice.",
      role: UserRole.USER,
      address: {
        create: {
          city: "Cebu City",
          barangay: "Guadalupe",
          country: "Philippines",
        },
      },
      preferences: {
        create: {
          yogaTypes: [YogaType.VINYASA, YogaType.POWER],
          experienceLevel: ExperienceLevel.INTERMEDIATE,
          goals: ["Strength Building", "Stress Relief", "Work-Life Balance"],
        },
      },
      userStats: {
        create: {
          classesJoined: 35,
          hoursPracticed: 52,
          favoriteYogaType: "VINYASA",
          membershipSince: new Date("2023-08-15"),
          currentStreak: 12,
        },
      },
    },
  });

  const user3 = await prisma.userProfile.create({
    data: {
      firstName: "Isabella",
      lastName: "Tan",
      email: "isabella.tan@email.com",
      phone: "+639777888999",
      birthDate: new Date("1995-09-25"),
      gender: Gender.FEMALE,
      profilePicture: "https://example.com/isabella-profile.jpg",
      bio: "Marketing professional exploring different yoga styles for overall wellness.",
      role: UserRole.USER,
      address: {
        create: {
          city: "Lapu-Lapu City",
          barangay: "Mactan",
          country: "Philippines",
        },
      },
      preferences: {
        create: {
          yogaTypes: [YogaType.HOT, YogaType.VINYASA, YogaType.RESTORATIVE],
          experienceLevel: ExperienceLevel.INTERMEDIATE,
          goals: ["Detoxification", "Flexibility", "Mental Clarity"],
        },
      },
      userStats: {
        create: {
          classesJoined: 28,
          hoursPracticed: 45,
          favoriteYogaType: "HOT",
          membershipSince: new Date("2023-11-10"),
          currentStreak: 8,
        },
      },
    },
  });

  // Create Admin User
  const admin = await prisma.userProfile.create({
    data: {
      firstName: "Admin",
      lastName: "User",
      email: "admin@yogastudio.com",
      phone: "+639000000000",
      birthDate: new Date("1980-01-01"),
      gender: Gender.OTHER,
      bio: "System administrator for the yoga studio platform.",
      role: UserRole.ADMIN,
      address: {
        create: {
          city: "Cebu City",
          barangay: "Capitol Site",
          country: "Philippines",
        },
      },
      preferences: {
        create: {
          yogaTypes: [YogaType.HATHA],
          experienceLevel: ExperienceLevel.BEGINNER,
          goals: ["System Management"],
        },
      },
      userStats: {
        create: {
          classesJoined: 5,
          hoursPracticed: 8,
          favoriteYogaType: "HATHA",
          membershipSince: new Date("2022-01-01"),
          currentStreak: 0,
        },
      },
    },
  });

  // Create Yoga Classes
  const yogaClass1 = await prisma.yogaClass.create({
    data: {
      name: "Morning Hatha Flow",
      type: YogaType.HATHA,
      description: "A gentle morning practice focusing on basic postures and breathing techniques. Perfect for beginners and those seeking a mindful start to their day.",
      duration: 60,
      level: YogaLevel.BEGINNER,
      instructorId: instructor1.id,
      maxCapacity: 15,
      basePrice: 500.00,
      scheduleId: schedule1.id,
    },
  });

  const yogaClass2 = await prisma.yogaClass.create({
    data: {
      name: "Power Vinyasa Evening",
      type: YogaType.VINYASA,
      description: "Dynamic flowing sequences that build strength, flexibility, and endurance. Great for intermediate and advanced practitioners.",
      duration: 90,
      level: YogaLevel.INTERMEDIATE,
      instructorId: instructor1.id,
      maxCapacity: 12,
      basePrice: 750.00,
      scheduleId: schedule2.id,
    },
  });

  const yogaClass3 = await prisma.yogaClass.create({
    data: {
      name: "Ashtanga Primary Series",
      type: YogaType.ASHTANGA,
      description: "Traditional Ashtanga practice following the Primary Series. Builds discipline, strength, and purification through breath-synchronized movement.",
      duration: 60,
      level: YogaLevel.ADVANCED,
      instructorId: instructor2.id,
      maxCapacity: 10,
      basePrice: 800.00,
      scheduleId: schedule3.id,
    },
  });

  const yogaClass4 = await prisma.yogaClass.create({
    data: {
      name: "Weekend Power Flow",
      type: YogaType.POWER,
      description: "High-energy power yoga session to energize your weekend. Focus on building heat, strength, and mental focus.",
      duration: 90,
      level: YogaLevel.INTERMEDIATE,
      instructorId: instructor2.id,
      maxCapacity: 20,
      basePrice: 700.00,
      scheduleId: schedule4.id,
    },
  });

  const yogaClass5 = await prisma.yogaClass.create({
    data: {
      name: "Restorative Yoga Therapy",
      type: YogaType.RESTORATIVE,
      description: "Deeply relaxing practice using props to support the body. Perfect for stress relief and recovery.",
      duration: 75,
      level: YogaLevel.ALL_LEVELS,
      instructorId: instructor1.id,
      maxCapacity: 8,
      basePrice: 650.00,
      // No schedule - special sessions
    },
  });

  // Create Subscriptions
  const subscription1 = await prisma.subscription.create({
    data: {
      userId: user1.id,
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-12-31"),
      status: true,
    },
  });

  const subscription2 = await prisma.subscription.create({
    data: {
      userId: user2.id,
      startDate: new Date("2024-02-15"),
      endDate: new Date("2025-02-14"),
      status: true,
    },
  });

  // Create Transactions for Subscriptions
  const transaction1 = await prisma.transaction.create({
    data: {
      userId: user1.id,
      amount: 8000.00,
      currency: "PHP",
      type: TransactionType.SUBSCRIPTION,
      status: PaymentStatus.COMPLETED,
      provider: PaymentProvider.GCASH,
      referenceId: "GCASH_SUB_001",
      subscriptionId: subscription1.id,
      metadata: {
        subscriptionType: "Annual",
        discount: "10%",
        originalAmount: 8800.00,
      },
    },
  });

  const transaction2 = await prisma.transaction.create({
    data: {
      userId: user2.id,
      amount: 8000.00,
      currency: "PHP",
      type: TransactionType.SUBSCRIPTION,
      status: PaymentStatus.COMPLETED,
      provider: PaymentProvider.PAYMAYA,
      referenceId: "MAYA_SUB_002",
      subscriptionId: subscription2.id,
      metadata: {
        subscriptionType: "Annual",
        paymentMethod: "Credit Card",
      },
    },
  });

  // Create Booking Events
  const booking1 = await prisma.bookingEvent.create({
    data: {
      userId: user1.id,
      classId: yogaClass1.id,
      instructorId: instructor1.id,
      date: "2024-08-26",
      timeIn: "06:00",
      timeOut: "07:00",
      status: BookingStatus.COMPLETED,
    },
  });

  const booking2 = await prisma.bookingEvent.create({
    data: {
      userId: user2.id,
      classId: yogaClass2.id,
      instructorId: instructor1.id,
      date: "2024-08-28",
      timeIn: "18:00",
      timeOut: "19:30",
      status: BookingStatus.BOOKED,
    },
  });

  const booking3 = await prisma.bookingEvent.create({
    data: {
      userId: user3.id,
      classId: yogaClass4.id,
      instructorId: instructor2.id,
      date: "2024-08-31",
      timeIn: "09:00",
      timeOut: "10:30",
      status: BookingStatus.BOOKED,
    },
  });

  const booking4 = await prisma.bookingEvent.create({
    data: {
      userId: user1.id,
      classId: yogaClass5.id,
      instructorId: instructor1.id,
      date: "2024-08-25",
      timeIn: "19:00",
      timeOut: "20:15",
      status: BookingStatus.COMPLETED,
    },
  });

  const booking5 = await prisma.bookingEvent.create({
    data: {
      userId: user3.id,
      classId: yogaClass1.id,
      instructorId: instructor1.id,
      date: "2024-08-19",
      timeIn: "06:00",
      timeOut: "07:00",
      status: BookingStatus.CANCELLED,
    },
  });

  // Create Transactions for Bookings
  const bookingTransaction1 = await prisma.transaction.create({
    data: {
      userId: user3.id,
      amount: 700.00,
      currency: "PHP",
      type: TransactionType.BOOKING,
      status: PaymentStatus.COMPLETED,
      provider: PaymentProvider.PAYMONGO,
      referenceId: "PMGO_BOOK_003",
      bookingId: booking3.id,
      metadata: {
        classType: "POWER",
        sessionDate: "2024-08-31",
      },
    },
  });

  const bookingTransaction2 = await prisma.transaction.create({
    data: {
      userId: user1.id,
      amount: 650.00,
      currency: "PHP",
      type: TransactionType.BOOKING,
      status: PaymentStatus.COMPLETED,
      provider: PaymentProvider.GCASH,
      referenceId: "GCASH_BOOK_004",
      bookingId: booking4.id,
      metadata: {
        classType: "RESTORATIVE",
        sessionDate: "2024-08-25",
      },
    },
  });

  // Create some failed/pending transactions
  const failedTransaction = await prisma.transaction.create({
    data: {
      userId: user2.id,
      amount: 500.00,
      currency: "PHP",
      type: TransactionType.BOOKING,
      status: PaymentStatus.FAILED,
      provider: PaymentProvider.PAYMAYA,
      referenceId: "MAYA_FAIL_001",
      metadata: {
        errorCode: "INSUFFICIENT_FUNDS",
        attemptedClass: "Morning Hatha Flow",
      },
    },
  });

  // Create Streak Data
  const streakDates = [
    "2024-08-20", "2024-08-21", "2024-08-22", "2024-08-23", "2024-08-24",
    "2024-08-25", "2024-08-26", "2024-08-27"
  ];

  for (let i = 0; i < streakDates.length; i++) {
    await prisma.streakData.create({
      data: {
        userId: user1.id,
        date: streakDates[i],
        level: Math.floor(Math.random() * 5), // 0-4 levels
        classes: Math.floor(Math.random() * 3) + 1, // 1-3 classes
      },
    });
  }

  // Create streak data for user2
  const user2StreakDates = [
    "2024-08-15", "2024-08-17", "2024-08-19", "2024-08-21", "2024-08-23",
    "2024-08-24", "2024-08-25", "2024-08-26", "2024-08-27"
  ];

  for (let i = 0; i < user2StreakDates.length; i++) {
    await prisma.streakData.create({
      data: {
        userId: user2.id,
        date: user2StreakDates[i],
        level: Math.floor(Math.random() * 5),
        classes: Math.floor(Math.random() * 2) + 1,
      },
    });
  }

  // Create streak data for user3
  const user3StreakDates = [
    "2024-08-18", "2024-08-20", "2024-08-22", "2024-08-24", "2024-08-26"
  ];

  for (let i = 0; i < user3StreakDates.length; i++) {
    await prisma.streakData.create({
      data: {
        userId: user3.id,
        date: user3StreakDates[i],
        level: Math.floor(Math.random() * 4) + 1,
        classes: 1,
      },
    });
  }

  console.log('Seed completed successfully!');
  console.log(`Created:
  - ${4} Class Schedules
  - ${5} User Profiles (2 Instructors, 2 Regular Users, 1 Admin)
  - ${5} Yoga Classes
  - ${2} Subscriptions
  - ${5} Booking Events
  - ${4} Transactions
  - ${22} Streak Data entries
  `);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });