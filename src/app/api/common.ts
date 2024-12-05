import apiClient from './client';

export interface WelcomeRequest {
  user_id: string;
  isNewVisitor: boolean;
}

export const welcome = async (data: WelcomeRequest) => {
  const response = await apiClient.post('/welcome', data);
  return response.data;
};
