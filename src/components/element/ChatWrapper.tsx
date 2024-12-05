import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import AeroChat from '@/components/Aero/AeroChat';
import styles from './ChatWrapper.module.scss';

type AeroChatWrapperProps = {
  messages: string[];
  onSendMessage: (message: string) => void;
};

export default function AeroChatWrapper({ messages, onSendMessage }: AeroChatWrapperProps) {
  const [isChatOpen, setIsChatOpen] = useState(false); // 채팅창 열림 상태
  const [isCloseComplete, setIsCloseComplete] = useState(true); // 채팅창이 완전히 닫힌 후의 상태

  const handleToggleChat = () => {
    if (isChatOpen) {
      // 채팅창이 열려 있는 상태라면 닫기 시작
      setIsCloseComplete(false); // 닫기 완료 전에는 버튼을 표시하지 않음
    } else {
      // 채팅창이 닫혀 있는 상태라면 열기 시작
      setIsChatOpen(true);
    }
  };

  return (
    <div className={styles.aeroChatWrapper}>
      {/* 왼쪽 하단의 채팅 토글 버튼 (채팅창이 닫혀 있을 때만 표시) */}
      {isCloseComplete && !isChatOpen && (
        <motion.button
          className={styles.chatToggleButton}
          onClick={handleToggleChat}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
        >
        </motion.button>
      )}

      {/* 채팅 창 */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            className={styles.aeroChat}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { type: 'spring', stiffness: 200, damping: 20 },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: { type: 'spring', stiffness: 200, damping: 20 },
            }}
            style={{ transformOrigin: 'bottom left' }} // 애니메이션의 원점 설정
            onAnimationComplete={(definition) => {
              if (definition === "exit") {
                setIsChatOpen(false); // 채팅창을 닫은 상태로 업데이트
                setIsCloseComplete(true); // 애니메이션 완료 후 버튼을 표시
              }
            }}
          >
            {/* 채팅창의 닫기 버튼 */}
            <button
              className={styles.closeButton}
              onClick={() => setIsChatOpen(false)}
            >
              ✖️
            </button>
            <AeroChat messages={messages} onSendMessage={onSendMessage} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
