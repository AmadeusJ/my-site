import { getOrCreateUserId } from "./userUtils";
import { ContactChat } from "@/stores/slices/contactSlice";

export class WebSocketManager {
  private socket: WebSocket | null = null;

  constructor(private onMessage: (message: string) => void) { }

  connect(): void {
    if (this.socket) {
      return;
    }


    const { userId } = getOrCreateUserId();

    const websocketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;
    if (!websocketUrl) {
      throw new Error('WebSocket URL is not defined');
    }
    this.socket = new WebSocket(`${websocketUrl}?user_id=${userId}`);

    this.socket.onopen = () => {
      // WebSocket 연결 확인
    };

    this.socket.onmessage = (event) => {
      this.onMessage(event.data);
    };

    this.socket.onclose = () => {
      this.socket = null;
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.socket = null;
    };
  }

  sendMessage(message: ContactChat): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not connected');
    }
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}
