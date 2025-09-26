import axios from 'axios';

export const checkAuth = async (): Promise<boolean> => {
  try {
    const response = await axios.get(
      'https://ltd-margaretta-hugozeymerauad-b9e6c12d.koyeb.app/auth/profile',
      { withCredentials: true }
    );
    return !!response.data.email;
  } catch {
    return false;
  }
};

export const logoutUser = async (): Promise<void> => {
  await axios.get('https://ltd-margaretta-hugozeymerauad-b9e6c12d.koyeb.app/auth/logout', {
    withCredentials: true,
  });
};

export const loginUser = async (email: string, password: string) => {
  return axios.post(
    'https://ltd-margaretta-hugozeymerauad-b9e6c12d.koyeb.app/auth/login',
    { email, password },
    { withCredentials: true }
  );
};
