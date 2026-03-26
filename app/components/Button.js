import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ href, variant = 'primary', children, onClick, type = 'button' }) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
        <span className={styles.arrow}>→</span>
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
      <span className={styles.arrow}>→</span>
    </button>
  );
}
