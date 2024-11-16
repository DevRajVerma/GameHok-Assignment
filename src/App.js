import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTournament from "./pages/CreateTournament";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-tournament" element={<CreateTournament />} />
      </Routes>
    </Router>
  );
};

export default App;
