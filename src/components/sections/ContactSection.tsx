// ContactSection.tsx

import React, { useEffect, useState, useRef } from 'react';
import AeroCard from '../Aero/AeroCard';
import AeroChat from '../Aero/AeroChat';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.scss';
import EmailForm from '../element/EmailForm';
import ResumeButton from '../element/ResumeButton';
import AboutMeButton from '../element/AboutMeButton';
import Lottie from 'lottie-react';
import animationContact from '@/assets/animations/paper-plane.json';
import { Tooltip } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { fetchPrevChatMessagesThunk } from '@/stores/slices/contactSlice';
import { getOrCreateUserId, getUserId } from '@/utils/userUtils';
import { AppDispatch } from '@/stores/store';

export default function ContactSection() {
  const contactRef = useRef<Lottie>(null);
  const dispatch: AppDispatch = useDispatch();

  const [testStatus, setTestStatus] = useState<string>("Not started");

  // const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const { userId, isNew } = getUserId();
    // 이전 채팅 메시지 가져오기
    dispatch(fetchPrevChatMessagesThunk({ user_id: userId }));

  }, [dispatch]);

  return (
    <section className={`section ${styles.contactSection}`}>
      {/* 채팅 영역 */}
      <motion.div className={styles.contactChat}>
        <AeroCard className={styles.contactCard}>
          <AeroChat lottieRef={contactRef} />
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
