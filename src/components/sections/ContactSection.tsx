// ContactSection.tsx

import React, { useEffect, useState } from 'react';
import AeroCard from '../Aero/AeroCard';
import AeroChat from '../Aero/AeroChat';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.scss';
import { WebSocketManager } from '../../utils/websocket';
import EmailForm from '../element/EmailForm';
import ResumeButton from '../element/ResumeButton';
import AboutMeButton from '../element/AboutMeButton';



export default function ContactSection() {
  const [messages, setMessages] = useState<string[]>([]);
  const [websocket, setWebsocket] = useState<WebSocketManager | null>(null);



  const [testStatus, setTestStatus] = useState<string>("Not started");

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const runTests = async () => {
    setTestStatus("Running...");

    // Simulate rendering initial messages
    setMessages(["Initial message"]);
    await delay(1000);

    // Simulate sending a message
    setMessages((prev) => [...prev, "Test message 1"]);
    await delay(1000);

    // Simulate clearing the input
    setMessages((prev) => [...prev, "Test message 2"]);
    await delay(1000);

    setMessages((prev) => [...prev, "Test message 3"]);
    await delay(1000);

    setMessages((prev) => [...prev, "Test message 4"]);
    await delay(1000);

    setTestStatus("All tests passed!");
  };

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
        {/* 테스트 버튼 */}
        <button onClick={runTests} style={{ marginTop: "20px", padding: "10px 20px" }}>
          Run Tests
        </button>
        <p>Test Status: {testStatus}</p>

        {/* 컨텐츠 영역 소개 */}
        <p>
          If you have any questions or would like to discuss a project, please feel free to contact me using the form below.
        </p>

        <div className={styles.contactFormWrapper}>
          <div className={styles.contactArea}>
            <div className={styles.contactButtons}>
              {/* 경력기술서 다운로드 버튼 */}
              <motion.div>
                <ResumeButton />
              </motion.div>
              {/* About Me 이동 버튼 */}
              <motion.div>
                <AboutMeButton />
              </motion.div>
            </div>
            {/* 이메일 폼 */}
            <div className={styles.emailFormSection}>
              <EmailForm />
            </div>
          </div>
          <div className={styles.lottieArea}>
            Lottie
          </div>
        </div>

      </div>
    </section>
  );
}
