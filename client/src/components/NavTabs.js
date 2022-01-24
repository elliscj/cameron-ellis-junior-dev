import React from "react";
import "../styles/NavTabs.css";

// props is and object so we are descructuring it to take the key value pairs as variables
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" bg="dark" variant="dark">
      {/* <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          
          // checking (if currentPage = home, make it an active nav-link, else normal nav-link)

          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li> */}
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          // same thing, checking if the current link is equal to currentPage, and making it look 'active'

          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
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
