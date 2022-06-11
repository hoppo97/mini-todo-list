import React from 'react'
import styles from './input.module.scss';

export const Input = ({value, textTodo, blur, placeholder = 'Введите название задачи'}) => {
  return (
      <input className={styles.input} placeholder={placeholder} value={value} onBlur={blur} onChange={textTodo} type="text" />
  )
}


