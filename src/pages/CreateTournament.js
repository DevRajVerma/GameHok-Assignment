import React, { useState } from "react";
import { Plus } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

// Tournament Form Component
const TournamentForm = () => {
  const [rounds, setRounds] = useState([
    {
      id: 1,
      name: "Round 1",
      roundName: "Semi Finals",
      promotions: "Top 10 players",
    },
    {
      id: 2,
      name: "Round 2",
      roundName: "Finals",
      promotions: "Top 3 players",
    },
  ]);

  const addRound = () => {
    const newRound = {
      id: rounds.length + 1,
      name: `Round ${rounds.length + 1}`,
      roundName: "",
      promotions: "",
    };
    setRounds([...rounds, newRound]);
  };

  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex items-center mb-8 space-x-4">
          <div className="flex items-center text-green-600">
            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
              1
            </div>
            <span className="ml-2 font-medium">Tournament Detail</span>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex items-center text-gray-400">
            <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
              2
            </div>
            <span className="ml-2">Tournament setting</span>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex items-center text-gray-400">
            <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
              3
            </div>
            <span className="ml-2">Schedule</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow p-6 space-y-8">
          {/* Tournament Name & Game Title */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              Tournament Name & Game Title
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Game Name
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option value="">Select an option...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Tournament thumbnail
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <p className="text-gray-500">Upload Tournament thumbnail</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Map
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option value="">Map</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tournament Title
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2"
                placeholder="Title"
              />
            </div>
          </div>

          {/* Tournament Dates & Registration */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              Tournament Dates & Registration
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Start Date
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tournament Start Date
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration End Date
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tournament End Date
                </label>
                <input
                  type="datetime-local"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>
          </div>

          {/* Tournament Format */}
          <div>
            <h3 className="text-lg font-medium mb-4">Tournament Format</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tournament Format
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option value="">Select an option...</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Team size
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="10"
                />
              </div>
            </div>
          </div>

          {/* Rounds */}
          <div>
            <h3 className="text-lg font-medium mb-4">Rounds</h3>
            <div className="space-y-4">
              {rounds.map((round) => (
                <div key={round.id} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-3">{round.name}</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Rounds
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        placeholder={round.roundName}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Promotions
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        placeholder={round.promotions}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={addRound}
                className="text-green-600 flex items-center space-x-2 mt-4"
              >
                <Plus className="w-4 h-4" />
                <span>Add More</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <button className="px-6 py-2 border border-gray-300 rounded-lg">
              Cancel
            </button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Layout Component
const CreateTournament = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <TournamentForm />
      </div>
    </div>
  );
};

export default CreateTournament;
