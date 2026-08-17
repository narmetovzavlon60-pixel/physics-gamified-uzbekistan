import { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import type { Formula } from '../types/physics';
import { useGameStore } from '../store/useGameStore';

export default function FormulaModal({ formula, onClose }: { formula: Formula; onClose: () => void }) {
  const { language } = useGameStore();
  const html = useMemo(() => katex.renderToString(formula.latex, { throwOnError: false }), [formula.latex]);
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-6" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="float-right text-slate-400">✕</button>
        <h3 className="mb-4 text-lg font-bold">{formula.description[language]}</h3>
        <div className="rounded bg-slate-900 p-4 text-center text-2xl" dangerouslySetInnerHTML={{ __html: html }} />
        <p className="mt-4 text-sm text-slate-400">{formula.latex}</p>
      </div>
    </div>
  );
}
