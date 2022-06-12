import React from 'react';
import {TodoList} from '../TodosList/TodoList';
import {Input} from '../../UI/Input';
import {Button} from '../../UI/Button';

import styles from './AddTodo.module.scss';

const TODOS = [
  {
    id: 1,
    text: 'Приготовить',
    completed: true,
  },
  {
    id: 2,
    text: 'Поесть',
    completed: false,
  },
  {
    id: 3,
    text: 'Поспать',
    completed: true,
  },
];
export const AddTodo = () => {
  const [todos, setTodos] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [isInput, setIsInput] = React.useState(false);
  
  React.useEffect(() => {
    setTodos(TODOS);
  },[]);
  
  const toggleChecked = (todoId) => {
    console.log(1);
    setTodos(
      todos.map(todo => {
        if(todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    );
  };

  const setNameTodo = (e) => {
    setValue(e.target.value);
    value ? setIsInput(false) : setIsInput(true);
  };

  const blur = (e) => {
    if(value){
      setIsInput(false);
    } else {
      setIsInput(true);
    }
  };
  const addTodo = () => {
    if(value.trim().length){
      setTodos([
        ...todos,
        {
          id: Math.floor(Math.random() * 100000),
          text: value,
          completed: false,
        }
      ]);
    } else {
      setIsInput(true);
    };
      setValue('');
  };

  return (
    <div className={styles.AddTodo}>
      <div className={styles.err}>{isInput && 'Поле не может быть пустым!'}</div>
      <div className={styles.group}>
        <Input value={value} setNameTodo={setNameTodo} blur={blur}/>
        <Button type={'addBtn'} onClick={addTodo}>Добавить задачу</Button>
      </div>
      <TodoList todos={todos} toggleChecked={toggleChecked} />
    </div>
  )
}


