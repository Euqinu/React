import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Practice2 from './practice2';

class Practice extends Component {
  render() {
    // eslint-disable-next-line
    let myInfo;
    myInfo=this.props.projects.map(function(project){
      return(
        <Practice2 project={project}/>
      )
    })
    return (
      <div className="PracticeClass">
      {myInfo}

      </div>
    );
  }
}

export default Practice;
