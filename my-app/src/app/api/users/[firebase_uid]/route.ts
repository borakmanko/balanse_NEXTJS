// src/app/api/users/[firebase_uid]/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "../../../../lib/db";

function mapUserRowToCamel(row: any) {
  return {
    id: row.id,
    firebaseUid: row.firebase_uid,
    firstName: row.first_name,
    middleName: row.middle_name,
    lastName: row.last_name,
    age: row.age,
    city: row.city,
    state: row.state,
    gender: row.gender,
    customGender: row.custom_gender,
    profilePicture: row.profile_picture,
    bio: row.bio,
    role: row.role || "user",
    preferences: typeof row.preferences === "string" ? JSON.parse(row.preferences) : row.preferences,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function toNull(value: any) {
  return value === undefined || value === null || value === "" ? null : value;
}

// ✅ GET User by Firebase UID
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ firebase_uid: string }> }
) {
  const { firebase_uid } = await context.params; // ✅ must await

  try {
    const [rows]: any = await pool.execute(
      "SELECT * FROM users WHERE firebase_uid = ?",
      [firebase_uid]
    );

    if (rows.length === 0) {
  return NextResponse.json(
    { error: "User not found" },
    { status: 404 }
  );
}

return NextResponse.json(rows[0], { status: 200 });


    return NextResponse.json(mapUserRowToCamel(rows[0]));
  } catch (err: any) {
    console.error("Error fetching user profile:", err.message);
    return NextResponse.json({ error: "Database error", details: err.message }, { status: 500 });
  }
}

// ✅ PUT Update User
export async function PUT(req: NextRequest, { params }: { params: { firebase_uid: string } }) {
  const { firebase_uid } = params;
  const body = await req.json();
  const {
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
  } = body;

  try {
    const [result]: any = await pool.execute(
      `UPDATE users SET
        first_name = ?, middle_name = ?, last_name = ?, age = ?, city = ?, state = ?, gender = ?, custom_gender = ?, profile_picture = ?, preferences = ?, bio = ?
       WHERE firebase_uid = ?`,
      [
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
        firebase_uid,
      ]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ error: "User not found for update" }, { status: 404 });
    }

    const [rows]: any = await pool.execute("SELECT * FROM users WHERE firebase_uid = ?", [firebase_uid]);
    return NextResponse.json(mapUserRowToCamel(rows[0]));
  } catch (err: any) {
    console.error("Error updating user profile:", err.message);
    return NextResponse.json({ error: "Database error", details: err.message }, { status: 500 });
  }
}
