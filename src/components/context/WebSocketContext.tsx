// components/WebSocketWrapper.tsx
"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { WebSocketManager } from '@/utils/websocket'; // WebSocketManager는 커스텀 WebSocket 관리 클래스라고 가정

// Create a context for the WebSocket
const WebSocketContext = createContext<WebSocketManager | null>(null);


export const WebSocketProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const [websocketManager, setWebsocketManager] = useState<WebSocketManager | null>(null);

  useEffect(() => {
    const wsManager = new WebSocketManager((message) => {
      console.log("WebSocket Message Received:", message);
      // 메시지를 받아서 필요에 따라 Redux store에 저장하거나 처리
      // dispatch(storeMessage({ message }));
    });

    wsManager.connect();
    setWebsocketManager(wsManager);

    return () => {
      wsManager.disconnect(); // 컴포넌트가 언마운트될 때 WebSocket 연결 해제
    };
  }, [dispatch]);

  // WebSocketManager가 설정될 때까지 children을 렌더링하지 않음
  if (!websocketManager) {
    return null; // 또는 로딩 인디케이터를 보여줄 수도 있음
  }

  return (
    <WebSocketContext.Provider value={websocketManager}>
      {children}
    </WebSocketContext.Provider>
  );
}

// Custom Hook to use WebSocket Context
export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  console.log('context: ', context);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};    