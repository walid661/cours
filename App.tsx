
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  FileText, 
  Settings, 
  Star,
  Bell,
  Search,
  Menu,
  X
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import WelcomeCard from './components/WelcomeCard';
import ProgressCard from './components/ProgressCard';
import TaskBoard from './components/TaskBoard';
import DocumentList from './components/DocumentList';
import { MOCK_STUDENT, MOCK_TASKS, MOCK_DOCUMENTS, MOCK_SUBJECTS } from './constants';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-[#F8FAFF]">
      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-white rounded-xl shadow-md"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-72' : 'ml-0'} p-6 lg:p-10`}>
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Mon Espace</h1>
            <p className="text-slate-500 font-medium">Bonne journée d'apprentissage ! 🚀</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Rechercher un cours..." 
                className="pl-10 pr-4 py-2.5 bg-white rounded-2xl border-2 border-transparent focus:border-indigo-200 outline-none w-full md:w-64 transition-all duration-300 soft-shadow"
              />
              <Search className="absolute left-3 top-3 text-slate-400 group-focus-within:text-indigo-400 transition-colors" size={20} />
            </div>
            <button className="p-3 bg-white rounded-2xl soft-shadow text-slate-500 hover:text-indigo-500 transition-colors relative">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-3 h-3 bg-red-400 border-2 border-white rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column (Main Stats) */}
          <div className="xl:col-span-2 space-y-8">
            <WelcomeCard student={MOCK_STUDENT} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl soft-shadow border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Star className="text-yellow-400" fill="currentColor" size={24} />
                    Mes Succès
                  </h3>
                  <span className="text-sm font-bold text-indigo-500 px-3 py-1 bg-indigo-50 rounded-full">Voir tout</span>
                </div>
                <div className="space-y-4">
                  {MOCK_SUBJECTS.map((sub, idx) => (
                    <ProgressCard key={idx} subject={sub.subject} progress={sub.progress} color={sub.color} />
                  ))}
                </div>
              </div>
              
              <DocumentList documents={MOCK_DOCUMENTS} />
            </div>
          </div>

          {/* Right Column (To-Do & Schedule) */}
          <div className="space-y-8">
            <TaskBoard tasks={MOCK_TASKS} />
            
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-3xl text-white soft-shadow relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">Prêt pour le contrôle ?</h3>
                <p className="text-indigo-100 text-sm mb-4">Ton prochain test de Mathématiques est prévu pour ce jeudi.</p>
                <button className="bg-white text-indigo-600 px-6 py-2 rounded-2xl font-bold text-sm hover:bg-indigo-50 transition-colors">
                  Réviser maintenant
                </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 bg-white/10 w-24 h-24 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <BookOpen className="absolute -top-4 -right-4 text-white/10 w-32 h-32 rotate-12" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
