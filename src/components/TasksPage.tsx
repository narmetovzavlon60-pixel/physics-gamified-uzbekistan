import { useState } from 'react';
import { allTopics } from '../data/physicsDatabase';
import { useGameStore } from '../store/useGameStore';
import { playSound } from '../utils/sound';
import type { PhysicsTask } from '../types/physics';

export default function TasksPage() {
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [currentTask, setCurrentTask] = useState<PhysicsTask | null>(null);
  const [answerInput, setAnswerInput] = useState('');
  const [result, setResult] = useState<'success' | 'fail' | null>(null);
  const { language, solvedTasks, solveTask } = useGameStore();

  const selectedTopic = allTopics.find(t => t.id === selectedTopicId);

  const startTask = (task: PhysicsTask) => {
    if (solvedTasks.includes(task.id)) return;
    setCurrentTask(task);
    setAnswerInput('');
    setResult(null);
  };

  const checkAnswer = () => {
    if (!currentTask || currentTask.answer === undefined) return;
    const userAnswer = parseFloat(answerInput.replace(',', '.'));
    const tolerance = currentTask.tolerance || 0.01;
    if (Math.abs(userAnswer - currentTask.answer) <= tolerance) {
      const success = solveTask(currentTask.id, currentTask.xpReward, currentTask.coinReward);
      if (success) {
        setResult('success');
        playSound('success');
      } else {
        setResult('success');
        playSound('click');
      }
    } else {
      setResult('fail');
      playSound('wrong');
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">📋 {language === 'ru' ? 'Задачи' : 'Masalalar'}</h2>

      {!selectedTopicId && (
        <div className="space-y-2">
          {allTopics.map(topic => (
            <button key={topic.id} onClick={() => { playSound('click'); setSelectedTopicId(topic.id); }} className="block w-full rounded bg-slate-800 p-3 text-left hover:bg-slate-700">
              <span className="font-semibold">{topic.title[language]}</span>
              <span className="block text-xs text-slate-400">{topic.tasks.length} {language === 'ru' ? 'задач' : 'masala'}</span>
            </button>
          ))}
        </div>
      )}

      {selectedTopic && !currentTask && (
        <div>
          <button onClick={() => { playSound('click'); setSelectedTopicId(null); }} className="mb-4 text-sm text-slate-400">← {language === 'ru' ? 'Назад' : 'Orqaga'}</button>
          <h3 className="text-lg font-semibold">{selectedTopic.title[language]}</h3>
          <div className="mt-4 space-y-3">
            {selectedTopic.tasks.map(task => (
              <div key={task.id} className="rounded bg-slate-800 p-3">
                <p className="text-sm font-semibold">{task.title[language]}</p>
                <p className="mt-1 text-xs text-slate-400">{task.difficulty === 1 ? '⭐' : task.difficulty === 2 ? '⭐⭐' : '⭐⭐⭐'}</p>
                <button
                  onClick={() => startTask(task)}
                  disabled={solvedTasks.includes(task.id)}
                  className={`mt-2 rounded px-3 py-1 text-xs ${solvedTasks.includes(task.id) ? 'bg-slate-600 text-slate-400' : 'bg-emerald-600'}`}
                >
                  {solvedTasks.includes(task.id) ? '✓' : language === 'ru' ? 'Решить' : 'Yechish'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentTask && (
        <div>
          <button onClick={() => { playSound('click'); setCurrentTask(null); setResult(null); setAnswerInput(''); }} className="mb-4 text-sm text-slate-400">← {language === 'ru' ? 'Назад' : 'Orqaga'}</button>
          <h3 className="text-lg font-semibold">{currentTask.title[language]}</h3>
          <p className="mt-2 text-sm text-slate-300">{currentTask.description[language]}</p>
          <div className="mt-4">
            <input
              type="text"
              value={answerInput}
              onChange={e => setAnswerInput(e.target.value)}
              placeholder={language === 'ru' ? 'Введите ответ' : 'Javobni kiriting'}
              className="w-full rounded bg-slate-700 p-2 text-sm text-white outline-none"
            />
            <button onClick={checkAnswer} className="mt-2 w-full rounded bg-blue-600 py-2 text-sm font-semibold">
              {language === 'ru' ? 'Проверить' : 'Tekshirish'}
            </button>
            {result === 'success' && <p className="mt-2 text-center text-emerald-400">✅ {language === 'ru' ? 'Правильно! +' : 'To\'g\'ri! +'}{currentTask.xpReward} XP, +{currentTask.coinReward} 🪙</p>}
            {result === 'fail' && <p className="mt-2 text-center text-red-400">❌ {language === 'ru' ? 'Неправильно, попробуйте ещё раз' : 'Noto\'g\'ri, yana urinib ko\'ring'}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
