import React from "react";
import Navbar from "../component/Navbar";
import FrontPage from "../component/FrontPage";
import FreeNoteBook from "../component/FreeNoteBook";
import Footer from "../component/Footer";
function Home() {
    return (
      <>
        <Navbar />
        <FrontPage />
        <FreeNoteBook />
        <Footer />
      </>
    );
  }
  
  export default Home;