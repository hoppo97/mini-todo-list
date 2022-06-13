import React from 'react'
import {Tasks} from '../Tasks';
import { Button } from '../../UI/Button';
import styles from './List.module.scss';
import {filter} from './../../../utils.js'


export const List = ({tasks}) => {
  const [isActive, setIsActive] = React.useState('all');
  const result = isActive === 'all' ? tasks :  tasks.filter(item => item.completed === isActive);

  if(!tasks) return null;
  return (
    <>
      <div>
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
      <ul>
        {result.length > 0 ? result.map(item => (
            <Tasks key={item.id} task={item}/>
          ) 
        ) : <div>Пусто</div> }
      </ul>
      
    </>
  )
};

