import React from 'react';
import './Navbar.css'
import {Link} from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return(
        <div className="navBar">
            <Link
                    className="Circle"
                    activeClass="active"
                    to="title"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                />
            <div className="navItems">
                <Link
                className="navItem"
                activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    About
                </Link>
                <a
                    className="navItem"
                    target='_blank'
                    rel="noopener noreferrer"
                    href="https://github.com/rennemannd/dakotarennemann/blob/master/src/assets/docs/Resume.pdf"
                >
                    Resume
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="xs" transform="up-6 right-4"/>
                </a>
            </div>
        </div>
    )
}

export default Navbar;