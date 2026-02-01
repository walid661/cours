
import React from 'react';
import { Sparkles, Trophy } from 'lucide-react';
import { Student } from '../types';

interface WelcomeCardProps {
  student: Student;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ student }) => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] soft-shadow border border-slate-100 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="relative">
          <img 
            src={student.avatar} 
            alt={student.name} 
            className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] border-4 border-indigo-100 object-cover shadow-lg rotate-3"
          />
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-xl text-white shadow-md animate-bounce">
            <Sparkles size={20} />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">
            Coucou {student.name} ! 👋
          </h2>
          <p className="text-slate-500 font-medium mb-4 text-lg">
            Tu es en <span className="text-indigo-600 font-bold">{student.grade}</span>. Tu as déjà complété 
            <span className="text-indigo-600 font-bold"> {student.overallProgress}% </span> 
            de ton programme ce trimestre !
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2 rounded-2xl font-bold">
              <Trophy size={18} />
              Top 10 de la classe
            </div>
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2 rounded-2xl font-bold">
              <Sparkles size={18} />
              Assidue
            </div>
          </div>
        </div>
      </div>

      {/* Background blobs for "Soft UI" aesthetic */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-purple-50 rounded-full translate-y-1/2 blur-2xl opacity-60"></div>
    </div>
  );
};

export default WelcomeCard;
