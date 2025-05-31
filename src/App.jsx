import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "../src/pages/FormPage";
import TicketPage from "../src/pages/TicketPage";

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
