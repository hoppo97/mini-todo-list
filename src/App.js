import './App.scss';
import React from 'react';
import AppContext from './context';

import {TodoList} from './components/Todos/TodosList';
import {Input} from './components/UI/Input';
import {Button} from './components/UI/Button';

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


function App() {

  const [todos, setTodos] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [isInput, setIsInput] = React.useState(false);
 
  React.useEffect(() => {
    setTodos(TODOS);
  },[]);

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

  const toggleChecked = (todoId) => {
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

  const textTodo = (e) => {
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

  return (
    <AppContext.Provider value={{
      todos,
      toggleChecked,
    }}>
        <div className="App">
          <h1>Ваш список задач!</h1>
          <h2>Добавьте задачу!</h2>
          <div className="err">{isInput && 'Поле не может быть пустым!'}</div>
          <Input text={value} textTodo={textTodo} blur={blur}/>
          <Button onClick={addTodo}>Добавить задачу</Button>
          <TodoList todos={todos} />
        </div>
    </AppContext.Provider>
  )
}
export default App;
