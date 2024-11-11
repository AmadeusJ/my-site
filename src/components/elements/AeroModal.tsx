import React from 'react';
import styles from './AeroModal.module.scss';

interface AeroModalProps {
  children: React.ReactNode;
  className?: string;
}

export default function AeroModal({ children, className }: AeroModalProps) {
  return (
    <div className={`${styles.aeroModal} ${className || ''}`}>
      {children}
    </div>
  );
}