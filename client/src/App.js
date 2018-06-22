import React, { Component } from 'react';
//import logo from './logo.svg';
import Projects from './components/projects';
import Practice from './components/practice';
import AddItem from './components/AddItem';

import './App.css';


class App extends Component {
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
    ]

    }
    }

  render() {



    return (
      <div className="App">
        my app
        <Projects projects={this.state.projects}/>
        <Practice projects={this.state.info} />
        <AddItem />

      </div>
    );
  }
}

export default App;
