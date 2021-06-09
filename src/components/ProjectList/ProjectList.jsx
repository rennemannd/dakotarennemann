import React from 'react';
import projects from '../../assets/projects.json';
import ProjectCard from './ProjectCard';
import './ProjectList.css';

const ProjectList = () => {
  const list = projects.projects;

  return (
    <div className="projectList">
      {list.map((project, i) => {
        return <ProjectCard key={i} project={list[i]} />;
      })}
    </div>
  );
};

export default ProjectList;
