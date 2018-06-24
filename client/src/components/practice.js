import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Todo from './components/todo';



class Todolist extends Component {
  constructor(){
    super();
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

    }
    }

  render() {
    var data;
    var onDelete=this.onDelete;
    data=this.state.routine.map(function(todos){
      return(
        <Todo key={todos} todos={todos} onDelete={onDelete} />
      )
    })
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
    // eslint-disable-next-line
    var state=this.state.routine;
    this.setState({
      state:update
    })

    };



  }



export default Todolist;
