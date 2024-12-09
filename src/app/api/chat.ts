import apiClient from './client';

export const fetchPrevChatMessages = async (data: { user_id: string }) => {
  const response = await apiClient.post('/chat/messages', data);
  return response.data;
};