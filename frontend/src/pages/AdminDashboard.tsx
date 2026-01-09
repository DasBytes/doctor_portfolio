import { useEffect, useState } from "react";
import { getAppointments, updateAppointment } from "../api/api";
import { toast, ToastContainer } from "react-toastify";
import { Calendar, Mail, Phone, MapPin, MessageSquare, Clock, CheckCircle, XCircle, Search, Filter, LogOut, User } from "lucide-react";

interface Appointment {
  id: number;
  name: string;
  gender: string;
  dob: string;
  appointment_date: string;
  appointment_time: string;
  email: string;
  phone: string;
  chamber: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    window.location.href = "/admin";
  };

  const filteredAppointments = appointments.filter(appt => {
    const matchesSearch =
      appt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.phone.includes(searchTerm);
    const matchesFilter = filterStatus === "all" || appt.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: appointments.length,
    pending: appointments.filter(a => a.status === "pending").length,
    confirmed: appointments.filter(a => a.status === "confirmed").length,
    cancelled: appointments.filter(a => a.status === "cancelled").length
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "confirmed": return "bg-green-100 text-green-800 border-green-200";
      case "cancelled": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatSimpleDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2">Appointment Dashboard</h1>
            <p className="text-slate-600">Manage and track all your appointments</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Total</p>
                <p className="text-3xl font-bold text-slate-800 mt-1">{stats.total}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Calendar className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">{stats.pending}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Clock className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Confirmed</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{stats.confirmed}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="text-green-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-600 text-sm font-medium">Cancelled</p>
                <p className="text-3xl font-bold text-red-600 mt-1">{stats.cancelled}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg">
                <XCircle className="text-red-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white appearance-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="space-y-4 p-6">
              {filteredAppointments.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="mx-auto text-slate-300 mb-4" size={48} />
                  <p className="text-slate-600">No appointments found</p>
                </div>
              ) : (
                filteredAppointments.map(appt => (
                  <div key={appt.id} className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all bg-gradient-to-r from-white to-slate-50">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-xl font-semibold text-slate-800">{appt.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(appt.status)}`}>
                                {appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
                              </span>
                              <span className="text-xs text-slate-500 flex items-center gap-1">
                                <Clock size={12} />
                                {formatDate(appt.created_at)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* New info rows: gender, DOB, appointment date/time */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600">
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-slate-400" />
                            <span className="text-sm">{appt.gender}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-slate-400" />
                            <span className="text-sm">{formatSimpleDate(appt.dob)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-slate-400" />
                            <span className="text-sm">{formatSimpleDate(appt.appointment_date)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-slate-400" />
                            <span className="text-sm">{appt.appointment_time}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                          <div className="flex items-center gap-2">
                            <Mail size={16} className="text-slate-400" />
                            <span className="text-sm">{appt.email}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={16} className="text-slate-400" />
                            <span className="text-sm">{appt.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-slate-400" />
                            <span className="text-sm">{appt.chamber}</span>
                          </div>
                        </div>

                        {appt.message && (
                          <div className="flex items-start gap-2 text-slate-600 bg-slate-50 p-3 rounded-lg mt-3">
                            <MessageSquare size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{appt.message}</span>
                          </div>
                        )}
                      </div>

                      {appt.status === "pending" && (
                        <div className="flex gap-3 lg:flex-col mt-4 lg:mt-0">
                          <button
                            onClick={() => handleStatus(appt.id, "confirmed")}
                            className="flex-1 lg:flex-none bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
                          >
                            <CheckCircle size={18} />
                            Confirm
                          </button>
                          <button
                            onClick={() => handleStatus(appt.id, "cancelled")}
                            className="flex-1 lg:flex-none bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
                          >
                            <XCircle size={18} />
                            Cancel
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
