import { getOrCreateUserId } from "./userUtils";


export class WebSocketManager {
  private socket: WebSocket | null = null;

  constructor(private onMessage: (message: string) => void) { }

  connect(): void {
    if (this.socket) {
      console.log('WebSocket is already connected');
      return;
    }

    // userId가 없으면 생성 후 localStorage에 저장
    const userId = getOrCreateUserId();

    const websocketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;
    if (!websocketUrl) {
      throw new Error('WebSocket URL is not defined');
    }
    this.socket = new WebSocket(`${websocketUrl}?user_id=${userId}`);

    this.socket.onopen = () => {
      console.log('WebSocket connected');
    };

    this.socket.onmessage = (event) => {
      this.onMessage(event.data);
    };

    this.socket.onclose = () => {
      console.log('WebSocket closed');
      this.socket = null;
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.socket = null;
    };
  }

  sendMessage(message: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
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
