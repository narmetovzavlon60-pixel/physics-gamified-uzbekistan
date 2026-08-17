import { useState } from 'react';
import type { PhysicsTopic } from '../types/physics';
import FormulaModal from './FormulaModal';
import SimulationModal from './SimulationModal';
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
  const [showSim, setShowSim] = useState(false);
  const { language } = useGameStore();

  return (
    <div className="flex h-full flex-col p-4">
      <button onClick={() => { playSound('click'); onBack(); }} className="mb-4 self-start rounded bg-slate-700 px-3 py-1 text-sm">←</button>
      <h2 className="text-xl font-bold">{topic.title[language]}</h2>
      <p className="mt-2 text-sm text-slate-300">{topic.summary[language]}</p>
      {topic.details && <p className="mt-2 text-xs text-slate-400">{topic.details[language]}</p>}

      <div className="mt-4 space-y-2">
        <h3 className="font-semibold">📐 {language === 'ru' ? 'Формулы' : 'Formulalar'}</h3>
        {topic.formulas.map(f => (
          <button key={f.id} onClick={() => { playSound('click'); setShowFormula(f.id); }} className="block w-full rounded bg-slate-800 p-2 text-left hover:bg-slate-700">
            <span className="text-base"><FormulaInline latex={f.latex} /></span>
            <span className="block text-xs text-slate-400">{f.description[language]}</span>
          </button>
        ))}
      </div>

      {topic.simulationType && (
        <button onClick={() => { playSound('click'); setShowSim(true); }} className="mt-6 w-full rounded bg-indigo-600 py-3 text-sm font-semibold">
          🔬 {language === 'ru' ? '3D симуляция' : '3D simulyatsiya'}
        </button>
      )}

      {showFormula && <FormulaModal formula={topic.formulas.find(f => f.id === showFormula)!} onClose={() => setShowFormula(null)} />}
      {showSim && <SimulationModal simulationType={topic.simulationType!} onClose={() => setShowSim(false)} />}
    </div>
  );
}
