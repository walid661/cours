
import React from 'react';
import { FileText, File, Image as ImageIcon, Download, MoreVertical } from 'lucide-react';
import { Document } from '../types';

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="text-red-400" size={20} />;
      case 'image': return <ImageIcon className="text-blue-400" size={20} />;
      default: return <File className="text-indigo-400" size={20} />;
    }
  };

  return (
    <div className="bg-white p-6 rounded-3xl soft-shadow border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <FileText className="text-indigo-400" size={24} />
          Documents récents
        </h3>
        <span className="text-sm font-bold text-indigo-500 px-3 py-1 bg-indigo-50 rounded-full">Explorer</span>
      </div>

      <div className="space-y-3">
        {documents.map((doc) => (
          <div 
            key={doc.id}
            className="flex items-center justify-between p-3 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center soft-shadow border border-slate-100">
                {getIcon(doc.type)}
              </div>
              <div>
                <p className="font-bold text-slate-700 text-sm truncate max-w-[150px] md:max-w-xs">{doc.name}</p>
                <p className="text-xs text-slate-400 font-medium">{doc.date} • {doc.size}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-slate-400 hover:text-indigo-500 hover:bg-white rounded-xl transition-all">
                <Download size={18} />
              </button>
              <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-xl transition-all">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentList;
