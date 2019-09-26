import React from 'react';
import {Link, scroll, animateScroll } from 'react-scroll';

const NavLink = ({section, name}) => {
    return (
        <Link
        activeClass="active"
        to={section}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        >
            {name}
        </Link>
    )
}

export default NavLink;