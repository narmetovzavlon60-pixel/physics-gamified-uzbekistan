import { useState } from 'react';
import { useGameStore } from '../store/useGameStore';
import type { InventoryItem } from '../types/physics';

const items: InventoryItem[] = [
  {
    id: 'avatar_albert',
    name: { ru: 'Аватар: Эйнштейн', uz: 'Avatar: Eynshteyn' },
    description: { ru: 'Стиль физика-теоретика', uz: 'Nazariy fizik uslubi' },
    cost: 50,
    type: 'avatar'
  },
  {
    id: 'theme_dark',
    name: { ru: 'Тёмная тема', uz: 'Qorong\'u mavzu' },
    description: { ru: 'Глубокий тёмный интерфейс', uz: 'Chuqur qorong\'u interfeys' },
    cost: 30,
    type: 'theme'
  },
  {
    id: 'power_double_xp',
    name: { ru: 'Двойной XP', uz: 'Ikkilangan XP' },
    description: { ru: 'Удваивает XP на 1 час', uz: '1 soatga XP ni ikki barobar qiladi' },
    cost: 100,
    type: 'powerup'
  }
];

export default function ShopModal({ onClose }: { onClose: () => void }) {
  const { coins, inventory, purchaseItem, language } = useGameStore();
  const [message, setMessage] = useState('');

  const buy = (item: InventoryItem) => {
    const success = purchaseItem(item.id, item.cost);
    setMessage(success ? '✅ ' + (language === 'ru' ? 'Куплено!' : 'Sotib olindi!') : '❌ ' + (language === 'ru' ? 'Недостаточно монет' : 'Tangalar yetarli emas'));
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-6" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="float-right text-slate-400">✕</button>
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
