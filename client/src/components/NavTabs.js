import React from "react";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// props is and object so we are descructuring it to take the key value pairs as variables
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
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
          href="#blog"
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
          //  TODO: Add a comment explaining what this logic is doing

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
