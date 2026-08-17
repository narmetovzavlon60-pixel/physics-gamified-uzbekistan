import { useState } from 'react';
import Navbar from './components/Navbar';
import TopicCard from './components/TopicCard';
import ShopModal from './components/ShopModal';
import TasksPage from './components/TasksPage';
import QuizPage from './components/QuizPage';
import { physicsModules } from './data/physicsDatabase';
import { useGameStore } from './store/useGameStore';
import type { PhysicsTopic } from './types/physics';
import { BookOpen, Home, ShoppingCart, ClipboardList, HelpCircle } from 'lucide-react';

type Tab = 'home' | 'tasks' | 'quiz' | 'shop';

export default function App() {
  const [tab, setTab] = useState<Tab>('home');
  const [selectedTopic, setSelectedTopic] = useState<PhysicsTopic | null>(null);
  const [showShop, setShowShop] = useState(false);
  const { language } = useGameStore();

  return (
    <div className="flex h-screen flex-col bg-slate-950 text-white">
      <Navbar />
      <div className="flex-1 overflow-y-auto pb-16">
        {selectedTopic ? (
          <TopicCard topic={selectedTopic} onBack={() => setSelectedTopic(null)} />
        ) : tab === 'home' ? (
          <div className="p-4">
            <h1 className="mb-4 text-xl font-bold">⚡ PhysicUZ 3D</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {physicsModules.map(mod => (
                <div key={mod.id} className="rounded-xl bg-slate-800 p-4" style={{ borderLeft: `4px solid ${mod.color}` }}>
                  <h2 className="text-lg font-semibold">{mod.icon} {mod.title[language]}</h2>
                  <p className="text-xs text-slate-400 mt-1">{mod.summary?.[language]}</p>
                  <div className="mt-3 space-y-2">
                    {mod.topics.map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        className="block w-full rounded bg-slate-700 p-2 text-left text-sm hover:bg-slate-600"
                      >
                        {topic.title[language]}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : tab === 'tasks' ? (
          <TasksPage />
        ) : tab === 'quiz' ? (
          <QuizPage />
        ) : null}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-around bg-slate-900 py-2">
        <button onClick={() => { setTab('home'); setSelectedTopic(null); }} className={`flex flex-col items-center text-xs ${tab === 'home' ? 'text-blue-400' : 'text-slate-500'}`}>
          <Home size={20} />
          <span>{language === 'ru' ? 'Главная' : 'Bosh'}</span>
        </button>
        <button onClick={() => { setTab('tasks'); setSelectedTopic(null); }} className={`flex flex-col items-center text-xs ${tab === 'tasks' ? 'text-blue-400' : 'text-slate-500'}`}>
          <ClipboardList size={20} />
          <span>{language === 'ru' ? 'Задачи' : 'Masalalar'}</span>
        </button>
        <button onClick={() => { setTab('quiz'); setSelectedTopic(null); }} className={`flex flex-col items-center text-xs ${tab === 'quiz' ? 'text-blue-400' : 'text-slate-500'}`}>
          <HelpCircle size={20} />
          <span>{language === 'ru' ? 'Викторина' : 'Viktorina'}</span>
        </button>
        <button onClick={() => setShowShop(true)} className="flex flex-col items-center text-xs text-slate-500">
          <ShoppingCart size={20} />
          <span>{language === 'ru' ? 'Магазин' : 'Do\'kon'}</span>
        </button>
      </div>

      {showShop && <ShopModal onClose={() => setShowShop(false)} />}
    </div>
  );
}
