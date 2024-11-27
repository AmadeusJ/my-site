// ContactSection.tsx

import React, { useEffect, useState } from 'react';
import AeroCard from '../Aero/AeroCard';
import AeroChat from '../Aero/AeroChat';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.scss';
import { WebSocketManager } from '../../utils/websocket';


export default function ContactSection() {
  const [messages, setMessages] = useState<string[]>([]);
  const [websocket, setWebsocket] = useState<WebSocketManager | null>(null);

  useEffect(() => {

    // WebSocket 연결
    const websocketManager = new WebSocketManager((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    websocketManager.connect();
    setWebsocket(websocketManager);

    return () => {
      websocketManager.disconnect();
    };

  }, []);

  const sendMessage = (message: string) => {
    if (!websocket) {
      return;
    }
    websocket.sendMessage(message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <section className={`section ${styles.contactSection}`}>
      {/* 채팅 영역 */}
      <motion.div className={styles.contactChat}>
        <AeroCard className={styles.contactCard}>
          <AeroChat messages={messages} onSendMessage={sendMessage} />
        </AeroCard>
      </motion.div>

      {/* 컨텐츠 영역 */}
      <div className={styles.contactContents}>
        <h1>ContactForm</h1>
      </div>
    </section>
  );
}
