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
  // 상태 추가: AeroChat 렌더링 여부 관리
  const [isChatReady, setIsChatReady] = useState(false);

  // const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const { userId, isNew } = getUserId();

    // 이전 채팅 메시지 가져오기
    const loadMessages = async () => {
      await dispatch(fetchPrevChatMessagesThunk({ user_id: userId }));
      setIsChatReady(true); // dispatch 완료 후 렌더링 상태 업데이트
    };

    loadMessages();
  }, [dispatch]);

  return (
    <section className={`section ${styles.contactSection}`}>
      {/* 채팅 영역 */}
      <motion.div className={styles.contactChat}>
        <AeroCard className={styles.contactCard}>
          {isChatReady ? <AeroChat lottieRef={contactRef} /> : <p>Loading chat...</p>}
        </AeroCard>
      </motion.div>

      {/* 컨텐츠 영역 */}
      <div className={styles.contactContents}>

        {/* 컨텐츠 영역 소개 */}
        <p>
          Chat을 통해 실시간으로 저와 소통해 보세요! 편하게 궁금한 점을 물어보실 수 있습니다.
        </p>
        <p>
          Email도 준비되어 있으니, 더 긴 내용을 전하고 싶으실 때 활용해 주세요.
        </p>

        <div className={styles.contactFormWrapper}>
          <div className={styles.contactArea}>
            <div className={styles.contactButtons}>
              {/* 경력기술서 다운로드 버튼 */}
              <Tooltip content={
                <div className='px-1 py-2'>
                  <div className='text-lg font-bold'>Resume</div>
                  <div className='text-sm'>저의 경력기술서를 다운로드 하실 수 있습니다.</div>
                </div>
              } showArrow color="primary" placement="top">
                <motion.div>
                  <ResumeButton />
                </motion.div>
              </Tooltip>
              {/* About Me 이동 버튼 */}
              <Tooltip content={
                <div className='px-1 py-2'>
                  <div className='text-lg font-bold'>About Me</div>
                  <div className='text-sm'>저에 대해 더 알아보시겠어요?</div>
                </div>
              } showArrow color="primary" placement="top">
                <motion.div>
                  <AboutMeButton />
                </motion.div>
              </Tooltip>
            </div>
            {/* 이메일 폼 */}
            <div className={styles.emailFormSection}>
              <EmailForm lottieRef={contactRef} />
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
