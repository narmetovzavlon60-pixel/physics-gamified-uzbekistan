import type { PhysicsTopic } from '../types/physics';
import { useGameStore } from '../store/useGameStore';
import { playSound } from '../utils/sound';

export default function TasksModal({ topic, onClose }: { topic: PhysicsTopic; onClose: () => void }) {
  const { language, completedTopics, completeTopic, addXp, addCoins } = useGameStore();

  const handleComplete = (taskId: string, xp: number, coins: number) => {
    if (!completedTopics.includes(taskId)) {
      completeTopic(taskId, xp, coins);
      playSound('success');
    } else {
      playSound('click');
    }
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4" onClick={() => { playSound('click'); onClose(); }}>
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-6" onClick={e => e.stopPropagation()}>
        <button onClick={() => { playSound('click'); onClose(); }} className="float-right text-slate-400">✕</button>
        <h3 className="mb-4 text-lg font-bold">📋 {language === 'ru' ? 'Задачи' : 'Masalalar'}</h3>
        <div className="space-y-3 max-h-[70vh] overflow-y-auto">
          {topic.tasks.map(task => (
            <div key={task.id} className="rounded bg-slate-700 p-3">
              <p className="text-sm font-semibold">{task.title[language]}</p>
              <p className="mt-1 text-xs text-slate-300">{task.description[language]}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-amber-400">+{task.xpReward} XP · +{task.coinReward} 🪙</span>
                <button
                  onClick={() => handleComplete(task.id, task.xpReward, task.coinReward)}
                  className={`rounded px-3 py-1 text-xs ${completedTopics.includes(task.id) ? 'bg-slate-600 text-slate-400' : 'bg-emerald-600'}`}
                  disabled={completedTopics.includes(task.id)}
                >
                  {completedTopics.includes(task.id) ? '✓' : language === 'ru' ? 'Решить' : 'Yechish'}
                </button>
              </div>
            </div>
          ))}
          {topic.tasks.length === 0 && (
            <p className="text-sm text-slate-400">{language === 'ru' ? 'Задачи скоро появятся' : 'Masalalar tez orada qo\'shiladi'}</p>
          )}
        </div>
      </div>
    </div>
  );
}
