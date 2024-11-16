import React from "react";
import Sidebar from "./Sidebar";
import EmptyState from "./EmptyState";
import Header from "./Header"

// Main Layout Component
const TournamentPage = () => {
    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <EmptyState />
        </div>
      </div>
    );
  };


export default TournamentPage;