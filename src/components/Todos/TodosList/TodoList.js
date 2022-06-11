import React from 'react'
import {TodoItem} from '../../Todos/TodoItem';
import { Button } from '../../UI/Button';
import styles from './TodosList.module.scss';
export const TodoList = ({todos}) => {
  const [filterTodo, setFilterTodo] =  React.useState(todos);

  React.useEffect(() => {
    setFilterTodo(todos);
    console.log(1);
  }, [todos]);

  const todoFilter = (completed) => {
    if(completed === 'all') {
      setFilterTodo(todos);
    } else {
      setFilterTodo([...todos].filter(item => item.completed === completed));
    }
  };

  console.log(filterTodo);
  return (
    <>
      <ul className={styles.TodosList}>
        {filterTodo.length > 0 ? filterTodo.map(item => (
            <TodoItem key={item.id} todo={item}/>
          ) 
        ) : <div>Пусто</div> }
      </ul>
     
      <div className="filterButtons">
        <Button type={'all'} onClick={() => todoFilter('all')}>Все задачи</Button>
        <Button type={'green'} onClick={() => todoFilter(true)}>Выполненые задачи</Button>
        <Button type={'blue'} onClick={() => todoFilter(false)}>Активные задачи</Button>
      </div>
    </>
  )
}

