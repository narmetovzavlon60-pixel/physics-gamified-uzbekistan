import { useState } from 'react';
import type { PhysicsTopic } from '../types/physics';
import FormulaModal from './FormulaModal';
import QuizEngine from './QuizEngine';
import DTMExam from './DTMExam';
import { useGameStore } from '../store/useGameStore';

export default function TopicCard({ topic, onBack }: { topic: PhysicsTopic; onBack: () => void }) {
  const [showFormula, setShowFormula] = useState<string | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showDTM, setShowDTM] = useState(false);
  const { language } = useGameStore();
  const t = topic.title[language];
  const s = topic.summary[language];

  return (
    <div className="flex h-full flex-col p-4">
      <button onClick={onBack} className="mb-4 self-start rounded bg-slate-700 px-3 py-1 text-sm">←</button>
      <h2 className="text-xl font-bold">{t}</h2>
      <p className="mt-2 text-sm text-slate-300">{s}</p>

      <div className="mt-4 space-y-2">
        <h3 className="font-semibold">📐 {language === 'ru' ? 'Формулы' : 'Formulalar'}</h3>
        {topic.formulas.map(f => (
          <button key={f.id} onClick={() => setShowFormula(f.id)} className="block w-full rounded bg-slate-800 p-2 text-left text-sm hover:bg-slate-700">
            <span className="font-mono">{f.latex}</span>
            <span className="block text-xs text-slate-400">{f.description[language]}</span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-2">
        <button onClick={() => setShowQuiz(true)} className="flex-1 rounded bg-emerald-600 py-2 text-sm font-semibold">📝 {language === 'ru' ? 'Викторина' : 'Viktorina'}</button>
        <button onClick={() => setShowDTM(true)} className="flex-1 rounded bg-blue-600 py-2 text-sm font-semibold">⏱ DTM</button>
      </div>

      {showFormula && <FormulaModal formula={topic.formulas.find(f => f.id === showFormula)!} onClose={() => setShowFormula(null)} />}
      {showQuiz && <QuizEngine topic={topic} onClose={() => setShowQuiz(false)} />}
      {showDTM && <DTMExam topic={topic} onClose={() => setShowDTM(false)} />}
    </div>
  );
}
