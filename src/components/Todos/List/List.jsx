import React from 'react'
import { Filters } from '../../Filters';
import {Tasks} from '../Tasks';
import styles from './List.module.scss';


export const List = ({tasks}) => {
  const [isActive, setIsActive] = React.useState('all');
  const result = isActive === 'all' ? tasks : tasks.filter(item => item.completed === isActive);

  const changeIsActive = (filtered) => {
    setIsActive(filtered)
  }

  if(!tasks) return null;
  return (
    <div className={styles.listGroup}>
      <Filters changeIsActive={changeIsActive} isActive={isActive}/>
      <ul className={styles.list}>
        {result.length > 0 ? result.map(item => (
            <Tasks key={item.id} task={item}/>
          ) 
        ) : <div>Пусто</div> }
      </ul>
    </div>
  )
};

