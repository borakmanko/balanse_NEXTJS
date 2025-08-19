// lib/cors.js

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://127.0.0.1:5173",   // your local dev
  "https://balanse-yoga.com" // your production frontend
];

export function allowCors(handler) {
  return async (req, res) => {
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
      // res.setHeader("Access-Control-Allow-Origin", origin);
       res.setHeader("Access-Control-Allow-Origin", "*")
    }

    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    return handler(req, res);
  };
}
