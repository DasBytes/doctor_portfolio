import bcrypt from "bcrypt";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

const email = "admin@clinic.com";   // set your admin email
const password = "admin123";        // set your desired password

const createAdmin = async () => {
  const hashed = await bcrypt.hash(password, 10);
  await pool.query("INSERT INTO admins (email, password) VALUES (?, ?)", [email, hashed]);
  console.log("Admin created:", email);
  process.exit();
};

createAdmin();
