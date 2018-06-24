import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
    <strong>  {this.props.project.title}</strong> : {this.props.project.category}
     <span onClick={this.handleDelete}> x </span>

      </li>
    );
  }
  handleDelete(){
    this.props.onDelete(this.props.project);
  }
}

export default ProjectItem;
