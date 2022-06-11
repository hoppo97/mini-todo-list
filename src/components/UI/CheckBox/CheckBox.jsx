import React from 'react'
import {BsCheck} from 'react-icons/bs';
import AppContext from '../../../context';
import styles from './CheckBox.module.scss';


export const CheckBox = ({isComplited, todo}) => {
  const {toggleChecked} = React.useContext(AppContext);
  return (
    <div className={styles.CheckBox}>
      <BsCheck size={24} className={`${styles.bgc } ${isComplited ? styles.checked : null}`} onClick={() => toggleChecked(todo.id)}/>
      <label className={isComplited ? styles.labelChecked : styles.labelUnChecked}>{todo.text}</label>
    </div>
  )
}

