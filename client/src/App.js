import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Todo from './components/todo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Todolist />
            </div>
        );
    }
}

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state={
    projects:[
      {
        title:'BusinessA',
        category:'A'
      },
      {
        title:'BusinessB',
        category:'B'
      },
      {
        title:'BusinessC',
        category:'C'
      }
    ],
    info:[
      {
        name:'Unique',
        place:'Nepal'
      },
      {
        name:'Ryan',
        place:'Australia'
      }
    ],
    routine:[
      'eating',
      'sleeping',
      'running',
      'walking',
      'studying'
    ]

  };
    }

  render() {
    var habit=this.state.routine;
    var data;
    var onDelete=this.onDelete;
    data=habit.map((todos,index)=>{
      return(
        <Todo key={todos} todos={todos} onDelete={onDelete} />
      );
    });
    return (
      <div className="todoList">
        {data}
      </div>
    );
  }
  onDelete=(item)=>{
    var update=this.state.routine.filter((val,index)=>{
      return item !==val;
    });

    this.setState({
      habit:update
    });
}
    }
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








export default App;
