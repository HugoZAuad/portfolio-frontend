import axios from 'axios';

export const checkAuth = async (): Promise<boolean> => {
  try {
    const response = await axios.get(
      'https://portfolio-backend-dqxo.onrender.com/auth/profile',
      { withCredentials: true }
    );
    return !!response.data.email;
  } catch {
    return false;
  }
};

export const logoutUser = async (): Promise<void> => {
  await axios.get('https://portfolio-backend-dqxo.onrender.com/auth/logout', {
    withCredentials: true,
  });
};

export const loginUser = async (email: string, password: string) => {
  return axios.post(
    'https://portfolio-backend-dqxo.onrender.com/auth/login',
    { email, password },
    { withCredentials: true }
  );
};
