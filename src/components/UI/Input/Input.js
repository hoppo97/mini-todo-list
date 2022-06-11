import React from 'react'
import styles from './input.module.scss';

export const Input = ({text, search, blur}) => {
  return (
      <input className={styles.input} placeholder='Введите задачу' value={text} onBlur={blur} onChange={e => search(e.target.value)} type="text" />
  )
}


