import styles from './SectionTitle.module.css';

const SectionTitle = ({ children }) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{children}</h4>
      <div className={styles.line}></div>
    </div>
  );
};

export default SectionTitle;