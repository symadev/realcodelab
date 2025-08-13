import axios from 'axios';
const API = import.meta.env.VITE_API_URL;
export const compile = (payload)=>axios.post(`${API}/compile`, payload).then(r=>r.data);
