import React from 'react';
import { Target, CheckCircle2, Cpu, Database, Award, ShieldAlert, School } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Banner */}
      <div className="card-custom p-8 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white rounded-2xl relative overflow-hidden shadow-xl shadow-blue-900/20 border border-blue-500/30">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-64 h-64 bg-sky-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <span className="inline-block px-3.5 py-1 bg-amber-400 text-slate-950 font-extrabold text-xs rounded-full uppercase tracking-wider shadow-sm">
            Machine Learning PBL Project
          </span>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-sky-200 bg-clip-text text-transparent">RiskSense AI</span> &mdash; Academic Performance Risk Prediction System
          </h1>
          <p className="text-sky-100 text-sm sm:text-base max-w-3xl font-medium leading-relaxed drop-shadow-sm">
            A Machine Learning system designed to identify students who may require timely academic assistance using historical continuous academic indicators.
          </p>
        </div>
      </div>

      {/* Grid: Problem Statement & Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Problem Statement */}
        <div className="card-custom p-6 bg-white border-l-4 border-l-rose-500 shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Problem Statement</h2>
          </div>
          <p className="text-slate-800 text-sm font-medium leading-relaxed mb-4">
            Educational institutions often face challenges in providing early academic intervention to struggling students due to delayed evaluation cycles. Traditional methods rely on final examination results, which often come too late for remedial actions.
          </p>
          <div className="bg-rose-50 border-l-4 border-l-rose-500 border border-rose-200/80 p-4 rounded-r-xl text-xs text-rose-950 font-bold leading-relaxed shadow-sm">
            Early identification of students who may be at academic risk is crucial for active mentoring, improving retention rates, and ensuring academic excellence.
          </div>
        </div>

        {/* Objective */}
        <div className="card-custom p-6 bg-white border-l-4 border-l-emerald-500 shadow-md hover:shadow-lg transition-all">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Project Objective</h2>
          </div>
          <p className="text-slate-800 text-sm font-medium leading-relaxed mb-4">
            To build an intelligent data-driven classification model that analyzes student continuous evaluation metrics and accurately predicts academic risk levels in real time.
          </p>
          <ul className="space-y-2.5 text-xs font-semibold bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/80">
            <li className="flex items-center gap-2 text-emerald-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Categorize risk into Low, Medium, and High Risk tiers.
            </li>
            <li className="flex items-center gap-2 text-emerald-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Provide actionable insights for faculty advisors and mentors.
            </li>
            <li className="flex items-center gap-2 text-emerald-950">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Deploy a robust web application powered by Random Forest ML models.
            </li>
          </ul>
        </div>
      </div>

      {/* Key System Specifications */}
      <div className="card-custom p-6 border-l-4 border-l-blue-600 shadow-md">
        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-600" />
          Technical Overview & Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-blue-800 font-extrabold text-sm mb-1">
              <Database className="w-4 h-4 text-blue-600" />
              Dataset Size
            </div>
            <p className="text-slate-900 font-black text-xl">2,500 Records</p>
            <p className="text-xs text-slate-600 font-medium">Synthetic student academic dataset</p>
          </div>

          <div className="p-4 bg-indigo-50/80 border border-indigo-200 rounded-xl hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-indigo-800 font-extrabold text-sm mb-1">
              <Cpu className="w-4 h-4 text-indigo-600" />
              Input Features
            </div>
            <p className="text-slate-900 font-black text-xl">5 Indicators</p>
            <p className="text-xs text-slate-600 font-medium">Attendance, Internal, Assignment, Quiz, GPA</p>
          </div>

          <div className="p-4 bg-purple-50/80 border border-purple-200 rounded-xl hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-purple-800 font-extrabold text-sm mb-1">
              <Award className="w-4 h-4 text-purple-600" />
              Final Classifier
            </div>
            <p className="text-slate-900 font-black text-xl">Random Forest</p>
            <p className="text-xs text-slate-600 font-medium">n_estimators=100, max_depth=8</p>
          </div>

          <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl hover:shadow-md transition-all">
            <div className="flex items-center gap-2 text-amber-800 font-extrabold text-sm mb-1">
              <School className="w-4 h-4 text-amber-600" />
              Institution
            </div>
            <p className="text-slate-900 font-black text-base">CIT Chennai</p>
            <p className="text-xs text-slate-600 font-medium">Dept of Computer Science & Engg</p>
          </div>

        </div>
      </div>
    </main>
  );
};
