import React from 'react';
import "./ProjectList.css"

const ProfileCard = (props) => {
    return (
        <div className="projectCard">
            <img src={props.project.picture} alt="project screenshot"/>
            <h4>{props.project.name}</h4>
            <p>{props.project.description}</p>
            <a href={props.project.link} target="_blank" rel="noopener noreferrer">Github</a>
        </div>
    );
};

export default ProfileCard;