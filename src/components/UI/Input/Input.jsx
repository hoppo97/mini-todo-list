import React from 'react'
import styles from './input.module.scss';

export const Input = ({text, textTodo, blur, placeholder = 'Введите название задачи'}) => {
  return (
      <input className={styles.input} placeholder={placeholder} value={text} onBlur={blur} onChange={textTodo} type="text" />
  )
}


