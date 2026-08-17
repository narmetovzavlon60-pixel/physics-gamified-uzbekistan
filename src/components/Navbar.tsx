import { useGameStore } from '../store/useGameStore';
import { Coins, Flame, Languages, Zap } from 'lucide-react';

export default function Navbar() {
  const { xp, level, coins, streak, language, toggleLanguage } = useGameStore();
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between bg-slate-900/90 px-4 py-2 backdrop-blur">
      <div className="flex items-center gap-2">
        <Zap className="text-amber-400" size={18} />
        <span className="text-sm font-semibold">{level} lvl</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-amber-400">
          <Coins size={16} />
          <span className="text-sm">{coins}</span>
        </div>
        <div className="flex items-center gap-1 text-orange-400">
          <Flame size={16} />
          <span className="text-sm">{streak}</span>
        </div>
        <button onClick={toggleLanguage} className="rounded bg-slate-700 p-1">
          <Languages size={16} />
          <span className="ml-1 text-xs uppercase">{language}</span>
        </button>
      </div>
    </div>
  );
}
