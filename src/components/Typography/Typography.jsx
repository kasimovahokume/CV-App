import PropTypes from 'prop-types';
import styles from './Typography.module.css';

const Typography = ({ variant = 'body', children, className = '' }) => {
  const Component = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : 'p';
  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'body', 'caption']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Typography;