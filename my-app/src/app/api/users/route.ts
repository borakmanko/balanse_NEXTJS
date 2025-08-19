// src/app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "../../../lib/db";

function toNull(value: any) {
  return value === undefined || value === null || value === "" ? null : value;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firebaseUid,
      firstName,
      middleName,
      lastName,
      age,
      city,
      state,
      gender,
      customGender,
      profilePicture,
      preferences,
      bio,
      role,
    } = body;

    const [result] = await pool.execute(
      `INSERT INTO users (firebase_uid, first_name, middle_name, last_name, age, city, state, gender, custom_gender, profile_picture, preferences, bio, role)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
         first_name=VALUES(first_name), middle_name=VALUES(middle_name), last_name=VALUES(last_name),
         age=VALUES(age), city=VALUES(city), state=VALUES(state), gender=VALUES(gender), custom_gender=VALUES(custom_gender),
         profile_picture=VALUES(profile_picture), preferences=VALUES(preferences), bio=VALUES(bio), role=VALUES(role)`,
      [
        toNull(firebaseUid),
        toNull(firstName),
        toNull(middleName),
        toNull(lastName),
        toNull(age),
        toNull(city),
        toNull(state),
        toNull(gender),
        toNull(customGender),
        toNull(profilePicture),
        JSON.stringify(preferences ?? {}),
        toNull(bio),
        toNull(role) || "user",
      ]
    );

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Error creating user profile:", err.message);
    return NextResponse.json(
      { error: "Database error", details: err.message },
      { status: 500 }
    );
  }
}
