// pages/api/test-db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    const [rows] = await connection.query("SELECT 1 + 1 AS result");
    await connection.end();

    res
      .status(200)
      .json({ message: "Connection successful!", result: rows[0].result });
  } catch (error) {
    console.error("Database connection failed:", error);
    res
      .status(500)
      .json({ error: "Database connection failed", details: error.message });
  }
}
