// AeroChat.tsx
import React, { useState } from "react";
import { motion } from 'framer-motion';

import styles from './AeroChat.module.scss';

export default function AeroChat({ messages, onSendMessage }: { messages: string[], onSendMessage: (message: string) => void }) {
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  // 메시지 애니메이션 정의
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className={styles.aeroChat}>
      <div className={styles.aeroChatMessages}>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className={`${styles.message} ${index % 2 === 0 ? styles.receivedMessage : styles.sentMessage
              }`}
            initial="hidden"
            animate="visible"
            variants={messageVariants}
          >
            <div className={styles.messageBubble}>
              <p>{message}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.chatForm}>
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          className={styles.chatInput}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className={styles.sendButton}
          onClick={handleSendMessage}
        >
          보내기
        </button>
      </div>
    </div>
  )
}
