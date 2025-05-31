import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "../src/pages/FormPage.jsx";
import TicketPage from "../src/pages/TicketPage.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
