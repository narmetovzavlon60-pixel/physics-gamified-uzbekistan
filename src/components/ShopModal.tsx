import { useState } from 'react';
import { useGameStore } from '../store/useGameStore';
import type { InventoryItem } from '../types/physics';
import { playSound } from '../utils/sound';

const items: InventoryItem[] = [
  { id: 'avatar_einstein', name: { ru: 'Аватар: Эйнштейн', uz: 'Avatar: Eynshteyn' }, description: { ru: 'Стиль великого физика', uz: 'Buyuk fizik uslubi' }, cost: 50, type: 'avatar' },
  { id: 'avatar_newton', name: { ru: 'Аватар: Ньютон', uz: 'Avatar: Nyuton' }, description: { ru: 'Классический учёный', uz: 'Klassik olim' }, cost: 80, type: 'avatar' },
  { id: 'avatar_curie', name: { ru: 'Аватар: Кюри', uz: 'Avatar: Kyuri' }, description: { ru: 'Первая женщина-физик', uz: 'Birinchi ayol fizik' }, cost: 100, type: 'avatar' },
  { id: 'theme_dark', name: { ru: 'Тёмная тема', uz: 'Qorong\'u mavzu' }, description: { ru: 'Глубокий тёмный интерфейс', uz: 'Chuqur qorong\'u interfeys' }, cost: 30, type: 'theme' },
  { id: 'theme_neon', name: { ru: 'Неоновая тема', uz: 'Neon mavzu' }, description: { ru: 'Яркие неоновые цвета', uz: 'Yorqin neon ranglar' }, cost: 60, type: 'theme' },
  { id: 'power_double_xp', name: { ru: 'Двойной XP', uz: 'Ikkilangan XP' }, description: { ru: 'Удваивает XP на 1 час', uz: '1 soatga XP ni ikki barobar qiladi' }, cost: 100, type: 'powerup' },
  { id: 'power_coin_boost', name: { ru: 'Усиление монет', uz: 'Tangalarni kuchaytirish' }, description: { ru: '+50% монет за задания', uz: 'Vazifalar uchun +50% tanga' }, cost: 80, type: 'powerup' },
  { id: 'title_physicist', name: { ru: 'Титул: Физик', uz: 'Unvon: Fizik' }, description: { ru: 'Отображается в профиле', uz: 'Profilda ko\'rinadi' }, cost: 150, type: 'title' },
  { id: 'title_genius', name: { ru: 'Титул: Гений', uz: 'Unvon: Geniy' }, description: { ru: 'Для лучших умов', uz: 'Eng zo\'r aqllar uchun' }, cost: 300, type: 'title' }
];

export default function ShopModal({ onClose }: { onClose: () => void }) {
  const { coins, inventory, purchaseItem, language } = useGameStore();
  const [message, setMessage] = useState('');

  const buy = (item: InventoryItem) => {
    const success = purchaseItem(item.id, item.cost);
    setMessage(success ? '✅ ' + (language === 'ru' ? 'Куплено!' : 'Sotib olindi!') : '❌ ' + (language === 'ru' ? 'Недостаточно монет' : 'Tangalar yetarli emas'));
    playSound(success ? 'buy' : 'wrong');
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4" onClick={() => { playSound('click'); onClose(); }}>
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-6 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button onClick={() => { playSound('click'); onClose(); }} className="float-right text-slate-400">✕</button>
        <h3 className="mb-4 text-lg font-bold">🛒 {language === 'ru' ? 'Магазин' : 'Do\'kon'}</h3>
        <p className="mb-4 text-sm text-amber-400">🪙 {coins}</p>
        <div className="space-y-3">
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between rounded bg-slate-700 p-3">
              <div>
                <p className="text-sm font-semibold">{item.name[language]}</p>
                <p className="text-xs text-slate-400">{item.description[language]}</p>
              </div>
              <button
                onClick={() => buy(item)}
                disabled={inventory.includes(item.id)}
                className={`rounded px-3 py-1 text-sm ${inventory.includes(item.id) ? 'bg-slate-600 text-slate-400' : 'bg-emerald-600'}`}
              >
                {inventory.includes(item.id) ? '✓' : item.cost}
              </button>
            </div>
          ))}
        </div>
        {message && <p className="mt-4 text-center text-sm">{message}</p>}
      </div>
    </div>
  );
}
