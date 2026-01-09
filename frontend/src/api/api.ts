const BASE_URL = "http://localhost:5000/api"; // change to your backend URL

export async function submitAppointment(data: any) {
  const res = await fetch(`${BASE_URL}/appointments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function adminLogin(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

export async function getAppointments(token: string) {
  const res = await fetch(`${BASE_URL}/appointments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function updateAppointment(id: number, status: string, token: string) {
  const res = await fetch(`${BASE_URL}/appointments/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  return res.json();
}
