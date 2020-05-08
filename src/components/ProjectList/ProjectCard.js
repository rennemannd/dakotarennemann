import React from 'react';
import "./ProjectList.css"

const ProfileCard = (props) => {
    return (
        <div className="projectCard">
            <img src={props.project.picture} alt="project screenshot"/>
            <h4>{props.project.name}</h4>
        </div>
    );
};

export default ProfileCard;