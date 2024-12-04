// 카테고리 버튼

import React from 'react';
import styles from './CategoryButton.module.scss';

interface CategoryButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryButton({ category, isActive, onClick }: CategoryButtonProps) {
  return (
    <button
      className={`${styles.categoryButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {category}
    </button>
  );
}