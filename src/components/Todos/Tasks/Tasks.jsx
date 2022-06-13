import React from 'react';
import { CheckBox } from '../../UI/CheckBox';
import styles from './Tasks.module.scss';

export const Tasks = ({task}) => {
  return (
    <li className={styles.todoItem}>
      <CheckBox isComplited={task.completed} task={task} />
    </li>
  )
}


