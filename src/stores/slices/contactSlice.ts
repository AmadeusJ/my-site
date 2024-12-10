import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPrevChatMessages, sendEmail } from '@/app/api/chat';

// 채팅 메시지 타입
export interface ContactChat {
  id?: number;
  sender_id: string;
  receiver_id?: string;
  content: string;
  created_at?: string;
}

interface Email {
  user_id: string;
  email: string;
  message: string;
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

export const sendEmailThunk = createAsyncThunk('contact/sendEmail', async (data: { user_id: string, email: string, message: string }) => {
  const response = await sendEmail(data);
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

    sendEmail: (state, action: PayloadAction<Email>) => {
      state.status = 'loading';
      state.error = null;
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
            receiver_id: message.receiver_id,
            content: message.content,
            created_at: message.created_at,
          }));
      }
    });
    builder.addCase(fetchPrevChatMessagesThunk.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to fetch previous chat messages';
    });
    builder.addCase(sendEmailThunk.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(sendEmailThunk.fulfilled, (state, action) => {
      state.status = 'succeeded';
    });
    builder.addCase(sendEmailThunk.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Failed to send email';
    });
  },
});

export const { sendMessage } = contactSlice.actions;

export default contactSlice.reducer;