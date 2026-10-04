import React, { useState } from 'react';
import { InputCard } from '../components/InputCard';
import { PredictionCard } from '../components/PredictionCard';
import { InfoCards } from '../components/InfoCards';
import { StudentInputData, PredictionResponse } from '../types';
import { getRiskPrediction } from '../services/api';

export const Home: React.FC = () => {
  // Initial state with reference sample values
  const [inputData, setInputData] = useState<StudentInputData>({
    attendance: '85',
    internal: '78',
    assignment: '82',
    quiz: '75',
    gpa: '8.2'
  });

  const [prediction, setPrediction] = useState<PredictionResponse | null>({
    risk_level: 'Low',
    confidence: 88.5,
    message: 'The student is likely to perform well based on the given academic details.'
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePredict = async () => {
    setIsLoading(true);
    try {
      const res = await getRiskPrediction(inputData);
      setPrediction(res);
    } catch (err) {
      console.error('Prediction failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Two main cards side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <InputCard
          inputData={inputData}
          setInputData={setInputData}
          onPredict={handlePredict}
          isLoading={isLoading}
        />
        <PredictionCard
          inputData={inputData}
          prediction={prediction}
          isLoading={isLoading}
        />
      </div>

      {/* Bottom 3 Information Cards */}
      <InfoCards />
    </main>
  );
};
