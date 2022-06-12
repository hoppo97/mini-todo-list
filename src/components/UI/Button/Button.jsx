
import styles from './Button.module.scss';

export const Button = ({children, onClick, type}) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>{children}</button>
  )
}

