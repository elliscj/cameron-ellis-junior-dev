import React from "react";
import "../styles/NavTabs.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

// props is and object so we are descructuring it to take the key value pairs as variables
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>Cameron J. Ellis ~ Junior Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={() => handlePageChange("About")}>
              About Me
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={() => handlePageChange("Projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
            >
              Contact Me
            </Nav.Link>
            {/* <NavDropdown
              title="More"
              id="basic-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item
                href="https://github.com/elliscj"
                target="_blank"
              >
                GitHub
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.linkedin.com/in/cameronje/"
                target="_blank"
              >
                LinkedIn
              </NavDropdown.Item>
              <NavDropdown.Item
                href="./assets/dev-resume.pdf"
                target="_blank"
                download
              >
                Resume
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Stay In Touch!</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavTabs;

// <Navbar bg="light" expand="lg">
//   <Container>
//     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="me-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#link">Link</Nav.Link>
//         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>;

//// -----  ////
// <ul className="nav nav-tabs" bg="dark" variant="dark">
//   {/* <li className="nav-item">
//     <a
//       href="#home"
//       onClick={() => handlePageChange("Home")}

//       // checking (if currentPage = home, make it an active nav-link, else normal nav-link)

//       className={currentPage === "Home" ? "nav-link active" : "nav-link"}
//     >
//       Home
//     </a>
//   </li> */}
//   <li className="nav-item">
//     <a
//       href="#about"
//       onClick={() => handlePageChange("About")}
//       // same thing, checking if the current link is equal to currentPage, and making it look 'active'

//       className={currentPage === "About" ? "nav-link active" : "nav-link"}
//     >
//       About
//     </a>
//   </li>
//   <li className="nav-item">
//     <a
//       href="#projects"
//       onClick={() => handlePageChange("Projects")}
//       className={
//         currentPage === "Projects" ? "nav-link active" : "nav-link"
//       }
//     >
//       Projects
//     </a>
//   </li>
//   <li className="nav-item">
//     <a
//       href="#contact"
//       onClick={() => handlePageChange("Contact")}
//       className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//     >
//       Contact
//     </a>
//   </li>
// </ul>
