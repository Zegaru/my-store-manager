export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.1.36:8000'
    : 'https://mindtec-store.herokuapp.com';
