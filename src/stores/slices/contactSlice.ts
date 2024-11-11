import { createSlice } from '@reduxjs/toolkit';

interface ContactChat {
  id: number;
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

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
});

export default contactSlice.reducer;