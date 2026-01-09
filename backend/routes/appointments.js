import express from "express";
import { pool } from "../db.js";
import auth from "../middleware/auth.js";
import sendMail from "../mailer.js";

const router = express.Router();

/* Patient submits appointment */
router.post("/", async (req, res) => {
  const { name, email, phone, chamber, message } = req.body;

  await pool.query(
    "INSERT INTO appointments (name,email,phone,chamber,message) VALUES (?,?,?,?,?)",
    [name, email, phone, chamber, message]
  );

  res.json({ message: "Appointment received" });
});

/* Doctor views appointments */
router.get("/", auth, async (req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM appointments ORDER BY created_at DESC"
  );
  res.json(rows);
});

/* Confirm / Cancel */
router.patch("/:id", auth, async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const [rows] = await pool.query(
    "UPDATE appointments SET status=? WHERE id=?",
    [status, id]
  );

  const [apptRows] = await pool.query(
    "SELECT * FROM appointments WHERE id=?",
    [id]
  );

  const appt = apptRows[0];

  if (status === "confirmed") {
    await sendMail(
      appt.email,
      "Appointment Confirmed – Dr. Rakhee Das",
      `Hello ${appt.name},
Your appointment has been confirmed.
Chamber: ${appt.chamber}
Thank you.`
    );
  }

  if (status === "cancelled") {
    await sendMail(
      appt.email,
      "Appointment Cancelled",
      "We’re sorry to inform you that your appointment has been cancelled."
    );
  }

  res.json({ success: true });
});

export default router;
