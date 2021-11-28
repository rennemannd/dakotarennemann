import React from 'react';
import './TopNavbar.css';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';

const useState = React.useState;

const TopNavbar = () => {
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
    <Navbar
      expanded={expanded}
      fixed={top}
      expand="md"
      className={navColor ? 'sticky' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <h1>DR.</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpanded(expanded ? false : 'expanded');
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: '2px' }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: '2px' }}
                />{' '}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpanded(false)}
              >
                Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
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

export default TopNavbar;
