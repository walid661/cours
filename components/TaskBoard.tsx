
import React from 'react';
import { CheckCircle, Circle, Plus, Pencil } from 'lucide-react';
import { Task } from '../types';

interface TaskBoardProps {
  tasks: Task[];
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {
  return (
    <div className="bg-white p-6 rounded-3xl soft-shadow border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <Pencil className="text-indigo-400" size={24} />
          Mes Devoirs
        </h3>
        <button className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-100 transition-colors">
          <Plus size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className={`${task.color} p-5 rounded-2xl border-2 border-white soft-shadow pastel-post-it cursor-pointer flex items-start gap-4`}
          >
            <button className={`mt-0.5 ${task.isCompleted ? 'text-indigo-500' : 'text-slate-300'}`}>
              {task.isCompleted ? <CheckCircle size={22} fill="white" /> : <Circle size={22} />}
            </button>
            <div className="flex-1">
              <p className={`font-bold text-slate-800 ${task.isCompleted ? 'line-through opacity-50' : ''}`}>
                {task.title}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs font-black uppercase text-slate-500 bg-white/50 px-2 py-0.5 rounded-md">
                  {task.category}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {task.dueDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
