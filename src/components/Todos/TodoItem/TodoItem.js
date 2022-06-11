import React from 'react';
import { CheckBox } from '../../UI/CheckBox';
import styles from './TodoItem.module.scss';

console.log(styles);


export const TodoItem = ({todo}) => {
  return (
    <li className={styles.todoItem}>
      <CheckBox isComplited={todo.completed} todo={todo} />
    </li>
  )
}


