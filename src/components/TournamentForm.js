import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Trophy,
  Calendar,
  Settings
} from 'lucide-react';

const TournamentForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    tournamentName: '',
    gameTitle: '',
    registrationStartDate: '',
    registrationEndDate: '',
    // Prizes & Rules
    prizePool: '',
    entryFee: '',
    rules: '',
    // Schedule
    tournamentStartDate: '',
    tournamentEndDate: '',
    tournamentFormat: ''
  });

  //////Dates are less

  const totalSteps = 3;

  const handleNext = (stepData) => {
    // Update formData with the current step's data
    setFormData(prev => ({
      ...prev,
      ...stepData
    }));
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (finalStepData, e) => {
    e.preventDefault();
    const finalFormData = {
      ...formData,
      ...finalStepData
    };
    
    console.log('Form submitted:', finalFormData);
    // Handle form submission logic here
  };

  // Progress Bar Component
  const ProgressBar = () => {
    const steps = [
      { icon: Trophy, label: 'Basic Info' },
      { icon: Settings, label: 'Prizes & Rules' },
      { icon: Calendar, label: 'Schedule' },
    ];

    return (
      <div className="w-full mb-8">
        <div className="flex justify-between relative">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center
                    ${index + 1 <= currentStep 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-500'}`}
                >
                  <StepIcon size={20} />
                </div>
                <span className="mt-2 text-sm font-medium">{step.label}</span>
              </div>
            );
          })}

          {/* Progress line */}
          <div className="absolute top-5 left-0 h-0.5 bg-gray-200 w-full -z-10">
            <div
              className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300"
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            />
          </div>
        </div>
      </div>
    );
  };

  // Form Steps Components
  const BasicInfoStep = () => {
    const [stepData, setStepData] = useState({
      tournamentName: formData.tournamentName,
      gameTitle: formData.gameTitle,
      registrationStartDate: formData.registrationStartDate,
      registrationEndDate: formData.registrationEndDate
    });

    const handleStepChange = (e) => {
      const { name, value } = e.target;
      setStepData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tournament Name</label>
          <input
            type="text"
            name="tournamentName"
            value={stepData.tournamentName}
            onChange={handleStepChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            placeholder="Enter tournament name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Game Title</label>
          <input
            type="text"
            name="gameTitle"
            value={stepData.gameTitle}
            onChange={handleStepChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            placeholder="Enter game title"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Registration Start</label>
            <input
              type="date"
              name="registrationStartDate"
              value={stepData.registrationStartDate}
              onChange={handleStepChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Registration End</label>
            <input
              type="date"
              name="registrationEndDate"
              value={stepData.registrationEndDate}
              onChange={handleStepChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            type="button"
            onClick={() => handleNext(stepData)}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Next
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    );
  };

  const PrizesRulesStep = () => {
    const [stepData, setStepData] = useState({
      prizePool: formData.prizePool,
      entryFee: formData.entryFee,
      rules: formData.rules
    });

    const handleStepChange = (e) => {
      const { name, value } = e.target;
      setStepData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Prize Pool</label>
          <input
            type="number"
            name="prizePool"
            value={stepData.prizePool}
            onChange={handleStepChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            placeholder="Enter prize pool amount"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Entry Fee</label>
          <input
            type="number"
            name="entryFee"
            value={stepData.entryFee}
            onChange={handleStepChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            placeholder="Enter entry fee"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tournament Rules</label>
          <textarea
            name="rules"
            value={stepData.rules}
            onChange={handleStepChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500 h-32"
            placeholder="Enter tournament rules and guidelines"
          />
        </div>
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handlePrevious}
            className="flex items-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            <ChevronLeft className="mr-2" size={20} />
            Previous
          </button>
          <button
            type="button"
            onClick={() => handleNext(stepData)}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Next
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    );
  };

  const ScheduleStep = () => {
    const [stepData, setStepData] = useState({
      tournamentStartDate: formData.tournamentStartDate,
      tournamentEndDate: formData.tournamentEndDate,
      tournamentFormat: formData.tournamentFormat
    });

    const handleStepChange = (e) => {
      const { name, value } = e.target;
      setStepData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tournament Start</label>
            <input
              type="date"
              name="tournamentStartDate"
              value={stepData.tournamentStartDate}
              onChange={handleStepChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tournament End</label>
            <input
              type="date"
              name="tournamentEndDate"
              value={stepData.tournamentEndDate}
              onChange={handleStepChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Tournament Format</label>
          <select
            name="tournamentFormat"
            value={stepData.tournamentFormat}
            onChange={handleStepChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select format</option>
            <option value="single-elimination">Single Elimination</option>
            <option value="double-elimination">Double Elimination</option>
            <option value="round-robin">Round Robin</option>
          </select>
        </div>
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={handlePrevious}
            className="flex items-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            <ChevronLeft className="mr-2" size={20} />
            Previous
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(stepData, e)}
            className="flex items-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
            <CheckCircle2 className="ml-2" size={20} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Create Tournament</h1>
      <ProgressBar />
      <div className="space-y-6">
        {currentStep === 1 && <BasicInfoStep />}
        {currentStep === 2 && <PrizesRulesStep />}
        {currentStep === 3 && <ScheduleStep />}
      </div>
    </div>
  );
};

export default TournamentForm;