import apiClient from './client';

export const getProjects = async () => {
  const response = await apiClient.get('/projects');
  return response.data;
};

export const getProject = async (id: string) => {
  const response = await apiClient.get(`/projects/${id}`);
  return response.data;
};

