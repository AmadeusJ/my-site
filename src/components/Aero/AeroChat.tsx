// AeroChat.tsx
import React, { useEffect, useState, useRef } from "react";
import { motion } from 'framer-motion';
import { useWebSocket } from '@/components/context/WebSocketContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/stores/store';
import { ContactChat, sendMessage } from '@/stores/slices/contactSlice';
import { useInView } from 'react-intersection-observer';
import styles from './AeroChat.module.scss';
import { getOrCreateUserId } from "@/utils/userUtils";

export default function AeroChat() {
  const websocket = useWebSocket();
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.contact.messages) as ContactChat[];
  const [input, setInput] = useState("");
  const hasSentInitialMessage = useRef(false);

  // useInView를 사용하여 AeroChat의 가시성을 추적
  const { ref, inView } = useInView({ threshold: 0.8 });


  console.log('messages: ', messages);

  useEffect(() => {
    if (inView && !messages.length && !hasSentInitialMessage.current) {
      // websocket.sendMessage('안녕하세요! 무엇을 도와드릴까요?');
      dispatch(sendMessage({
        sender_id: 'jdw',
        content: '안녕하세요! 무엇을 도와드릴까요?',
      }));
      hasSentInitialMessage.current = true;
    }
  }, [inView, messages, dispatch]);

  // 메시지 보내기
  const handleSendMessage = () => {
    // Get the user ID
    const { userId } = getOrCreateUserId();

    if (input.trim()) {
      // Send the message to the WebSocket server
      websocket.sendMessage({
        sender_id: userId,
        content: input,
      });
      // Store the message in the Redux store
      dispatch(sendMessage({
        sender_id: userId,
        content: input,
      }));
      setInput("");
    }
  };

  // 메시지 애니메이션 정의
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className={styles.aeroChat} ref={ref}>
      <div className={styles.aeroChatMessages}>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className={`${styles.message} ${message.sender_id === 'jdw' ? styles.receivedMessage : styles.sentMessage
              }`}
            initial="hidden"
            animate="visible"
            variants={messageVariants}
          >
            <div className={styles.messageBubble}>
              <p>{message.content}</p>
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
