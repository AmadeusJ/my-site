// 푸터 컴포넌트

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.name}>Jung DaWoon</p>
        <a href="mailto:dawoonjung1026@gmail.com" className={styles.email}>
          dawoonjung1026@gmail.com
        </a>
        <div className={styles.icons}>
          <a href="https://github.com/dawoonjung" target="_blank" rel="noopener noreferrer">
            {/* <FaGithub className={styles.icon} /> */}
          </a>
        </div>
        <p className={styles.designBy}>
          Designed and Built by <strong>Jung DaWoon</strong>
        </p>
      </div>
    </footer>
  );
}
