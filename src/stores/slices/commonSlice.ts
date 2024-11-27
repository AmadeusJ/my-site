import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { welcome } from '@/app/api/common';

interface WelcomeResponse {
  todayVisitors: number;
  totalVisitors: number;
}

interface CommonState {
  welcome: WelcomeResponse;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CommonState = {
  welcome: {
    todayVisitors: 0,
    totalVisitors: 0,
  },
  status: 'idle',
  error: null,
};

export const fetchWelcome = createAsyncThunk('common/fetchWelcome', async () => {
  const response = await welcome();
  return response.data;
});

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWelcome.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchWelcome.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.welcome = action.payload;
    });
    builder.addCase(fetchWelcome.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || null;
    });
  },
});

export default commonSlice.reducer;
