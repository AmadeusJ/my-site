import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPrevChatMessages } from '@/app/api/chat';

// 채팅 메시지 타입
export interface ContactChat {
  id?: number;
  sender_id: string;
  content: string;
  created_at?: string;
}

interface ContactChatState {
  messages: ContactChat[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ContactChatState = {
  messages: [],
  status: 'idle',
  error: null,
};

export const fetchPrevChatMessagesThunk = createAsyncThunk('contact/fetchPrevChatMessages', async (data: { user_id: string }) => {
  const response = await fetchPrevChatMessages(data);
  return response.data;
});

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {

    // 채팅 메시지 추가
    sendMessage: (state, action: PayloadAction<ContactChat>) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPrevChatMessagesThunk.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPrevChatMessagesThunk.fulfilled, (state, action: PayloadAction<{ messages: ContactChat[] }>) => {
      state.status = 'succeeded';
      if (action.payload && action.payload.messages.length) {
        // messages가 배열인 것으로 가정하고 처리
        state.messages = action.payload.messages.map(
          (message: ContactChat) => ({
            id: message.id,
            sender_id: message.sender_id,
            content: message.content,
            created_at: message.created_at,
          }));
      }
    });
    builder.addCase(fetchPrevChatMessagesThunk.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to fetch previous chat messages';
    });
  },
});

export const { sendMessage } = contactSlice.actions;

export default contactSlice.reducer;