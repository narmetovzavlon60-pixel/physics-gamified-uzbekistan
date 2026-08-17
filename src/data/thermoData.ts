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
        { id: 'U', latex: 'U = \\frac{3}{2}\\nu RT', description: { ru: 'Внутренняя энергия', uz: 'Ichki energiya' } },
        { id: 'Q', latex: 'Q = cm\\Delta T', description: { ru: 'Количество теплоты', uz: 'Issiqlik miqdori' } }
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
        },
        {
          id: 'gas2',
          title: { ru: 'Внутренняя энергия', uz: 'Ichki energiya' },
          description: { ru: 'Найдите внутреннюю энергию 2 моль одноатомного газа при 300 К.', uz: '300 K haroratdagi 2 mol bir atomli gazning ichki energiyasini toping.' },
          difficulty: 3,
          xpReward: 60,
          coinReward: 9,
          formulas: ['U']
        },
        {
          id: 'gas3',
          title: { ru: 'Нагрев воды', uz: 'Suvni isitish' },
          description: { ru: 'Сколько теплоты нужно, чтобы нагреть 2 кг воды на 10°C? (c = 4200 Дж/(кг·°C))', uz: '2 kg suvni 10°C ga isitish uchun qancha issiqlik kerak? (c = 4200 J/(kg·°C))' },
          difficulty: 2,
          xpReward: 55,
          coinReward: 8,
          formulas: ['Q']
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
        },
        {
          id: 'gas-q2',
          question: { ru: 'Единица температуры в СИ:', uz: 'SI da harorat birligi:' },
          options: [
            { ru: 'Кельвин (K)', uz: 'Kelvin (K)' },
            { ru: 'Градус Цельсия (°C)', uz: 'Selsiy darajasi (°C)' },
            { ru: 'Джоуль (Дж)', uz: 'Joul (J)' },
            { ru: 'Паскаль (Па)', uz: 'Paskal (Pa)' }
          ],
          correctIndex: 0
        },
        {
          id: 'gas-q3',
          question: { ru: 'Что такое абсолютный ноль?', uz: 'Absolyut nol nima?' },
          options: [
            { ru: '0 K (-273°C)', uz: '0 K (-273°C)' },
            { ru: '0°C', uz: '0°C' },
            { ru: '100°C', uz: '100°C' },
            { ru: '-100°C', uz: '-100°C' }
          ],
          correctIndex: 0
        },
        {
          id: 'gas-q4',
          question: { ru: 'Изотермический процесс — это процесс при...', uz: 'Izotermik jarayon bu... jarayon' },
          options: [
            { ru: 'постоянной температуре', uz: 'doimiy haroratda' },
            { ru: 'постоянном давлении', uz: 'doimiy bosimda' },
            { ru: 'постоянном объёме', uz: 'doimiy hajmda' },
            { ru: 'постоянной энергии', uz: 'doimiy energiyada' }
          ],
          correctIndex: 0
        }
      ]
    }
  ]
};
