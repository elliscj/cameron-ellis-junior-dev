import React, { useState } from "react";
import NavTabs from "./NavTabs";
// import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // TODO: Add a comment describing the functionality of this method
  // depending on the value of the state varianle currentPage return and render the function for that page.
  const renderPage = () => {
    // if (currentPage === "Home") {
    //   return <Home />;
    // }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // passing the state variable currentPage and the function
      handlePageChange to the navTabs function to be able to change state and
      call different functions based on button click // */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // rendering the page that was just changed via the navTabs // */}
      {renderPage()}
    </div>
  );
}
