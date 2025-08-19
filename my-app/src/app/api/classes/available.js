// pages/api/classes/available.js
import pool from "../../../lib/db.js";
import { allowCors } from "../../../lib/cors.js";

async function handler(req, res) {
  const { date } = req.query;

  if (req.method === "GET") {
    if (!date) {
      return res.status(400).json({ error: "Missing date parameter" });
    }

    try {
      const [rows] = await pool.query(
        `SELECT 
           cs.id as schedule_id,
           cs.date,
           cs.start_time,
           cs.end_time,
           cs.status as schedule_status,
           yc.id as class_id,
           yc.name as class_name,
           yc.type as class_type,
           yc.level,
           yc.duration,
           yc.price,
           i.name as instructor_name,
           yc.max_capacity,
           (yc.max_capacity - COUNT(b.id)) as slots_left
         FROM class_schedules cs
         JOIN yoga_classes yc ON cs.class_id = yc.id
         JOIN instructors i ON cs.instructor_id = i.id
         LEFT JOIN bookings b ON cs.id = b.schedule_id AND b.status = 'booked'
         WHERE cs.date = ? AND cs.status = 'scheduled'
         GROUP BY cs.id
         HAVING slots_left > 0
         ORDER BY cs.start_time ASC`,
        [date]
      );

      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching available classes:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

export default allowCors(handler);
