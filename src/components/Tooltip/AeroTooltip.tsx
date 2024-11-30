import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from './AeroTooltip.module.scss';

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface AeroTooltipProps {
  text: string;
  children: ReactNode;
  position?: TooltipPosition;
  tooltipStyle?: React.CSSProperties;
}

const AeroTooltip: React.FC<AeroTooltipProps> = ({
  text,
  children,
  position = "top",
  tooltipStyle = {},
}) => {
  const bounceVariants = {
    hover: {
      y: [0, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const positionStyles: Record<TooltipPosition, React.CSSProperties> = {
    top: { bottom: "120%", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "120%", left: "50%", transform: "translateX(-50%)" },
    left: { right: "120%", top: "50%", transform: "translateY(-50%)" },
    right: { left: "120%", top: "50%", transform: "translateY(-50%)" },
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <motion.div
        className={styles.tooltip}
        variants={bounceVariants}
        initial={{ opacity: 0, transform: "translateY(10px)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        whileHover="hover"
        style={{
          position: "absolute",
          padding: "10px 15px",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.2)", // Aero 배경
          backdropFilter: "blur(10px)", // 블러 효과
          border: "1px solid rgba(255, 255, 255, 0.3)", // 얇은 테두리
          color: "#fff",
          fontSize: "14px",
          whiteSpace: "nowrap",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // 그림자
          ...positionStyles[position],
          ...tooltipStyle,
        }}
      >
        {text}
      </motion.div>
      {children}
    </div>
  );
};

export default AeroTooltip;