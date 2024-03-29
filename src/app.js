import React from 'react';
import HomeBar from "./components/Navbar";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import Contact from "./pages/Contact"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router basename="/Portfolio">
       <HomeBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Applications" element={<Applications />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;