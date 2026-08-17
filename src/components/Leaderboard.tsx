import { useGameStore } from '../store/useGameStore';
import { Trophy } from 'lucide-react';

const leaders = [
  { name: 'Zavlon', xp: 1250, region: 'Tashkent' },
  { name: 'Dilnoza', xp: 980, region: 'Samarkand' },
  { name: 'Bekzod', xp: 860, region: 'Bukhara' },
  { name: 'Kamola', xp: 720, region: 'Namangan' },
  { name: 'Sardor', xp: 600, region: 'Fergana' }
];

export default function Leaderboard() {
  const { xp, level, language } = useGameStore();
  return (
    <div className="p-4">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
        <Trophy className="text-amber-400" /> {language === 'ru' ? 'Лидеры Узбекистана' : 'O\'zbekiston yetakchilari'}
      </h2>
      <div className="rounded bg-slate-800 p-4">
        {leaders.map((l, i) => (
          <div key={i} className={`flex items-center justify-between py-2 ${i === 0 ? 'text-amber-400' : ''}`}>
            <div>
              <span className="mr-2">{i + 1}.</span>
              <span>{l.name}</span>
              <span className="ml-2 text-xs text-slate-400">{l.region}</span>
            </div>
            <span className="text-sm">{l.xp} XP</span>
          </div>
        ))}
        <div className="mt-4 border-t border-slate-700 pt-2">
          <div className="flex items-center justify-between">
            <span>👤 {language === 'ru' ? 'Вы' : 'Siz'} (lvl {level})</span>
            <span className="text-sm">{xp} XP</span>
          </div>
        </div>
      </div>
    </div>
  );
}
