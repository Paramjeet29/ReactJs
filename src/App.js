import React from "react"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./Home";
import Summary from "./Summary";
import ShowDetails from "./ShowDetails";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/summary/:id" element={<Summary />} />
          <Route exact path="/data/:id" element={<ShowDetails />} />
        </Routes>
    </Router>
  );
}

export default App;
