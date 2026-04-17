import styles from './Textarea.module.css';

const Textarea = ({ label, name, value, onChange, placeholder }) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        className={styles.textarea}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;