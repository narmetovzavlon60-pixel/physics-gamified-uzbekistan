import { useState, useMemo } from 'react';
import { allTopics } from '../data/physicsDatabase';
import { useGameStore } from '../store/useGameStore';
import { playSound } from '../utils/sound';
import type { QuizQuestion } from '../types/physics';

export default function QuizPage() {
  const [difficulty, setDifficulty] = useState<1 | 2 | 3 | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const { language, completeQuiz, addXp, addCoins } = useGameStore();

  const allQuestions = useMemo(() => allTopics.flatMap(t => t.quiz), []);

  const startQuiz = (diff: 1 | 2 | 3) => {
    const filtered = allQuestions.filter(q => q.difficulty === diff);
    if (filtered.length === 0) return;
    // Перемешиваем и берём 5
    const shuffled = filtered.sort(() => Math.random() - 0.5).slice(0, 5);
    setQuestions(shuffled);
    setDifficulty(diff);
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    playSound('click');
  };

  const answer = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === questions[currentIndex].correctIndex) {
      setScore(score + 1);
      playSound('correct');
    } else {
      playSound('wrong');
    }
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelected(null);
      } else {
        setFinished(true);
        const totalXp = score * 10 + 15;
        const totalCoins = score * 2 + 5;
        addXp(totalXp);
        addCoins(totalCoins);
        completeQuiz(`quiz-${difficulty}-${Date.now()}`, totalXp, totalCoins);
        playSound('success');
      }
    }, 800);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">📝 {language === 'ru' ? 'Викторина' : 'Viktorina'}</h2>

      {!difficulty && (
        <div className="space-y-3">
          <p className="text-sm text-slate-400">{language === 'ru' ? 'Выберите уровень сложности' : 'Qiyinchilik darajasini tanlang'}</p>
          <button onClick={() => startQuiz(1)} className="w-full rounded bg-emerald-600 py-3 font-semibold">⭐ {language === 'ru' ? 'Лёгкий' : 'Oson'}</button>
          <button onClick={() => startQuiz(2)} className="w-full rounded bg-amber-600 py-3 font-semibold">⭐⭐ {language === 'ru' ? 'Средний' : 'O\'rta'}</button>
          <button onClick={() => startQuiz(3)} className="w-full rounded bg-red-600 py-3 font-semibold">⭐⭐⭐ {language === 'ru' ? 'Сложный' : 'Qiyin'}</button>
        </div>
      )}

      {difficulty && !finished && questions.length > 0 && (
        <div>
          <div className="mb-4 flex justify-between text-sm text-slate-400">
            <span>{currentIndex + 1}/{questions.length}</span>
            <span>Score: {score}</span>
          </div>
          <h3 className="text-lg font-semibold">{questions[currentIndex].question[language]}</h3>
          <div className="mt-4 space-y-2">
            {questions[currentIndex].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => answer(i)}
                className={`w-full rounded p-2 text-left text-sm ${
                  selected === null ? 'bg-slate-700' :
                  i === questions[currentIndex].correctIndex ? 'bg-emerald-600' :
                  i === selected ? 'bg-red-600' : 'bg-slate-700'
                }`}
              >
                {opt[language]}
              </button>
            ))}
          </div>
          <button onClick={() => { setDifficulty(null); setQuestions([]); }} className="mt-4 text-sm text-slate-400">✕ {language === 'ru' ? 'Выйти' : 'Chiqish'}</button>
        </div>
      )}

      {finished && (
        <div className="text-center">
          <h3 className="text-xl font-bold">🏆 {language === 'ru' ? 'Результат' : 'Natija'}</h3>
          <p className="mt-2 text-2xl">{score} / {questions.length}</p>
          <button onClick={() => { setDifficulty(null); setQuestions([]); }} className="mt-4 rounded bg-blue-600 px-4 py-2">OK</button>
        </div>
      )}
    </div>
  );
}
