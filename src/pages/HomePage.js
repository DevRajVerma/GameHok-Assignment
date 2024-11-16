import React from "react";
import Sidebar from "../components/Sidebar";
import EmptyState from "../components/EmptyState";
import Header from "../components/Header"

// Main Layout Component
const HomePage = () => {
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


export default HomePage;