import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';


class AddItem extends Component {
  static defaultProps={
    categories:['web design','coding','studying']
  }
  render() {
    let addItem=this.props.categories.map(function(item){
      return(
        <option key={item} value="item">{item}</option>
      )
    })
    return (
      <div>
        <h3>Add projects</h3>

            <label>Category</label><br />
            <select ref="category">
            {addItem}
            </select>
          </div>

    );

}
}

export default AddItem;
