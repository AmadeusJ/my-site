import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { welcome, WelcomeRequest } from '@/app/api/common';

interface WelcomeResponse {
  totalVisitors: number;
}

interface CommonState {
  welcome: WelcomeResponse;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CommonState = {
  welcome: {
    totalVisitors: 0,
  },
  status: 'idle',
  error: null,
};

export const postWelcome = createAsyncThunk('common/postWelcome', async (data: WelcomeRequest) => {
  const response = await welcome(data);
  return response.data;
});

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postWelcome.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(postWelcome.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.welcome = action.payload;
    });
    builder.addCase(postWelcome.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || null;
    });
  },
});

export default commonSlice.reducer;
