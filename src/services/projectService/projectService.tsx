import axios from 'axios';

export const fetchProjects = async (page: number, limit: number = 6) => {
  const response = await axios.get(
    `https://portfolio-backend-dqxo.onrender.com/projects?page=${page}&limit=${limit}`
  );
  return response.data;
};
