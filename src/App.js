import './App.scss';
import React from 'react';
import AppContext from './context';

import {TodoList} from './components/Todos/TodosList';
import {Input} from './components/UI/Input';
import {Button} from './components/UI/Button';

const TODOS = [
];

function App() {

  const [todos, setTodos] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [inInput, setInInput] = React.useState(false);
 
  React.useEffect(() => {
    setTodos(TODOS);
  }, []);

  const addTodo = (todo) => {
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
      setInInput(true);
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

  const search = (value) => {
      setValue(value);
      value ? setInInput(false) : setInInput(true);
  };

  const blur = (e) => {
    if(value){
      setInInput(false);
    } else {
      setInInput(true);
    }
  };

  return (
    <AppContext.Provider value={{
      todos,
      value,
      toggleChecked,
      blur
    }}>
        <div className="App">
          <h1>Ваш список дел!</h1>
          <h2>Добавьте задачу!</h2>
          <div className="err">{inInput && 'Поле не может быть пустым!'}</div>
          <Input text={value} search={search} blur={blur}/>
          <Button onClick={addTodo}>Добавить задачу</Button>
          <TodoList todos={todos}/>
        </div>
    </AppContext.Provider>
  )
}
export default App;
