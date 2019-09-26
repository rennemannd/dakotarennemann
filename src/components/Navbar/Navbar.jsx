import React from 'react';
import NavItem from './NavLink';
import '../../styles/Navbar.css'
import { Link } from 'react-scroll';


const Navbar = () => {
    let allLinks = LINKS.slice(0,3);

    return(
        <nav className="navBar">
            <div className="navItems">
                {allLinks.map((item, i) => (
                    <div key ={LINKS[i].id} className="navItem">
                        <NavItem
                            section={LINKS[i].section}
                            name ={LINKS[i].name}
                        />
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;

const LINKS = [
    {
        id:1,
        section: 'title',
        name: 'Welcome'
    },
    {
        id:2,
        section: 'about',
        name: 'About'
    },
    {
        id: 3,
        section: 'resume',
        name: 'Resume'
    }
];