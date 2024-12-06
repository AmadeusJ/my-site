// stores/slices/websocketSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebSocketManager } from '@/utils/websocket';

interface WebSocketState {
  websocketInstance: WebSocketManager | null;
}

const initialState: WebSocketState = {
  websocketInstance: null,
};

const websocketSlice = createSlice({
  name: 'websocket',
  initialState,
  reducers: {
    setWebsocketInstance: (state, action: PayloadAction<WebSocketManager | null>) => {
      state.websocketInstance = action.payload;
    },
  },
});

export const { setWebsocketInstance } = websocketSlice.actions;
export default websocketSlice.reducer;
