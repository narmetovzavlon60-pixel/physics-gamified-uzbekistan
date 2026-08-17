import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import TopicCard from './components/TopicCard';
import ShopModal from './components/ShopModal';
import TasksPage from './components/TasksPage';
import QuizPage from './components/QuizPage';
import { physicsModules } from './data/physicsDatabase';
import { useGameStore } from './store/useGameStore';
import type { PhysicsTopic } from './types/physics';
import { Home, ShoppingCart, ClipboardList, HelpCircle } from 'lucide-react';

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
            <h1 className="mb-6 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              ⚡ PhysicUZ 3D
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {physicsModules.map((mod, index) => (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-5 shadow-lg hover:shadow-xl transition-shadow"
                  style={{ borderLeft: `6px solid ${mod.color}` }}
                >
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <span className="text-3xl">{mod.icon}</span> {mod.title[language]}
                  </h2>
                  {mod.summary && (
                    <p className="mt-1 text-xs text-slate-400">{mod.summary[language]}</p>
                  )}
                  <div className="mt-4 space-y-2">
                    {mod.topics.map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        className="block w-full rounded-xl bg-slate-700/50 p-3 text-left text-sm hover:bg-slate-600 transition-colors"
                      >
                        <span className="font-semibold">{topic.title[language]}</span>
                        <span className="block text-xs text-slate-400">
                          {topic.tasks.length} {language === 'ru' ? 'задач' : 'masala'} · {topic.quiz.length} {language === 'ru' ? 'вопросов' : 'savol'}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : tab === 'tasks' ? (
          <TasksPage />
        ) : tab === 'quiz' ? (
          <QuizPage />
        ) : null}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-20 flex justify-around bg-slate-900/95 backdrop-blur py-2 border-t border-slate-800">
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
