import { useEffect, useState } from 'react';
import type { PhysicsTopic } from '../types/physics';
import { useGameStore } from '../store/useGameStore';

export default function DTMExam({ topic, onClose }: { topic: PhysicsTopic; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const { language, completeQuiz, addXp, addCoins } = useGameStore();
  const questions = topic.quiz.slice(0, 3);
  const q = questions[index];

  useEffect(() => {
    if (finished) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleNext();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [index, finished]);

  const handleNext = () => {
    if (selected === q?.correctIndex) setScore(score + 1);
    setSelected(null);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setTimeLeft(30);
    } else {
      setFinished(true);
      const totalXp = score * 15 + 30;
      const totalCoins = score * 3 + 5;
      addXp(totalXp);
      addCoins(totalCoins);
      completeQuiz(topic.id + '-dtm', totalXp, totalCoins);
    }
  };

  const answer = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    setTimeout(handleNext, 500);
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-6">
        {finished ? (
          <div className="text-center">
            <h3 className="text-xl font-bold">⏱ DTM</h3>
            <p className="mt-2 text-2xl">{score} / {questions.length}</p>
            <button onClick={onClose} className="mt-4 rounded bg-blue-600 px-4 py-2">OK</button>
          </div>
        ) : (
          <>
            <div className="mb-4 flex justify-between text-sm">
              <span>{index + 1}/{questions.length}</span>
              <span className="text-red-400">⏳ {timeLeft}s</span>
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
          </>
        )}
      </div>
    </div>
  );
}
