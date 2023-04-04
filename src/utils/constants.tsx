export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.1.36:8000'
    : process.env.NEXT_PUBLIC_API_URL || 'https://mindtec-store.herokuapp.com';
