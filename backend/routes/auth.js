import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db.js";

const router = express.Router();

/* Admin login */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await pool.query(
    "SELECT * FROM admins WHERE email = ?",
    [email]
  );

  if (rows.length === 0)
    return res.status(401).json({ message: "Invalid login" });

  const admin = rows[0];
  const match = await bcrypt.compare(password, admin.password);

  if (!match)
    return res.status(401).json({ message: "Invalid login" });

  const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: "8h" });

  res.json({ token });
});

export default router;
