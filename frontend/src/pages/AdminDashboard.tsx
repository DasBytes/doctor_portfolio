import { useEffect, useState } from "react";
import { getAppointments, updateAppointment } from "../api/api";
import { toast, ToastContainer } from "react-toastify";

interface Appointment {
  id: number;
  name: string;
  email: string;
  phone: string;
  chamber: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const data = await getAppointments(token);
    setAppointments(data);
  };

  const handleStatus = async (id: number, status: "confirmed" | "cancelled") => {
    await updateAppointment(id, status, token);
    toast.success(`Appointment ${status}`);
    fetchAppointments();
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5">
      <h2 className="text-2xl font-bold mb-5">Appointments</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Chamber</th>
            <th className="border p-2">Message</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appt => (
            <tr key={appt.id}>
              <td className="border p-2">{appt.name}</td>
              <td className="border p-2">{appt.email}</td>
              <td className="border p-2">{appt.phone}</td>
              <td className="border p-2">{appt.chamber}</td>
              <td className="border p-2">{appt.message}</td>
              <td className="border p-2">{appt.status}</td>
              <td className="border p-2 space-x-2">
                {appt.status === "pending" && (
                  <>
                    <button onClick={() => handleStatus(appt.id, "confirmed")} className="bg-green-500 text-white p-1 rounded">Confirm</button>
                    <button onClick={() => handleStatus(appt.id, "cancelled")} className="bg-red-500 text-white p-1 rounded">Cancel</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
