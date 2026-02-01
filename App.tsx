
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Search,
  ArrowLeft
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import WelcomeCard from './components/WelcomeCard';
import ProgressCard from './components/ProgressCard';
import TaskBoard from './components/TaskBoard';
import DocumentList from './components/DocumentList';
import { MOCK_STUDENT, MOCK_TASKS, MOCK_DOCUMENTS, MOCK_SUBJECTS } from './constants';
import { Document } from './types';

type View = 'dashboard' | 'courses' | 'documents' | 'doc-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const navigateTo = (view: View) => setCurrentView(view);

  const handleDocClick = (doc: Document) => {
    setSelectedDoc(doc);
    setCurrentView('doc-detail');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="xl:col-span-2 space-y-8">
              <WelcomeCard student={MOCK_STUDENT} onRevise={() => navigateTo('courses')} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-[24px] paper-border">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <BookOpen className="text-blue-400" size={24} />
                    Mes Progrès
                  </h3>
                  <div className="space-y-6">
                    {MOCK_SUBJECTS.map((sub, idx) => (
                      <ProgressCard key={idx} subject={sub.subject} progress={sub.progress} color={sub.color} />
                    ))}
                  </div>
                </div>
                
                <DocumentList documents={MOCK_DOCUMENTS} onDocClick={handleDocClick} />
              </div>
            </div>

            <div className="space-y-8">
              <TaskBoard tasks={MOCK_TASKS} />
              <div className="bg-orange-100 p-6 rounded-[24px] paper-border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">💡 Astuce du prof</h4>
                <p className="text-sm text-orange-700 leading-relaxed">
                  "N'oublie pas de relire ton cours de SVT avant demain. On fera un petit quiz ludique !"
                </p>
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <button onClick={() => navigateTo('dashboard')} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-6">
              <ArrowLeft size={20} /> Retour au tableau de bord
            </button>
            <h2 className="text-3xl font-bold mb-8">Mes Cours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_SUBJECTS.map((sub, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[24px] paper-border hover:border-indigo-200 transition-colors cursor-pointer group">
                  <div className={`w-12 h-12 ${sub.color} rounded-2xl mb-4 opacity-80 group-hover:opacity-100`}></div>
                  <h3 className="text-xl font-bold mb-2">{sub.subject}</h3>
                  <p className="text-slate-500 text-sm mb-4">Dernière séance : il y a 2 jours</p>
                  <div className="h-2 w-full bg-slate-100 rounded-full">
                    <div className={`h-full ${sub.color} rounded-full`} style={{ width: `${sub.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <button onClick={() => navigateTo('dashboard')} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-6">
              <ArrowLeft size={20} /> Retour
            </button>
            <h2 className="text-3xl font-bold mb-8">Tous mes Documents</h2>
            <DocumentList documents={MOCK_DOCUMENTS} onDocClick={handleDocClick} />
          </div>
        );

      case 'doc-detail':
        return (
          <div className="animate-in fade-in zoom-in-95 duration-300 max-w-4xl mx-auto">
            <button onClick={() => navigateTo('documents')} className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-6">
              <ArrowLeft size={20} /> Retour aux documents
            </button>
            <div className="bg-white p-10 rounded-[32px] paper-border min-h-[600px] flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-500 mb-6">
                <FileText size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-2">{selectedDoc?.name}</h2>
              <p className="text-slate-400 mb-8 tracking-wide uppercase text-xs font-bold">
                {selectedDoc?.type.toUpperCase()} • {selectedDoc?.size} • Ajouté le {selectedDoc?.date}
              </p>
              <div className="w-full max-w-md bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-200 mb-8">
                <p className="text-slate-500 italic">"L'aperçu du document sera disponible prochainement."</p>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
                Télécharger le document
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-[#FAF9F6]">
      <Sidebar currentView={currentView} onNavigate={navigateTo} />

      <main className="flex-1 p-6 lg:p-12 overflow-x-hidden">
        {/* Simple Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Chercher..." 
              className="pl-10 pr-4 py-2 bg-white rounded-xl paper-border focus:border-indigo-400 outline-none w-48 md:w-64 transition-all"
            />
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
          </div>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white overflow-hidden paper-border">
               <img src={MOCK_STUDENT.avatar} alt="Profile" className="w-full h-full object-cover" />
             </div>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

export default App;
