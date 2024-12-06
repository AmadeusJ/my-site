// ContactSection.tsx

import React, { useEffect, useState, useRef } from 'react';
import AeroCard from '../Aero/AeroCard';
import AeroChat from '../Aero/AeroChat';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.scss';
import { WebSocketManager } from '../../utils/websocket';
import EmailForm from '../element/EmailForm';
import ResumeButton from '../element/ResumeButton';
import AboutMeButton from '../element/AboutMeButton';
import Lottie from 'lottie-react';
import animationContact from '@/assets/animations/paper-plane.json';
import { Tooltip } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { fetchPrevChatMessagesThunk, sendMessage } from '@/stores/slices/contactSlice';
import { getOrCreateUserId } from '@/utils/userUtils';
import { AppDispatch } from '@/stores/store';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { ContactChat } from '@/stores/slices/contactSlice';

export default function ContactSection() {
  const contactRef = useRef<Lottie>(null);
  // const [messages, setMessages] = useState<string[]>([]);
  const [websocket, setWebsocket] = useState<WebSocketManager | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.contact.messages);

  const [testStatus, setTestStatus] = useState<string>("Not started");

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  // const runTests = async () => {
  //   setTestStatus("Running...");
  //   contactRef.current?.play();

  //   // Simulate rendering initial messages
  //   setMessages(["Initial message"]);
  //   await delay(1000);

  //   // Simulate sending a message
  //   setMessages((prev) => [...prev, "Test message 1"]);
  //   await delay(1000);

  //   // Simulate clearing the input
  //   setMessages((prev) => [...prev, "Test message 2"]);
  //   await delay(1000);

  //   setMessages((prev) => [...prev, "Test message 3"]);
  //   await delay(1000);

  //   setMessages((prev) => [...prev, "Test message 4"]);
  //   await delay(1000);

  //   setTestStatus("All tests passed!");
  //   contactRef.current?.stop();
  // };

  useEffect(() => {
    const { userId } = getOrCreateUserId();
    // 이전 채팅 메시지 가져오기
    dispatch(fetchPrevChatMessagesThunk({ user_id: userId }));

  }, [dispatch]);

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

        {/* 컨텐츠 영역 소개 */}
        <p>
          If you have any questions or would like to discuss a project, please feel free to contact me using the form below.
        </p>

        <div className={styles.contactFormWrapper}>
          <div className={styles.contactArea}>
            <div className={styles.contactButtons}>
              {/* 경력기술서 다운로드 버튼 */}
              <Tooltip content={"Resume"} showArrow color="primary" placement="top">
                <motion.div>
                  <ResumeButton />
                </motion.div>
              </Tooltip>
              {/* About Me 이동 버튼 */}
              <Tooltip content={"About Me"} showArrow color="primary" placement="top">
                <motion.div>
                  <AboutMeButton />
                </motion.div>
              </Tooltip>
            </div>
            {/* 이메일 폼 */}
            <div className={styles.emailFormSection}>
              <EmailForm />
            </div>
          </div>
          <div className={styles.lottieArea}>
            <Lottie
              lottieRef={contactRef}
              animationData={animationContact}
              style={{ width: '100%', height: '100%' }}
              loop={false}
              autoplay={false}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
