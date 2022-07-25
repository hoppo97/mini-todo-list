import './App.scss';
import React from 'react';
import AppContext from './context';

import {List} from './components/Todos/List';
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
  const [tasks, setTasks] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [isInput, setIsInput] = React.useState(null);

  React.useEffect(() => {
    setIsInput(false)
    setTasks(TODOS);
  },[]);

  const addTodo = () => {
    if(value.trim().length){
      setTasks([
        ...tasks,
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
    setTasks(
      tasks.map(todo => {
        if(todo.id !== todoId) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    );
  };

  const setNameTodo = (e) => {
      console.log(e.target.value);
      setValue(e.target.value);
      value.length >= 0 ? setIsInput(false) : setIsInput(true);
  };

  const onKeyPress = (e) => {
    e.code === 'Enter' && addTodo()
  }

  return (
    <AppContext.Provider value={{
      toggleChecked,
    }}>
        <div className="App">
          <h1>Ваш список задач!</h1>
          <h2>Добавьте задачу!</h2>
          <div className="err">{isInput &&  'Поле не может быть пустым!'}</div>
          <div className="addTodo">
            <Input value={value} setNameTodo={setNameTodo} onKeyPress={onKeyPress}/>
            <Button type={'addBtn'} onClick={addTodo}>Добавить задачу</Button>
          </div>
          <List tasks={tasks} />
        </div>
    </AppContext.Provider>
  )
}
export default App;
