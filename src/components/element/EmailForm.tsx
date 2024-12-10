import React, { MutableRefObject, useState } from "react";
import AeroCard from "../Aero/AeroCard";
import styles from "./EmailForm.module.scss";
import { getUserId } from "@/utils/userUtils";
import { LottieRefCurrentProps } from "lottie-react";
import { useWebSocket } from '@/components/context/WebSocketContext';
import { ContactChat, sendMessage } from '@/stores/slices/contactSlice';
import { AppDispatch, RootState } from "@/stores/store";
import { useSelector, useDispatch } from "react-redux";
import { sendEmailThunk } from '@/stores/slices/contactSlice';

interface EmailFormProps {
  lottieRef: MutableRefObject<LottieRefCurrentProps> | null;
}

export default function EmailForm({ lottieRef }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const websocket = useWebSocket();
  const dispatch = useDispatch<AppDispatch>();
  const messages = useSelector((state: RootState) => state.contact.messages) as ContactChat[];


  const handleSendEmail = async (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (event.nativeEvent.isComposing) {
      return; // IME 입력 중이면 메시지를 전송하지 않음
    }

    const { userId } = getUserId();


    if (!email || !message) {
      setStatus("error");
      return;
    }

    let emailMessage = {
      sender_id: userId,
      receiver_id: 'jdw',
      content: `Email: ${email}\nMessage: ${message}`,
    }

    let notificationMessage = {
      sender_id: 'jdw',
      receiver_id: userId,
      content: `잠시만 기다려주세요..!`,
      is_system_message: true,
    }

    dispatch(sendEmailThunk({ user_id: userId, email: email, message: message }));

    // TODO : 이메일 처리 API에서 응답 줄것
    // websocket.sendMessage(notificationMessage);
    dispatch(sendMessage(notificationMessage));

    setEmail("");
    setMessage("");

    // setStatus("sending");
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
  };

  return (
    <div className={styles.emailForm}>
      <AeroCard>
        <div className={styles.form}>
          <h2>Contact Me</h2>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력해주세요..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="메일 내용을 작성해주세요..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className={styles.submitButton} onClick={handleSendEmail}>
            {status === "sending" ? "Sending..." : "Send Email"}
          </div>
          {status === "sent" && <p className={styles.successMessage}>Message sent successfully!</p>}
          {status === "error" && <p className={styles.errorMessage}>이메일과 내용을 입력해주세요..!</p>}
        </div>
      </AeroCard>
    </div>
  );
}