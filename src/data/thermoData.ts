import type { PhysicsModule } from '../types/physics';

export const thermoModule: PhysicsModule = {
  id: 'thermo',
  title: { ru: 'Термодинамика', uz: 'Termodinamika' },
  icon: '🔥',
  color: '#ef4444',
  topics: [
    {
      id: 'ideal-gas',
      moduleId: 'thermo',
      title: { ru: 'Идеальный газ', uz: 'Ideal gaz' },
      summary: {
        ru: 'Уравнение Менделеева-Клапейрона, изопроцессы.',
        uz: 'Mendeleyev-Klapeyron tenglamasi, izoproseslar.'
      },
      formulas: [
        { id: 'pV', latex: 'pV = \\nu RT', description: { ru: 'Уравнение состояния идеального газа', uz: 'Ideal gaz holat tenglamasi' } },
        { id: 'U', latex: 'U = \\frac{3}{2}\\nu RT', description: { ru: 'Внутренняя энергия', uz: 'Ichki energiya' } }
      ],
      tasks: [
        {
          id: 'gas1',
          title: { ru: 'Давление газа', uz: 'Gaz bosimi' },
          description: { ru: 'Найдите давление 1 моль идеального газа при объёме 22.4 л и температуре 273 К.', uz: '1 mol ideal gazning 22.4 L hajm va 273 K haroratdagi bosimini toping.' },
          difficulty: 2,
          xpReward: 50,
          coinReward: 8,
          formulas: ['pV']
        }
      ],
      quiz: [
        {
          id: 'gas-q1',
          question: { ru: 'Уравнение состояния идеального газа:', uz: 'Ideal gaz holat tenglamasi:' },
          options: [
            { ru: 'pV = νRT', uz: 'pV = νRT' },
            { ru: 'pV = mRT', uz: 'pV = mRT' },
            { ru: 'p = ρRT', uz: 'p = ρRT' },
            { ru: 'V = νRT/p', uz: 'V = νRT/p' }
          ],
          correctIndex: 0
        }
      ]
    }
  ]
};
