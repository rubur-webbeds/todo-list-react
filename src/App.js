import React, { Component } from 'react';
import './App.css';
import TodoBar from './components/TodoBar';
import TodoList from './components/TodoList';
import Header from './components/Header';

const emptyTodo = {
  done: false,
  text: '',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: emptyTodo,
    };
  }

  handleBarChange(text) {
    var newTodo = Object.assign({}, emptyTodo, { text });
    this.setState({
      newTodo,
    });
  }

  handleBarClick() {
    var todos = this.state.todos.slice();
    todos.push(this.state.newTodo);

    this.setState({
      todos,
      newTodo: emptyTodo,
    });
  }

  handleDoneChange(index) {
    var todos = this.state.todos.slice();
    todos[index].done = !todos[index].done;

    this.setState(todos);
  }

  handleDeleteClick(index) {
    var todos = this.state.todos.splice(index, 1); //remove 1 element from index position

    this.setState(todos);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoBar
          onChange={(e) => this.handleBarChange(e)}
          onClick={() => this.handleBarClick()}
          text={this.state.newTodo.text}
        />
        <TodoList
          todos={this.state.todos}
          onDoneChange={(idx) => this.handleDoneChange(idx)}
          onDeleteClick={(idx) => this.handleDeleteClick(idx)}
        />
      </div>
    );
  }
}

export default App;
