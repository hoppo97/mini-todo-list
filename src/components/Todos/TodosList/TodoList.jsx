import React from 'react'
import {TodoItem} from '../TodoItem';
import { Button } from '../../UI/Button';
import styles from './TodosList.module.scss';

export const TodoList = ({todos}) => {
  const [isActive, setIsActive] = React.useState('');
  
  const result = isActive === '' ? todos :  todos.filter(item => item.completed === isActive);
  
  
  if(!todos) return null;
  return (
    <>
      <ul className={styles.todosList}>
        {result.length > 0 ? result.map(item => (
            <TodoItem key={item.id} todo={item}/>
          ) 
        ) : <div>Пусто</div> }
      </ul>
      <div className={styles.todosList}>
        <Button type={'all'} onClick={() => setIsActive('')}>Все задачи</Button>
        <Button type={'green'} onClick={() => setIsActive(true)}>Выполненые задачи</Button>
        <Button type={'blue'} onClick={() => setIsActive(false)}>Активные задачи</Button>
      </div>
    </>
  )
};

