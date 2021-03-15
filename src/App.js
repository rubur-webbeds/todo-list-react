import React, { Component } from 'react';
import './App.css';
import TodoBar from './components/TodoBar';
import TodoList from './components/TodoList';

const emptyTodo = {
  check: false,
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

  handleChange(text) {

    this.setState({
      newTodo: Object.assign(emptyTodo, {text}),
    });
  }

  handleClick() {
    var todos = this.state.todos.slice();
    todos.push(this.state.newTodo);

    this.setState({
      todos,
      newTodo: emptyTodo,
    });
  }

  render() {
    return (
      <div className="App">
        <TodoBar
          onChange={(e) => this.handleChange(e)}
          onClick={() => this.handleClick()}
          text={this.state.newTodo.text}
        />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
