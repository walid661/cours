
import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  FileText, 
  Settings, 
  HelpCircle,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <button className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 font-bold ${
    active 
    ? 'bg-indigo-100 text-indigo-600 shadow-sm' 
    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
  }`}>
    <span className={active ? 'text-indigo-600' : 'text-slate-400'}>{icon}</span>
    {label}
  </button>
);

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-100 transition-transform duration-300 transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0`}>
      <div className="h-full flex flex-col p-6">
        <div className="flex items-center gap-3 mb-12 px-4">
          <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center text-white soft-shadow">
            <GraduationCap size={24} />
          </div>
          <span className="text-2xl font-black text-slate-800 tracking-tight">EduSoft</span>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem icon={<LayoutDashboard size={22} />} label="Dashboard" active />
          <NavItem icon={<BookOpen size={22} />} label="Mes Cours" />
          <NavItem icon={<Calendar size={22} />} label="Emploi du temps" />
          <NavItem icon={<FileText size={22} />} label="Documents" />
          <NavItem icon={<GraduationCap size={22} />} label="Notes & Examens" />
        </nav>

        <div className="mt-auto space-y-2">
          <div className="bg-emerald-50 p-4 rounded-3xl mb-6">
            <p className="text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">Conseil du jour</p>
            <p className="text-emerald-900 text-sm">"Fais une petite pause toutes les 25 minutes pour rester concentré !" 🧠</p>
          </div>
          <NavItem icon={<Settings size={22} />} label="Réglages" />
          <NavItem icon={<HelpCircle size={22} />} label="Aide" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
