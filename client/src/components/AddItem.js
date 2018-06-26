import React, { Component } from 'react';

class Additem extends Component{
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
      <input type="text" ref="newItem" />
      <input type="submit" value="submit" />
      </form>
    )
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }
}
export default Additem;
