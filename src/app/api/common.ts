import apiClient from './client';

export const welcome = async () => {
  const response = await apiClient.get('/welcome');
  return response.data;
};
