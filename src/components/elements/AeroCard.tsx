
import React from 'react';
import styles from './AeroCard.module.css';

interface AeroCardProps {
  children: React.ReactNode;
  className?: string;
}

const AeroCard: React.FC<AeroCardProps> = ({ children, className }) => {
  return (
    <div className={`${styles.aeroCard} ${className || ''}`}>
      {children}
    </div>
  );
};

export default AeroCard;