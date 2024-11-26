
import React from 'react';
import styles from './AeroCard.module.scss';

interface AeroCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const AeroCard: React.FC<AeroCardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={`${styles.aeroCard} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default AeroCard;