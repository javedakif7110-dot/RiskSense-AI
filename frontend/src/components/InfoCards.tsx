import React from 'react';
import { Lightbulb, Settings, BarChart2 } from 'lucide-react';

export const InfoCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      
      {/* CARD 1: About the System */}
      <div className="card-custom p-5 flex flex-col">
        <div className="flex items-center gap-2.5 mb-3 text-blue-900">
          <Lightbulb className="w-5 h-5 text-amber-500 fill-amber-400" />
          <h3 className="font-bold text-base tracking-tight text-slate-900">
            About the System
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          This system uses Machine Learning models to predict the academic performance risk of students based on key academic indicators such as attendance, internal marks, assignment marks, quiz marks and previous semester GPA.
        </p>
      </div>

      {/* CARD 2: Risk Levels */}
      <div className="card-custom p-5 flex flex-col">
        <div className="flex items-center gap-2.5 mb-3 text-blue-900">
          <Settings className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-base tracking-tight text-slate-900">
            Risk Levels
          </h3>
        </div>

        <div className="space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-start gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Low Risk</span>
              <span className="text-slate-600 font-medium"> – Likely to perform well</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">Medium Risk</span>
              <span className="text-slate-600 font-medium"> – May need moderate support</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="w-3.5 h-3.5 rounded-full bg-rose-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900">High Risk</span>
              <span className="text-slate-600 font-medium"> – May need immediate attention</span>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3: Model Information */}
      <div className="card-custom p-5 flex flex-col">
        <div className="flex items-center gap-2.5 mb-3 text-blue-900">
          <BarChart2 className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-base tracking-tight text-slate-900">
            Model Information
          </h3>
        </div>

        <div className="text-xs sm:text-sm space-y-1.5 font-medium text-slate-700">
          <div className="grid grid-cols-[100px_10px_1fr] items-center">
            <span className="text-slate-600 font-medium">Algorithm</span>
            <span className="text-slate-400">:</span>
            <span className="font-semibold text-slate-900">Random Forest Classifier</span>
          </div>

          <div className="grid grid-cols-[100px_10px_1fr] items-center">
            <span className="text-slate-600 font-medium">Input Features</span>
            <span className="text-slate-400">:</span>
            <span className="font-semibold text-slate-900">5 Academic Indicators</span>
          </div>

          <div className="grid grid-cols-[100px_10px_1fr] items-center">
            <span className="text-slate-600 font-medium">Output</span>
            <span className="text-slate-400">:</span>
            <span className="font-semibold text-slate-900">Low / Medium / High Risk</span>
          </div>

          <div className="grid grid-cols-[100px_10px_1fr] items-center">
            <span className="text-slate-600 font-medium">Dataset</span>
            <span className="text-slate-400">:</span>
            <span className="font-semibold text-slate-900">2,500 Student Records (Synthetic)</span>
          </div>

          <div className="grid grid-cols-[100px_10px_1fr] items-center">
            <span className="text-slate-600 font-medium">Accuracy</span>
            <span className="text-slate-400">:</span>
            <span className="font-extrabold text-blue-700">71.60% (Random Forest)</span>
          </div>
        </div>
      </div>

    </div>
  );
};
