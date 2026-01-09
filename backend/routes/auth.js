import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { pool } from "../db.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await pool.query(
    "SELECT * FROM admins WHERE email=$1",
    [email]
  );

  if (result.rows.length === 0)
    return res.status(401).json({ message: "Invalid login" });

  const admin = result.rows[0];
  const match = await bcrypt.compare(password, admin.password);

  if (!match)
    return res.status(401).json({ message: "Invalid login" });

  const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET);

  res.json({ token });
});

export default router;
