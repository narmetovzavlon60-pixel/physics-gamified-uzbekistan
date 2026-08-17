import { useState } from 'react';
import type { PhysicsTopic } from '../types/physics';
import { useGameStore } from '../store/useGameStore';

export default function QuizEngine({ topic, onClose }: { topic: PhysicsTopic; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { language, completeQuiz, addXp, addCoins } = useGameStore();
  const questions = topic.quiz;
  const q = questions[index];

  const answer = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.correctIndex) setScore(score + 1);
    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex(index + 1);
        setSelected(null);
      } else {
        setFinished(true);
        const totalXp = score * 10 + 20;
        const totalCoins = score * 2 + 3;
        addXp(totalXp);
        addCoins(totalCoins);
        completeQuiz(topic.id, totalXp, totalCoins);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-6">
        {finished ? (
          <div className="text-center">
            <h3 className="text-xl font-bold">🏆 {language === 'ru' ? 'Результат' : 'Natija'}</h3>
            <p className="mt-2 text-2xl">{score} / {questions.length}</p>
            <button onClick={onClose} className="mt-4 rounded bg-blue-600 px-4 py-2">OK</button>
          </div>
        ) : (
          <>
            <div className="mb-4 flex justify-between text-sm text-slate-400">
              <span>{index + 1}/{questions.length}</span>
              <span>Score: {score}</span>
            </div>
            <h3 className="text-lg font-semibold">{q.question[language]}</h3>
            <div className="mt-4 space-y-2">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => answer(i)}
                  className={`w-full rounded p-2 text-left text-sm ${
                    selected === null ? 'bg-slate-700' :
                    i === q.correctIndex ? 'bg-emerald-600' :
                    i === selected ? 'bg-red-600' : 'bg-slate-700'
                  }`}
                >
                  {opt[language]}
                </button>
              ))}
            </div>
            <button onClick={onClose} className="mt-4 text-sm text-slate-400">✕ {language === 'ru' ? 'Закрыть' : 'Yopish'}</button>
          </>
        )}
      </div>
    </div>
  );
}
