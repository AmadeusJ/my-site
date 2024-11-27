// AeroChat.tsx
import React from 'react';
import { motion } from 'framer-motion';

import styles from './AeroChat.module.scss';

export default function AeroChat({ messages, onSendMessage }: { messages: string[], onSendMessage: (message: string) => void }) {
  return (
    <div className={styles.aeroChat}>
      <div className={styles.aeroChatMessages}>
        <div className={`${styles.message} ${styles.receivedMessage}`}>
          <div className={styles.messageBubble}>
            <p>안녕하세요! 정다운입니다</p>
          </div>
        </div>
        <div className={`${styles.message} ${styles.sentMessage}`}>
          <div className={styles.messageBubble}>
            <p>Message 1</p>
          </div>
        </div>
      </div>

      <form className={styles.chatForm}>
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          className={styles.chatInput}
        />
        <button type="submit" className={styles.sendButton}>
          보내기
        </button>
      </form>
    </div>
  )
}
