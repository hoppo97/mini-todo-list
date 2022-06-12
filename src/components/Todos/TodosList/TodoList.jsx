import React from 'react'
import {TodoItem} from '../TodoItem';
import { Button } from '../../UI/Button';
import styles from './TodosList.module.scss';

const filter = [
  {
    id: 1,
    title:'Все задачи',
    filter: 'all'
  },
  {
    id: 2,
    title:'Выполненые задачи',
    filter: true
  },
  {
    id: 3,
    title:'Активные задачи',
    filter: false
  }, 
];


export const TodoList = ({todos, toggleChecked}) => {
  const [isActive, setIsActive] = React.useState('all');
  const result = isActive === 'all' ? todos :  todos.filter(item => item.completed === isActive);
  if(!todos) return null;

  return (
    <>
      <div className={styles.todosList}>
        {filter.map((item) => (
            <Button
              key={item.id}
              type={isActive === item.filter ? 'active' : ''}
              onClick={() => setIsActive(item.filter)}
            >
              {item.title}
            </Button>
          ))}
      </div>
      <ul className={styles.todosList}>
        {result.length > 0 ? result.map(item => (
            <TodoItem key={item.id} todo={item} toggleChecked={toggleChecked}/>
          ) 
        ) : <div>Пусто</div> }
      </ul>
      
    </>
  )
};

