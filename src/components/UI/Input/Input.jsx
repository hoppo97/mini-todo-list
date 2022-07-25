import React from 'react'
import styles from './input.module.scss';

export const Input = ({value, setNameTodo, placeholder = 'Введите название задачи', onKeyPress}) => {
  return (
      <input 
        className={styles.input} 
        placeholder={placeholder} 
        value={value} 
        onKeyPress={onKeyPress} 
        onChange={setNameTodo} type="text" 
      />
  )
}


