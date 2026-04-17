import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'save', onClick, ...props }) => {
  const isKreativ = variant === 'save' || variant === 'reset';

  if (isKreativ) {
    return (
      <button 
        className={`${styles.kreativBtn} ${styles[variant]}`} 
        onClick={onClick} 
        {...props}
      >
        <div className={styles.bg}></div>
        <div className={styles.wrap}>
          <div className={styles.content}>
            <span className={styles.buttonText}>{children}</span>
          </div>
        </div>
      </button>
    );
  }

  return (
    <button className={`${styles.btn} ${styles[variant]}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['save','reset','primary']),
    onClick: PropTypes.func,
}

export default Button;