import './App.scss';
import React from 'react';
import { AddTodo } from './components/Todos/AddTodo';

function App() {
  
  return (
    <div className="App">
      <h1>Ваш список задач!</h1>
      <h2>Добавьте задачу!</h2>
      <AddTodo />
    </div>
  )
}
export default App;
