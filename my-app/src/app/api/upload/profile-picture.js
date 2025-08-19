// pages/api/upload/profile-picture.js
import formidable from "formidable";
import { Client } from "basic-ftp";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Required for formidable
  },
};

// Helper: parse multipart form
function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({ multiples: false });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
}

async function uploadToFTP(localPath, filename) {
  const client = new Client();
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWORD,
      secure: false, // set true if Hostinger requires FTPS
    });

    const remotePath = `${process.env.FTP_UPLOAD_PATH}/${filename}`;
    await client.ensureDir(process.env.FTP_UPLOAD_PATH);
    await client.uploadFrom(localPath, remotePath);
    return remotePath;
  } finally {
    client.close();
  }
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { files } = await parseForm(req);
      const file = files.profile_picture;

      if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const filename = `${Date.now()}_${file.originalFilename}`;
      const remotePath = await uploadToFTP(file.filepath, filename);

      // Build public URL based on your domain
      const imageUrl = `https://balanse-yoga.com/uploads/${filename}`;

      // Remove temp file (cleanup)
      fs.unlinkSync(file.filepath);

      return res.status(200).json({ imageUrl });
    } catch (err) {
      console.error("FTP upload error:", err);
      res.status(500).json({ error: "Upload failed", details: err.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
