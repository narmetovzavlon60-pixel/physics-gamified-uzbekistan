import { useState } from 'react';
import type { PhysicsTopic } from '../types/physics';
import FormulaModal from './FormulaModal';
import QuizEngine from './QuizEngine';
import DTMExam from './DTMExam';
import TasksModal from './TasksModal';
import { useGameStore } from '../store/useGameStore';
import { playSound } from '../utils/sound';
import katex from 'katex';
import 'katex/dist/katex.min.css';

function FormulaInline({ latex }: { latex: string }) {
  const html = katex.renderToString(latex, { throwOnError: false });
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function TopicCard({ topic, onBack }: { topic: PhysicsTopic; onBack: () => void }) {
  const [showFormula, setShowFormula] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDTM, setShowDTM] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const { language } = useGameStore();
  const t = topic.title[language];
  const s = topic.summary[language];

  return (
    <div className="flex h-full flex-col p-4">
      <button onClick={() => { playSound('click'); onBack(); }} className="mb-4 self-start rounded bg-slate-700 px-3 py-1 text-sm">←</button>
      <h2 className="text-xl font-bold">{t}</h2>
      <p className="mt-2 text-sm text-slate-300">{s}</p>

      <div className="mt-4 space-y-2">
        <h3 className="font-semibold">📐 {language === 'ru' ? 'Формулы' : 'Formulalar'}</h3>
        {topic.formulas.map(f => (
          <button key={f.id} onClick={() => { playSound('click'); setShowFormula(f.id); }} className="block w-full rounded bg-slate-800 p-2 text-left text-sm hover:bg-slate-700">
            <span className="text-base text-white"><FormulaInline latex={f.latex} /></span>
            <span className="block text-xs text-slate-400">{f.description[language]}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button onClick={() => { playSound('click'); setShowTasks(true); }} className="flex-1 rounded bg-purple-600 py-2 text-sm font-semibold">📋 {language === 'ru' ? 'Задачи' : 'Masalalar'}</button>
        <button onClick={() => { playSound('click'); setShowQuiz(true); }} className="flex-1 rounded bg-emerald-600 py-2 text-sm font-semibold">📝 {language === 'ru' ? 'Викторина' : 'Viktorina'}</button>
        <button onClick={() => { playSound('click'); setShowDTM(true); }} className="flex-1 rounded bg-blue-600 py-2 text-sm font-semibold">⏱ DTM</button>
      </div>

      {showFormula && <FormulaModal formula={topic.formulas.find(f => f.id === showFormula)!} onClose={() => setShowFormula(null)} />}
      {showQuiz && <QuizEngine topic={topic} onClose={() => setShowQuiz(false)} />}
      {showDTM && <DTMExam topic={topic} onClose={() => setShowDTM(false)} />}
      {showTasks && <TasksModal topic={topic} onClose={() => setShowTasks(false)} />}
    </div>
  );
}
