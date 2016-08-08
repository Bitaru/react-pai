import styles from './styles.css';

export default ({
  settings,
  molecules
}) => (
  <div className={styles.wrap} style={{ backgroundColor: settings.background }}>
    <div className={styles.container}>
      <div className={styles.side}>
        <div className={styles.rightSideComtainer}>
          {molecules.get('Main')}
        </div>
      </div>
      <div className={styles.side}>
        <div className={styles.rightSideComtainer}>
          {molecules.get('Second')}
        </div>
      </div>
      <div className={styles.side}>
        <div className={styles.rightSideComtainer}>
          {molecules.get('Third')}
        </div>
      </div>
      <div className={styles.side}>
        <div className={styles.rightSideComtainer}>
          {molecules.get('Forth')}
        </div>
      </div>
    </div>
  </div>
);