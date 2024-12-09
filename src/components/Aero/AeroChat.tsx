// AeroChat.tsx
import React, { useEffect, useState, useRef, MutableRefObject, useCallback } from "react";
import { motion } from 'framer-motion';
import { useWebSocket } from '@/components/context/WebSocketContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/stores/store';
import { ContactChat, sendMessage } from '@/stores/slices/contactSlice';
import { useInView } from 'react-intersection-observer';
import styles from './AeroChat.module.scss';
import { getOrCreateUserId, getUserId } from "@/utils/userUtils";
import { LottieRefCurrentProps } from 'lottie-react';

interface AeroChatProps {
  lottieRef: MutableRefObject<LottieRefCurrentProps> | null;
}

export default function AeroChat({ lottieRef }: AeroChatProps) {
  const websocket = useWebSocket();
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.contact.messages) as ContactChat[];
  const [input, setInput] = useState("");
  const hasSentInitialMessage = useRef(false);
  const [userId, setUserId] = useState('');
  // useInView를 사용하여 AeroChat의 가시성을 추적
  const { ref, inView } = useInView({ threshold: 0.8 });

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  console.log('messages: ', messages);

  useEffect(() => {
    if (inView && !messages.length && !hasSentInitialMessage.current) {
      const { userId, isNew } = getUserId();
      setUserId(userId);
      // websocket.sendMessage('안녕하세요! 무엇을 도와드릴까요?');
      const greetingMessage = {
        sender_id: 'jdw',
        receiver_id: userId,
        content: '안녕하세요! 무엇을 도와드릴까요?',
        is_system_message: true,
      }
      dispatch(sendMessage(greetingMessage));
      // websocket.sendMessage(greetingMessage);
      hasSentInitialMessage.current = true;
    }
  }, [inView, messages, dispatch]);

  useEffect(() => {
    // 메시지 추가 시 항상 스크롤을 맨 아래로 이동
    scrollToBottom();
  }, [messages]);

  // 메시지 보내기
  const handleSendMessage = async (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    // IME 입력 중인지 확인
    if (event.nativeEvent.isComposing) {
      return; // IME 입력 중이면 메시지를 전송하지 않음
    }


    if (input.trim()) {
      // Send the message to the WebSocket server
      websocket.sendMessage({
        sender_id: userId,
        receiver_id: 'jdw',
        content: input,
      });
      // Store the message in the Redux store
      dispatch(sendMessage({
        sender_id: userId,
        receiver_id: 'jdw',
        content: input,
      }));
      setInput("");
      scrollToBottom();
      console.log("이거 . 왜두번실행됌???")
      // Play the Lottie animation
      if (lottieRef?.current) {
        const lottieInstance = lottieRef.current;
        // Ensure the animation starts from the beginning
        lottieInstance.goToAndStop(0, true);
        // Play the animation
        lottieInstance.play();
        // Wait for the animation to complete
        await new Promise<void>((resolve) => {
          const onComplete = () => {
            resolve();
          };
        });
        // Stop the animation
        lottieInstance.stop();
        // Reset the animation state if needed
        lottieInstance.goToAndStop(0, true);
      }
    }
  };

  // 메시지 애니메이션 정의
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className={styles.aeroChat} ref={ref}>
      <div className={styles.aeroChatMessages} ref={chatContainerRef}>
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
          onKeyUp={(e) => {
            if (e.key === 'Enter' && input.trim()) {
              handleSendMessage(e);
            }
          }}
        />
        <button
          type="button"
          className={styles.sendButton}
          onClick={handleSendMessage}
          disabled={!input.trim()}
        >
          보내기
        </button>
      </div>
    </div>
  )
}
