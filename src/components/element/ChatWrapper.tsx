import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import AeroChat from '@/components/Aero/AeroChat'; // 기존 AeroChat 컴포넌트를 가져옵니다.
import styles from './ChatWrapper.module.scss';

type ChatWrapperProps = {
  messages: string[];
  onSendMessage: (message: string) => void;
};

export default function AeroChatWrapper({ messages, onSendMessage }: ChatWrapperProps) {
  const [isChatOpen, setIsChatOpen] = useState(false); // 채팅창의 열림/닫힘 상태 관리

  return (
    <div className={styles.aeroChatWrapper}>
      {/* 왼쪽 하단의 채팅 토글 버튼 */}
      <motion.button
        className={styles.chatToggleButton}
        onClick={() => setIsChatOpen((prev) => !prev)}
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        {isChatOpen ? "➖" : "💬"}
      </motion.button>

      {/* 채팅 창 */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className={styles.aeroChat}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <AeroChat messages={messages} onSendMessage={onSendMessage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}