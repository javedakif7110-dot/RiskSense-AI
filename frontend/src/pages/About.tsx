import React from 'react';
import { Target, CheckCircle2, Cpu, Database, Award, ShieldAlert, School } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Banner */}
      <div className="card-custom p-8 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-2xl relative overflow-hidden">
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 bg-blue-500/30 text-blue-200 font-semibold text-xs rounded-full uppercase tracking-wider mb-2 border border-blue-400/30">
            Machine Learning PBL Project
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2">
            RiskSense AI &mdash; Academic Performance Risk Prediction System
          </h1>
          <p className="text-blue-100 text-sm sm:text-base max-w-3xl font-normal leading-relaxed">
            A Machine Learning system designed to identify students who may require timely academic assistance using historical continuous academic indicators.
          </p>
        </div>
      </div>

      {/* Grid: Problem Statement & Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Problem Statement */}
        <div className="card-custom p-6">
          <div className="flex items-center gap-3 mb-4 text-blue-900">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Problem Statement</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Educational institutions often face challenges in providing early academic intervention to struggling students due to delayed evaluation cycles. Traditional methods rely on final examination results, which often come too late for remedial actions.
          </p>
          <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl text-xs text-rose-900 font-medium">
            Early identification of students who may be at academic risk is crucial for active mentoring, improving retention rates, and ensuring academic excellence.
          </div>
        </div>

        {/* Objective */}
        <div className="card-custom p-6">
          <div className="flex items-center gap-3 mb-4 text-blue-900">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Project Objective</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            To build an intelligent data-driven classification model that analyzes student continuous evaluation metrics and accurately predicts academic risk levels in real time.
          </p>
          <ul className="space-y-2 text-xs text-slate-700 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              Categorize risk into Low, Medium, and High Risk tiers.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              Provide actionable insights for faculty advisors and mentors.
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              Deploy a robust web application powered by Random Forest ML models.
            </li>
          </ul>
        </div>
      </div>

      {/* Key System Specifications */}
      <div className="card-custom p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-600" />
          Technical Overview & Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1">
              <Database className="w-4 h-4" />
              Dataset Size
            </div>
            <p className="text-slate-900 font-extrabold text-lg">2,500 Records</p>
            <p className="text-xs text-slate-500">Synthetic student academic dataset</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1">
              <Cpu className="w-4 h-4" />
              Input Features
            </div>
            <p className="text-slate-900 font-extrabold text-lg">5 Indicators</p>
            <p className="text-xs text-slate-500">Attendance, Internal, Assignment, Quiz, GPA</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1">
              <Award className="w-4 h-4" />
              Final Classifier
            </div>
            <p className="text-slate-900 font-extrabold text-lg">Random Forest</p>
            <p className="text-xs text-slate-500">n_estimators=100, max_depth=8</p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-sm mb-1">
              <School className="w-4 h-4" />
              Institution
            </div>
            <p className="text-slate-900 font-extrabold text-sm">CIT Chennai</p>
            <p className="text-xs text-slate-500">Dept of Computer Science & Engg</p>
          </div>

        </div>
      </div>
    </main>
  );
};
