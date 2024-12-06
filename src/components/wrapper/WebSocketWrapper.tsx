// components/WebSocketWrapper.tsx
"use client";

import { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWebsocketInstance } from '@/stores/slices/websocketSlice';
import { WebSocketManager } from '@/utils/websocket'; // WebSocketManager는 커스텀 WebSocket 관리 클래스라고 가정

export default function WebSocketWrapper({ children }: { children: ReactNode }) {
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

    // Store에 WebSocket instance를 저장해 다른 곳에서 사용 가능하게 하기
    dispatch(setWebsocketInstance(wsManager));

    return () => {
      wsManager.disconnect(); // 컴포넌트가 언마운트될 때 WebSocket 연결 해제
    };
  }, [dispatch]);

  return <>{children}</>;
}
