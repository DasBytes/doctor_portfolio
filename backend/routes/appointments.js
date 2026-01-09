import express from "express";
import { pool } from "../db.js";
import auth from "../middleware/auth.js";
import sendMail from "../mailer.js";

const router = express.Router();

/* Patient submits appointment */
router.post("/", async (req, res) => {
  const {
    name,
    gender,
    email,
    phone,
    chamber,
    appointmentDate,
    dob,
    appointmentTime,
    message,
  } = req.body;

  // Basic validation
  if (!name || !gender || !email || !phone || !chamber || !appointmentDate || !dob || !appointmentTime) {
    return res.status(400).json({ error: "All required fields must be filled" });
  }

  // Appointment date validation: only Sunday(0), Tuesday(2), Thursday(4)
  const [year, month, day] = appointmentDate.split("-").map(Number);
  const selectedDate = new Date(year, month - 1, day);
  const dayOfWeek = selectedDate.getDay();

  if (![0, 2, 4].includes(dayOfWeek)) {
    return res.status(400).json({
      error: "Appointments are only available on Sunday, Tuesday, and Thursday",
    });
  }

  try {
    await pool.query(
      `INSERT INTO appointments 
      (name, gender, email, phone, chamber, appointment_date, dob, appointment_time, message) 
      VALUES (?,?,?,?,?,?,?,?,?)`,
      [name, gender, email, phone, chamber, appointmentDate, dob, appointmentTime, message || null]
    );

    res.json({ message: "Appointment received" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

/* Doctor views appointments */
router.get("/", auth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM appointments ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

/* Confirm / Cancel */
router.patch("/:id", auth, async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;

  try {
    await pool.query("UPDATE appointments SET status=? WHERE id=?", [status, id]);

    const [apptRows] = await pool.query("SELECT * FROM appointments WHERE id=?", [id]);
    const appt = apptRows[0];

    if (status === "confirmed") {
      await sendMail(
        appt.email,
        "Appointment Confirmed – Dr. Rakhee Das",
        `Dear ${appt.name},

We are pleased to confirm your appointment with Dr. Rakhee Das.

Patient Details:
━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${appt.name}
⚧ Gender: ${appt.gender}
📧 Email: ${appt.email}
📞 Phone: ${appt.phone}

Appointment Details:
━━━━━━━━━━━━━━━━━━━━━━━━
📍 Chamber: ${appt.chamber}
📅 Date: ${appt.appointment_date}
🕒 Time: ${appt.appointment_time}

Please arrive 10 minutes early and bring any relevant medical records or previous test results.

If you need to reschedule or cancel, please contact us as soon as possible.

Thank you for choosing our services.

Best regards,
Dr. Rakhee Das
Medical Clinic`
      );
    }

    if (status === "cancelled") {
      await sendMail(
        appt.email,
        "Appointment Cancelled – Dr. Rakhee Das",
        `Dear ${appt.name},

We regret to inform you that your appointment has been cancelled.

Patient Details:
━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${appt.name}
⚧ Gender: ${appt.gender}
📧 Email: ${appt.email}
📞 Phone: ${appt.phone}

We apologize for any inconvenience this may cause. If you would like to reschedule, please contact us at your earliest convenience.

Thank you for your understanding.

Best regards,
Dr. Rakhee Das
Medical Clinic`
      );
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
