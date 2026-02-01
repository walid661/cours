
import React from 'react';

interface ProgressCardProps {
  subject: string;
  progress: number;
  color: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ subject, progress, color }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end mb-1">
        <span className="font-bold text-slate-700">{subject}</span>
        <span className="text-sm font-bold text-slate-400">{progress}%</span>
      </div>
      <div className="h-4 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressCard;
