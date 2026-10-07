import React from 'react';
import { Database, BarChart3, Layers, GitBranch, ArrowRight } from 'lucide-react';

export const ProjectInfo: React.FC = () => {
  const metrics = [
    { label: 'Accuracy', dt: 57.0, rf: 71.6, suffix: '%' },
    { label: 'Precision', dt: 57.50, rf: 71.77, suffix: '%' },
    { label: 'Recall', dt: 57.0, rf: 71.6, suffix: '%' },
    { label: 'F1-Score', dt: 57.11, rf: 71.68, suffix: '%' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Title */}
      <div className="card-custom p-6 bg-white border-l-4 border-l-blue-600">
        <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Project Information & Machine Learning Architecture
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Detailed technical analysis of dataset features, model evaluation metrics, baseline vs. final classifier benchmarks, and system workflow.
        </p>
      </div>

      {/* Dataset & Features Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Dataset Info */}
        <div className="card-custom p-6">
          <div className="flex items-center gap-3 mb-4 text-blue-900">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Dataset Specifications</h2>
              <p className="text-xs text-slate-500">2,500 Synthetic Student Records</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            The machine learning pipeline operates on a structured CSV dataset containing 2,500 synthetic student performance records generated to reflect real-world academic distributions in higher education.
          </p>
          <div className="space-y-2 text-xs font-medium">
            <div className="flex justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-slate-600">Total Samples:</span>
              <span className="font-bold text-slate-900">2,500 CSV Records</span>
            </div>
            <div className="flex justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-slate-600">Train-Test Ratio:</span>
              <span className="font-bold text-slate-900">80:20 Stratified Split</span>
            </div>
            <div className="flex justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-slate-600">Target Variable:</span>
              <span className="font-bold text-blue-700">Risk_Level (Low, Medium, High)</span>
            </div>
          </div>
        </div>

        {/* 5 Features List */}
        <div className="card-custom p-6">
          <div className="flex items-center gap-3 mb-4 text-blue-900">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">Input Features (5 Academic Indicators)</h2>
              <p className="text-xs text-slate-500">Consistently used in ML & UI</p>
            </div>
          </div>
          <div className="space-y-2.5 text-xs sm:text-sm">
            <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                <span className="font-semibold text-slate-800">Attendance Percentage</span>
              </div>
              <span className="text-xs text-slate-500 font-mono bg-white px-2 py-0.5 rounded border">0% – 100%</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                <span className="font-semibold text-slate-800">Internal Assessment Marks</span>
              </div>
              <span className="text-xs text-slate-500 font-mono bg-white px-2 py-0.5 rounded border">0 – 100</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                <span className="font-semibold text-slate-800">Assignment Marks</span>
              </div>
              <span className="text-xs text-slate-500 font-mono bg-white px-2 py-0.5 rounded border">0 – 100</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">4</span>
                <span className="font-semibold text-slate-800">Quiz Marks</span>
              </div>
              <span className="text-xs text-slate-500 font-mono bg-white px-2 py-0.5 rounded border">0 – 100</span>
            </div>

            <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">5</span>
                <span className="font-semibold text-slate-800">Previous Semester GPA</span>
              </div>
              <span className="text-xs text-slate-500 font-mono bg-white px-2 py-0.5 rounded border">0.0 – 10.0</span>
            </div>
          </div>
        </div>

      </div>

      {/* Model Comparison Table & Charts Section */}
      <div className="card-custom p-6">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Documented Model Benchmark & Comparison</h2>
              <p className="text-xs text-slate-500">Baseline Decision Tree vs. Final Random Forest Classifier</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <th className="p-3.5 rounded-tl-lg">Metric</th>
                  <th className="p-3.5 text-center bg-slate-200/60">Decision Tree (Baseline)</th>
                  <th className="p-3.5 text-center bg-blue-600 text-white rounded-tr-lg">Random Forest (Final)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">Accuracy</td>
                  <td className="p-3.5 text-center text-slate-600 font-mono">57.0%</td>
                  <td className="p-3.5 text-center text-blue-700 font-extrabold font-mono bg-blue-50/70">71.6%</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">Precision</td>
                  <td className="p-3.5 text-center text-slate-600 font-mono">57.50%</td>
                  <td className="p-3.5 text-center text-blue-700 font-extrabold font-mono bg-blue-50/70">71.77%</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">Recall</td>
                  <td className="p-3.5 text-center text-slate-600 font-mono">57.0%</td>
                  <td className="p-3.5 text-center text-blue-700 font-extrabold font-mono bg-blue-50/70">71.6%</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-800">F1-Score</td>
                  <td className="p-3.5 text-center text-slate-600 font-mono">57.11%</td>
                  <td className="p-3.5 text-center text-blue-700 font-extrabold font-mono bg-blue-50/70">71.68%</td>
                </tr>
              </tbody>
            </table>
            <p className="text-[11px] text-slate-500 mt-2 font-medium italic">
              * Evaluated on 80:20 stratified test split with random_state=42. Random Forest demonstrates +14.6% accuracy improvement over baseline.
            </p>
          </div>

          {/* Comparison Bar Visualizer */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                Visual Performance Chart
              </h3>
              <div className="flex gap-4 text-xs font-semibold">
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-slate-400 rounded-sm"></span> Decision Tree (DT)</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-blue-600 rounded-sm"></span> Random Forest (RF)</span>
              </div>
            </div>

            <div className="space-y-4">
              {metrics.map((m) => (
                <div key={m.label} className="p-3.5 bg-white rounded-xl border border-slate-200/70 shadow-sm space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-900">{m.label}</span>
                    <span className="text-xs font-mono">
                      <span className="text-slate-500 font-semibold">DT: {m.dt}%</span>
                      <span className="mx-1.5 text-slate-300">|</span>
                      <strong className="text-blue-700 font-bold">RF: {m.rf}%</strong>
                    </span>
                  </div>

                  {/* Dual Independent Bars */}
                  <div className="space-y-1.5">
                    {/* DT Bar */}
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="w-6 text-slate-400 font-bold font-mono">DT</span>
                      <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${m.dt}%` }}
                          className="h-full bg-slate-400 rounded-full transition-all duration-500"
                          title={`Decision Tree: ${m.dt}%`}
                        />
                      </div>
                      <span className="w-12 text-right font-mono text-slate-600 text-[10px]">{m.dt}%</span>
                    </div>

                    {/* RF Bar */}
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="w-6 text-blue-600 font-extrabold font-mono">RF</span>
                      <div className="flex-1 h-2.5 bg-blue-100/70 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${m.rf}%` }}
                          className="h-full bg-blue-600 rounded-full transition-all duration-500"
                          title={`Random Forest: ${m.rf}%`}
                        />
                      </div>
                      <span className="w-12 text-right font-mono text-blue-700 font-bold text-[10px]">{m.rf}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* System Workflow Section */}
      <div className="card-custom p-6">
        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <GitBranch className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">System Workflow Diagram</h2>
            <p className="text-xs text-slate-500">End-to-end data processing and risk decision pipeline</p>
          </div>
        </div>

        {/* Horizontal Flow Cards for Large Screens / Vertical for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-7 gap-2 items-center text-center">
          
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl">
            <span className="text-[10px] font-extrabold text-blue-600 uppercase">Step 1</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Student Academic Data</p>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-400 mx-auto hidden md:block" />

          <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl">
            <span className="text-[10px] font-extrabold text-indigo-600 uppercase">Step 2</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Data Validation</p>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-400 mx-auto hidden md:block" />

          <div className="p-3 bg-purple-50 border border-purple-200 rounded-xl">
            <span className="text-[10px] font-extrabold text-purple-600 uppercase">Step 3</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">5 Academic Features</p>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-400 mx-auto hidden md:block" />

          <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md">
            <span className="text-[10px] font-extrabold text-blue-200 uppercase">Step 4</span>
            <p className="text-xs font-extrabold mt-0.5">Random Forest Model</p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center text-center mt-4">
          
          <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl md:col-start-2">
            <span className="text-[10px] font-extrabold text-sky-600 uppercase">Step 5</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Risk Prediction</p>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-400 mx-auto hidden md:block" />

          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span className="text-[10px] font-extrabold text-emerald-600 uppercase">Step 6</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Low / Medium / High Risk</p>
          </div>

          <ArrowRight className="w-5 h-5 text-slate-400 mx-auto hidden md:block" />

          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <span className="text-[10px] font-extrabold text-amber-700 uppercase">Step 7</span>
            <p className="text-xs font-bold text-slate-900 mt-0.5">Academic Support Decision</p>
          </div>

        </div>
      </div>

    </main>
  );
};
