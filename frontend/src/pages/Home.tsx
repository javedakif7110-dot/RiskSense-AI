import React, { useState, useEffect } from 'react';
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

  const [prediction, setPrediction] = useState<PredictionResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePredict = async (dataToPredict: StudentInputData = inputData) => {
    setIsLoading(true);
    try {
      const res = await getRiskPrediction(dataToPredict);
      setPrediction(res);
    } catch (err) {
      console.error('Prediction failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Run initial prediction on mount so prediction matches initial inputs
  useEffect(() => {
    handlePredict(inputData);
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Two main cards side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <InputCard
          inputData={inputData}
          setInputData={setInputData}
          onPredict={() => handlePredict(inputData)}
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

