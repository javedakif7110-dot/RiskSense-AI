import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 border-t border-slate-200/80 bg-white/70 text-center text-xs text-slate-500 font-medium">
      <div className="max-w-7xl mx-auto px-4">
        <p>
          <strong className="font-bold text-slate-700">RiskSense AI</strong> &mdash; Academic Performance Risk Prediction System &copy; {new Date().getFullYear()} | Department of Computer Science and Engineering
        </p>
        <p className="mt-1 text-slate-400">
          Chennai Institute of Technology, Chennai | Machine Learning PBL Project
        </p>
      </div>
    </footer>
  );
};
