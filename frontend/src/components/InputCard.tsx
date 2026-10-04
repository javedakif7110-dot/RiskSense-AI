import React, { useState } from 'react';
import { User, Calendar, FileText, Edit3, HelpCircle, BarChart2, Brain, RefreshCw } from 'lucide-react';
import { StudentInputData } from '../types';

interface InputCardProps {
  inputData: StudentInputData;
  setInputData: React.Dispatch<React.SetStateAction<StudentInputData>>;
  onPredict: () => void;
  isLoading: boolean;
}

export const InputCard: React.FC<InputCardProps> = ({
  inputData,
  setInputData,
  onPredict,
  isLoading
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: keyof StudentInputData, value: string) => {
    let errorMsg = '';
    if (value.trim() === '') {
      errorMsg = 'Required';
    } else {
      const num = parseFloat(value);
      if (isNaN(num)) {
        errorMsg = 'Must be a number';
      } else if (name === 'gpa') {
        if (num < 0 || num > 10) errorMsg = 'Range: 0 – 10';
      } else {
        if (num < 0 || num > 100) errorMsg = 'Range: 0 – 100';
      }
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (field: keyof StudentInputData, value: string) => {
    setInputData((prev) => ({ ...prev, [field]: value }));
    validateField(field, value);
  };

  const hasErrors = Object.values(errors).some((e) => e !== '');
  const isFormValid =
    inputData.attendance !== '' &&
    inputData.internal !== '' &&
    inputData.assignment !== '' &&
    inputData.quiz !== '' &&
    inputData.gpa !== '' &&
    !hasErrors;

  const handleFillDemo = () => {
    const demoData: StudentInputData = {
      attendance: '85',
      internal: '78',
      assignment: '82',
      quiz: '75',
      gpa: '8.2'
    };
    setInputData(demoData);
    setErrors({});
  };

  return (
    <div className="card-custom p-6 flex flex-col justify-between h-full">
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Student Performance Details
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Enter the academic details to predict the risk level.
              </p>
            </div>
          </div>
          <button
            onClick={handleFillDemo}
            type="button"
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg border border-blue-200 transition-colors flex items-center gap-1"
            title="Load standard reference sample data"
          >
            <RefreshCw className="w-3 h-3" />
            Demo Sample
          </button>
        </div>

        {/* 5 Input Fields */}
        <div className="space-y-4">
          
          {/* FIELD 1: Attendance */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-slate-500" />
                Attendance Percentage (%)
              </label>
              {errors.attendance && (
                <span className="text-xs text-rose-500 font-medium">{errors.attendance}</span>
              )}
            </div>
            <div className="flex rounded-lg shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden bg-white">
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="e.g., 85"
                value={inputData.attendance}
                onChange={(e) => handleChange('attendance', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />
              <span className="input-suffix px-4 py-2.5 text-xs flex items-center justify-center min-w-[50px]">
                %
              </span>
            </div>
          </div>

          {/* FIELD 2: Internal Assessment Marks */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                Internal Assessment Marks
              </label>
              {errors.internal && (
                <span className="text-xs text-rose-500 font-medium">{errors.internal}</span>
              )}
            </div>
            <div className="flex rounded-lg shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden bg-white">
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="e.g., 78"
                value={inputData.internal}
                onChange={(e) => handleChange('internal', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />
              <span className="input-suffix px-4 py-2.5 text-xs flex items-center justify-center min-w-[65px]">
                / 100
              </span>
            </div>
          </div>

          {/* FIELD 3: Assignment Marks */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-slate-500" />
                Assignment Marks
              </label>
              {errors.assignment && (
                <span className="text-xs text-rose-500 font-medium">{errors.assignment}</span>
              )}
            </div>
            <div className="flex rounded-lg shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden bg-white">
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="e.g., 82"
                value={inputData.assignment}
                onChange={(e) => handleChange('assignment', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />
              <span className="input-suffix px-4 py-2.5 text-xs flex items-center justify-center min-w-[65px]">
                / 100
              </span>
            </div>
          </div>

          {/* FIELD 4: Quiz Marks */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-500" />
                Quiz Marks
              </label>
              {errors.quiz && (
                <span className="text-xs text-rose-500 font-medium">{errors.quiz}</span>
              )}
            </div>
            <div className="flex rounded-lg shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden bg-white">
              <input
                type="number"
                step="0.1"
                min="0"
                max="100"
                placeholder="e.g., 75"
                value={inputData.quiz}
                onChange={(e) => handleChange('quiz', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />
              <span className="input-suffix px-4 py-2.5 text-xs flex items-center justify-center min-w-[65px]">
                / 100
              </span>
            </div>
          </div>

          {/* FIELD 5: Previous Semester GPA */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-slate-500" />
                Previous Semester GPA
              </label>
              {errors.gpa && (
                <span className="text-xs text-rose-500 font-medium">{errors.gpa}</span>
              )}
            </div>
            <div className="flex rounded-lg shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden bg-white">
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                placeholder="e.g., 8.2"
                value={inputData.gpa}
                onChange={(e) => handleChange('gpa', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />
              <span className="input-suffix px-4 py-2.5 text-xs flex items-center justify-center min-w-[65px]">
                / 10
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Predict Button */}
      <div className="mt-6">
        <button
          onClick={onPredict}
          disabled={!isFormValid || isLoading}
          className="btn-predict w-full text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Analyzing Academic Indicators...</span>
            </>
          ) : (
            <>
              <Brain className="w-5 h-5" />
              <span>Predict Academic Risk</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
