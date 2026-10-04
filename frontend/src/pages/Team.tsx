import React from 'react';
import { Users, GraduationCap, School, BookOpen, UserCheck, ShieldCheck } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'AKIF JAVED',
      role: 'Project Developer & ML Engineer',
      dept: 'Department of Computer Science and Engineering',
      institution: 'Chennai Institute of Technology'
    },
    {
      name: 'FAZIL AHMED N',
      role: 'Project Developer & Systems Architect',
      dept: 'Department of Computer Science and Engineering',
      institution: 'Chennai Institute of Technology'
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="card-custom p-8 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2 text-blue-200">
            <Users className="w-5 h-5 text-yellow-300" />
            <span className="font-bold text-xs uppercase tracking-wider">Project Team & Contributors</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Academic PBL Project Team
          </h1>
          <p className="text-blue-100 text-xs sm:text-sm mt-1 max-w-xl">
            Department of Computer Science and Engineering | Chennai Institute of Technology
          </p>
        </div>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="card-custom p-6 flex items-start gap-4 hover:shadow-lg transition-shadow border-t-4 border-t-blue-600">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 font-extrabold text-xl flex items-center justify-center shrink-0 shadow-sm">
              {member.name.split(' ')[0][0]}
              {member.name.split(' ')[1]?.[0] || ''}
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wide">
                Team Member #{idx + 1}
              </span>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {member.name}
              </h2>
              <p className="text-xs font-semibold text-slate-700 flex items-center gap-1.5 pt-0.5">
                <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                {member.dept}
              </p>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <School className="w-3.5 h-3.5 text-slate-400" />
                {member.institution}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Course & Institutional Credentials */}
      <div className="card-custom p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          Academic & Institutional Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium">
          
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-blue-700 font-bold mb-1">
              <School className="w-4 h-4" />
              Institution
            </div>
            <p className="text-slate-900 font-bold text-sm">Chennai Institute of Technology</p>
            <p className="text-slate-500 text-[11px] mt-0.5">Sarathy Nagar, Kundrathur, Chennai, Tamil Nadu</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-blue-700 font-bold mb-1">
              <BookOpen className="w-4 h-4" />
              Department & Course
            </div>
            <p className="text-slate-900 font-bold text-sm">Computer Science & Engineering</p>
            <p className="text-slate-500 text-[11px] mt-0.5">Machine Learning Project-Based Learning (PBL)</p>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-blue-700 font-bold mb-1">
              <ShieldCheck className="w-4 h-4" />
              Outcome
            </div>
            <p className="text-slate-900 font-bold text-sm">Deployable ML Web Application</p>
            <p className="text-slate-500 text-[11px] mt-0.5">Random Forest Academic Risk Classifier</p>
          </div>

        </div>
      </div>

    </main>
  );
};
