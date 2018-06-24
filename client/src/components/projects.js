import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    // eslint-disable-next-line
    let projectItems;
    if(this.props.projects){
      // eslint-disable-next-line
      projectItems=this.props.projects.map(project =>{
        return(
          <ProjectItem key={project.title} project={project}  />
        );

      });

    }



    return (
      <div className="MyProjects">
        {projectItems}
        <span>Hello, Click Click</span>

        <span> x</span>
        </div>
    );
  }

  }





export default Projects;
