import React from 'react';
import './Navbar.css';
import { Navbar as bootstrapNavBar } from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const useState = React.useState;

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [navColor, setNavColor] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <bootstrapNavBar
      expanded={expanded}
      fixed={top}
      expand="md"
      className={navColor ? 'sticky' : 'navbar'}
    >
      <Container>
        <bootstrapNavBar.Brand href="/">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <h1>DR.</h1>
        </bootstrapNavBar.Brand>
      </Container>
    </bootstrapNavBar>
  );
  //   return (
  //     <div className="navBar">
  //       <div className="navItems">
  //         <Link
  //           className="navItem"
  //           activeClass="active"
  //           to="title"
  //           spy={true}
  //           smooth={true}
  //           offset={-100}
  //           duration={500}
  //         >
  //           {' '}
  //           Welcome{' '}
  //         </Link>
  //         <Link
  //           className="navItem"
  //           activeClass="active"
  //           to="projects"
  //           spy={true}
  //           smooth={true}
  //           offset={0}
  //           duration={500}
  //         >
  //           Projects
  //         </Link>
  //         <Link
  //           className="navItem"
  //           activeClass="active"
  //           to="about"
  //           spy={true}
  //           smooth={true}
  //           offset={0}
  //           duration={500}
  //         >
  //           About
  //         </Link>
  //         <a
  //           className="navItem"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           href="https://github.com/rennemannd/dakotarennemann/blob/master/src/assets/docs/Resume.pdf"
  //         >
  //           Resume
  //           <FontAwesomeIcon
  //             icon={faExternalLinkAlt}
  //             size="xs"
  //             transform="up-6 right-4"
  //           />
  //         </a>
  //       </div>
  //     </div>
  //   );
};

export default Navbar;
