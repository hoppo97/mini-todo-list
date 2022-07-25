import React from 'react'
import {BsCheck} from 'react-icons/bs';
import AppContext from '../../../context';
import styles from './CheckBox.module.scss';


export const CheckBox = ({isComplited, task}) => {
  const {toggleChecked} = React.useContext(AppContext);
  
  return (
    <>
      <BsCheck size={24} className={`${styles.bgc } ${isComplited ? styles.checked : null}`} onClick={() => toggleChecked(task.id)}/>
      <label className={isComplited ? styles.labelChecked : styles.labelUnChecked}>{task.text}</label>
    </>
  )
}


