// pages/api/bookings/user/[userId].js
import pool from '../../../../lib/db.js';
import { allowCors } from '../../../../lib/cors.js';
async function handler(req, res) {
  const { userId } = req.query;

  if (req.method === 'GET') {
    try {
      const [rows] = await pool.query(
        `SELECT * FROM bookings WHERE firebase_uid = ? ORDER BY date DESC`,
        [userId]
      );
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export default allowCors(handler);