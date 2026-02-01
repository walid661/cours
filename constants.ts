
import { Student, Task, Document, SubjectProgress } from './types';

export const MOCK_STUDENT: Student = {
  name: "Léa",
  avatar: "https://picsum.photos/seed/lea/200/200",
  grade: "6ème B",
  overallProgress: 68,
};

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    title: "Mathématiques : Exercices p.42",
    category: "Devoirs",
    color: "bg-blue-100",
    dueDate: "Demain",
    isCompleted: false,
  },
  {
    id: '2',
    title: "Lire 'Le Petit Prince' chap. 1-3",
    category: "Français",
    color: "bg-purple-100",
    dueDate: "Vendredi",
    isCompleted: false,
  },
  {
    id: '3',
    title: "Dessin : Apporter des feutres",
    category: "Arts",
    color: "bg-yellow-100",
    dueDate: "Lundi",
    isCompleted: true,
  },
  {
    id: '4',
    title: "Réviser les verbes irréguliers",
    category: "Anglais",
    color: "bg-green-100",
    dueDate: "Mardi",
    isCompleted: false,
  }
];

export const MOCK_DOCUMENTS: Document[] = [
  { id: 'd1', name: "Cours_SVT_Photosynthese.pdf", type: 'pdf', date: "Hier", size: "1.2 MB" },
  { id: 'd2', name: "Exercices_Fractions.doc", type: 'doc', date: "12 Oct", size: "450 KB" },
  { id: 'd3', name: "Schema_Geographie.png", type: 'image', date: "10 Oct", size: "2.5 MB" },
];

export const MOCK_SUBJECTS: SubjectProgress[] = [
  { subject: "Maths", progress: 75, color: "bg-blue-400" },
  { subject: "Français", progress: 82, color: "bg-purple-400" },
  { subject: "Histoire", progress: 45, color: "bg-orange-400" },
  { subject: "SVT", progress: 60, color: "bg-green-400" },
];
