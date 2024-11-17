import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTournament from "./pages/CreateTournament";
import TournamentForm from "./components/TournamentForm";
// import TournamentSettings from "./pages/TournamentSettings";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-tournament" element={<CreateTournament />} />
        <Route path="/tournament-form" element={<TournamentForm/>} />
        {/* <Route path="/tournament-settings" element={<TournamentSettings/>}></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
