// pages/api/bookings/index.js
import pool from "../../../lib/db.js";
import { allowCors } from "../../../lib/cors.js";

async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, scheduleId, notes } = req.body;

    if (!userId || !scheduleId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const [result] = await pool.query(
        `INSERT INTO bookings (user_id, schedule_id, notes)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE status = 'booked', notes = VALUES(notes)`,
        [userId, scheduleId, notes || null]
      );

      res.status(201).json({
        id: result.insertId,
        userId,
        scheduleId,
        notes,
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

export default allowCors(handler);
