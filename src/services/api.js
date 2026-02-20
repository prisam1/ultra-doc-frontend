import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE;

export const docService = {
  upload: (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return axios.post(`${API_BASE}/upload`, formData);
  },
  ask: (question) => {
    return axios.post(`${API_BASE}/ask`, { question });
  },
  extract: () => {
    return axios.post(`${API_BASE}/extract`);
  }
};