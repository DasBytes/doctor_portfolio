import express from "express";
import { pool } from "../db.js";
import auth from "../middleware/auth.js";
import sendMail from "../mailer.js";

const router = express.Router();

/* Patient submits appointment */
router.post("/", async (req, res) => {
  const { name, email, phone, chamber, message } = req.body;

  await pool.query(
    `INSERT INTO appointments (name,email,phone,chamber,message)
     VALUES ($1,$2,$3,$4,$5)`,
    [name, email, phone, chamber, message]
  );

  res.json({ message: "Appointment received" });
});

/* Doctor views appointments */
router.get("/", auth, async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM appointments ORDER BY created_at DESC"
  );
  res.json(result.rows);
});

/* Confirm / Cancel */
router.patch("/:id", auth, async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  const result = await pool.query(
    "UPDATE appointments SET status=$1 WHERE id=$2 RETURNING *",
    [status, id]
  );

  const appt = result.rows[0];

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
