import styles from './Avatar.module.css';

const Avatar = ({ name = "User" }) => {
  return (
    <div className={styles.avatar}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;