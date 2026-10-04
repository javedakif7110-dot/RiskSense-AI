import React from 'react';
import { BarChart3, ShieldCheck, AlertTriangle, AlertOctagon, Calendar, FileText, Edit3, HelpCircle, BarChart2 } from 'lucide-react';
import { StudentInputData, PredictionResponse } from '../types';

interface PredictionCardProps {
  inputData: StudentInputData;
  prediction: PredictionResponse | null;
  isLoading: boolean;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({
  inputData,
  prediction,
  isLoading
}) => {
  const getRiskDisplay = () => {
    if (!prediction) return null;

    const level = prediction.risk_level;
    if (level === 'Low') {
      return {
        title: 'Low Risk',
        colorClass: 'text-emerald-600',
        bgClass: 'bg-emerald-50 border-emerald-100',
        iconBg: 'bg-emerald-600',
        Icon: ShieldCheck
      };
    } else if (level === 'Medium') {
      return {
        title: 'Medium Risk',
        colorClass: 'text-amber-500',
        bgClass: 'bg-amber-50 border-amber-100',
        iconBg: 'bg-amber-500',
        Icon: AlertTriangle
      };
    } else {
      return {
        title: 'High Risk',
        colorClass: 'text-rose-600',
        bgClass: 'bg-rose-50 border-rose-100',
        iconBg: 'bg-rose-600',
        Icon: AlertOctagon
      };
    }
  };

  const riskInfo = getRiskDisplay();

  return (
    <div className="card-custom p-6 flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Prediction Result
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              The model predicts the academic risk level based on the input details.
            </p>
          </div>
        </div>

        {/* Prediction Main Box */}
        <div className="min-h-[200px] flex items-center justify-center mb-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center p-8 text-center space-y-3">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-semibold text-blue-900">Running Random Forest Classifier...</p>
              <p className="text-xs text-slate-500">Evaluating 5 Academic Indicators</p>
            </div>
          ) : !prediction ? (
            <div className="w-full h-full min-h-[190px] border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-slate-50/50">
              <ShieldCheck className="w-12 h-12 text-slate-300 mb-2" />
              <p className="text-sm font-medium text-slate-500">
                Enter student details and click <span className="font-semibold text-blue-600">Predict Academic Risk</span>.
              </p>
            </div>
          ) : (
            <div className={`w-full p-6 sm:p-8 rounded-2xl border ${riskInfo?.bgClass} flex flex-col items-center text-center transition-all duration-300 shadow-sm relative overflow-hidden`}>
              {/* Main Risk Icon */}
              {riskInfo && (
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${riskInfo.iconBg} text-white flex items-center justify-center shadow-lg mb-3 animate-pulse-once`}>
                  <riskInfo.Icon className="w-10 h-10 sm:w-12 sm:h-12" />
                </div>
              )}

              <span className="text-xs sm:text-sm font-semibold text-slate-600 tracking-wide uppercase">
                Predicted Risk Level
              </span>

              <h2 className={`text-2xl sm:text-4xl font-extrabold ${riskInfo?.colorClass} my-1 tracking-tight`}>
                {riskInfo?.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-700 max-w-md font-medium mt-2 leading-relaxed">
                {prediction.message}
              </p>

              {prediction.confidence && (
                <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-700 border border-slate-200 shadow-2xs">
                  Model Confidence: <span className="text-blue-700 font-bold ml-1">{prediction.confidence}%</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 5 Summary Cards Below */}
      <div>
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
          Academic Details Breakdown
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          
          {/* Card 1: Attendance */}
          <div className="bg-[#e6f9ed] border border-emerald-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-1 text-[#16a34a] text-[11px] font-bold mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Attendance</span>
            </div>
            <span className="text-sm font-extrabold text-[#15803d]">
              {inputData.attendance ? `${inputData.attendance}%` : '85%'}
            </span>
          </div>

          {/* Card 2: Internal */}
          <div className="bg-[#e0f2fe] border border-sky-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-1 text-[#0284c7] text-[11px] font-bold mb-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Internal</span>
            </div>
            <span className="text-sm font-extrabold text-[#0369a1]">
              {inputData.internal ? `${inputData.internal} / 100` : '78 / 100'}
            </span>
          </div>

          {/* Card 3: Assignment */}
          <div className="bg-[#fef3c7] border border-amber-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-1 text-[#d97706] text-[11px] font-bold mb-1">
              <Edit3 className="w-3.5 h-3.5" />
              <span>Assignment</span>
            </div>
            <span className="text-sm font-extrabold text-[#b45309]">
              {inputData.assignment ? `${inputData.assignment} / 100` : '82 / 100'}
            </span>
          </div>

          {/* Card 4: Quiz */}
          <div className="bg-[#f3e8ff] border border-purple-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-1 text-[#9333ea] text-[11px] font-bold mb-1">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Quiz</span>
            </div>
            <span className="text-sm font-extrabold text-[#7e22ce]">
              {inputData.quiz ? `${inputData.quiz} / 100` : '75 / 100'}
            </span>
          </div>

          {/* Card 5: Previous GPA */}
          <div className="bg-[#ffe4e6] border border-rose-200/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center col-span-2 sm:col-span-1">
            <div className="flex items-center gap-1 text-[#e11d48] text-[11px] font-bold mb-1">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Previous GPA</span>
            </div>
            <span className="text-sm font-extrabold text-[#be123c]">
              {inputData.gpa ? `${inputData.gpa} / 10` : '8.2 / 10'}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
