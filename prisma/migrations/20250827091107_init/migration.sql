/*
  Warnings:

  - You are about to drop the column `age` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `user_profiles` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `yoga_classes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `user_profiles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `birthDate` to the `user_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `user_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `basePrice` to the `yoga_classes` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `yoga_classes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `level` on the `yoga_classes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "public"."YogaType" AS ENUM ('HATHA', 'VINYASA', 'ASHTANGA', 'RESTORATIVE', 'HOT', 'POWER');

-- CreateEnum
CREATE TYPE "public"."YogaLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'ALL_LEVELS');

-- CreateEnum
CREATE TYPE "public"."PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "public"."PaymentProvider" AS ENUM ('PAYMAYA', 'GCASH', 'PAYMONGO');

-- CreateEnum
CREATE TYPE "public"."TransactionType" AS ENUM ('BOOKING', 'SUBSCRIPTION', 'PACKAGE');

-- AlterTable
ALTER TABLE "public"."user_profiles" DROP COLUMN "age",
DROP COLUMN "city",
DROP COLUMN "state",
ADD COLUMN     "birthDate" DATE NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" VARCHAR(15);

-- AlterTable
ALTER TABLE "public"."yoga_classes" DROP COLUMN "price",
ADD COLUMN     "basePrice" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "scheduleId" TEXT,
DROP COLUMN "type",
ADD COLUMN     "type" "public"."YogaType" NOT NULL,
DROP COLUMN "level",
ADD COLUMN     "level" "public"."YogaLevel" NOT NULL;

-- CreateTable
CREATE TABLE "public"."addresses" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "barangay" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'Philippines',
    "userId" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."subscriptions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."transactions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'PHP',
    "type" "public"."TransactionType" NOT NULL,
    "status" "public"."PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "provider" "public"."PaymentProvider" NOT NULL,
    "referenceId" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "bookingId" TEXT,
    "subscriptionId" TEXT,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."class_schedules" (
    "id" TEXT NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "isRecurring" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "class_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "addresses_userId_key" ON "public"."addresses"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_referenceId_key" ON "public"."transactions"("referenceId");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_subscriptionId_key" ON "public"."transactions"("subscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_email_key" ON "public"."user_profiles"("email");

-- AddForeignKey
ALTER TABLE "public"."addresses" ADD CONSTRAINT "addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."subscriptions" ADD CONSTRAINT "subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "public"."booking_events"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "public"."subscriptions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."yoga_classes" ADD CONSTRAINT "yoga_classes_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "public"."class_schedules"("id") ON DELETE SET NULL ON UPDATE CASCADE;
