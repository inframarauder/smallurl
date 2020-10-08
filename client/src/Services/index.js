import api from '../Configs/axios';

const Api = {
  signup: (body) => api.post('/api/auth/signup', body),
  login: (body) => api.post('/api/auth/login', body),
  quickShorten: (body) => api.post('/api/url/quick_create', body),
  createShorUrl: (body) => api.post('/api/url/create', body),
  redirect: (shortUrl) => api.put(`/api/url/redirect/${shortUrl}`),
  getDashboard: () => api.get('/api/url/dashboard'),
  searchUrl: (longUrl) => api.get('/api/url/search', { params: { longUrl } }),
  deleteUrl: (id) => api.delete(`/api/url/delete/${id}`),
};

export default Api;
