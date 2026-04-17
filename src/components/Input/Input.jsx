import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({label, id, type = "text", ...props}) => {
  return (
      <div className={styles.inputContainer}>
        <input
          required
          className={styles.inputField}
          placeholder={id}
          type={type}
          {...props}
        />
        <label 
        className={styles.usernameLabel} 
        htmlFor={id}>
          {label}
        </label>
        <svg viewBox="0 0 448 512" className={styles.userIcon}>
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path>
        </svg>
      </div>
  );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string
}
export default Input;