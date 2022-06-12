import React from 'react';
import { CheckBox } from '../../UI/CheckBox';
import styles from './TodoItem.module.scss';

export const TodoItem = ({todo, toggleChecked}) => {
  return (
    <li className={styles.todoItem}>
      <CheckBox isComplited={todo.completed} todo={todo} toggleChecked={toggleChecked}/>
    </li>
  )
}


