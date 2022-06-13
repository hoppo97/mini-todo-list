import React from 'react'
import {Tasks} from '../Tasks';
import { Button } from '../../UI/Button';
import styles from './List.module.scss';

const filter = [
  {
    id: 1,
    title:'Все задачи',
    filter: 'all', 
    color: 'red'
  },
  {
    id: 2,
    title:'Выполненые задачи',
    filter: true,
    color: 'blue'
  },
  {
    id: 3,
    title:'Активные задачи',
    filter: false,
    color: 'green'
  }, 
];

export const List = ({todos}) => {
  const [isActive, setIsActive] = React.useState('all');
  const result = isActive === 'all' ? todos :  todos.filter(item => item.completed === isActive);

  if(!todos) return null;
  return (
    <>
      <div className={styles.todosList}>
        {filter.map((item) => (
            <Button
              key={item.id}
              type={isActive === item.filter ? 'active' : item.color}
              onClick={() => setIsActive(item.filter)}
            >
              {item.title}
            </Button>
          ))}
      </div>
      <ul className={styles.todosList}>
        {result.length > 0 ? result.map(item => (
            <Tasks key={item.id} task={item}/>
          ) 
        ) : <div>Пусто</div> }
      </ul>
      
    </>
  )
};

