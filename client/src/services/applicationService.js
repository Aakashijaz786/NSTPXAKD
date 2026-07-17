import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '';

export async function submitApplication(formData) {
  const response = await axios.post(`${API_BASE}/api/applications`, formData, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
}
