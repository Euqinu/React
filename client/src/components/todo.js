import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class Todo extends Component {

render() {
return(

  <li className="todoClass">
  <div>
      <span> {this.props.todos}</span>
      <span onClick={this.handleDelete}> x </span>
      </div>
      </li>
)
};
  handleDelete=()=>{
    this.props.onDelete(this.props.todos);
  }

}

export default Todo;
