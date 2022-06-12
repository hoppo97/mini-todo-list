
import styles from './button.module.scss';

export const Button = ({children, onClick, type}) => {
  return (
    <button onClick={onClick} className={`${styles.addTask} ${styles[type]}`}>{children}</button>
  )
}

