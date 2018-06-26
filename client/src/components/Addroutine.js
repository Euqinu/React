import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Additem from './AddItem';
class Addroutine extends Component {
render(){
  return(

    <li>{this.props.value}
    <span onClick={this.handleDelete}> x </span>
    </li>


  )
}
handleDelete=()=>{
  this.props.onDelete(this.props.value);

}
}

export default Addroutine;
