import React, { useState } from 'react';
import './App.css';
import TodoBar from './components/TodoBar';
import TodoList from './components/TodoList';
import Header from './components/Header';

const emptyTodo = {
  done: false,
  text: '',
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(emptyTodo);

  const handleBarChange = (text) => {
    var newTodo = Object.assign({}, emptyTodo, { text });

    setNewTodo(newTodo);
  }

  const handleBarClick = () => {
    var newTodos = todos.slice();
    newTodos.push(newTodo);

    setTodos(newTodos);
    setNewTodo(emptyTodo);
  }

  const handleDoneChange = (index) => {
    var newTodos = todos.slice();
    newTodos[index].done = !newTodos[index].done;

    setTodos(newTodos);
  }

  const handleDeleteClick = (index) => {
    var newTodos = todos.slice();
    newTodos.splice(index, 1); //remove 1 element from index position

    setTodos(newTodos);
  }

    return (
      <div className="App">
        <Header />
        <TodoBar
          onChange={(e) => handleBarChange(e)}
          onClick={() => handleBarClick()}
          text={newTodo.text}
        />
        <TodoList
          todos={todos}
          onDoneChange={(idx) => handleDoneChange(idx)}
          onDeleteClick={(idx) => handleDeleteClick(idx)}
        />
      </div>
    );
}

export default App;
