import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Additem from './AddItem'
import Addroutine from './Addroutine';

class List extends Component{
  constructor(){
    super();
    this.state={
      routine:[
        'Have to eat',
        'have to finish the work',
        'have to go out'
      ]
    }
  }
  render(){
    let habits=this.state.routine;
    habits=habits.map((val,index)=>{
      return <Addroutine key={index} value={val} onDelete={this.onDelete}  />
    })
    return(
      <div>
      {habits}
      <Additem onAdd={this.onAdd}/>
      </div>
    )
  }
  onDelete=(item)=>{
    let update=this.state.routine.filter((val,index)=>{
      return (item !== val)
    })
    this.setState({
      routine:update
    })
  }

onAdd=(item)=>{
    let updated=this.state.routine;
    updated.push(item);
    this.setState({
      routine:updated
    })
  }

}
export default List;
