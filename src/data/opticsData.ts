import type { PhysicsModule } from '../types/physics';

export const opticsModule: PhysicsModule = {
  id: 'optics',
  title: { ru: 'Оптика и волны', uz: 'Optika va to\'lqinlar' },
  icon: '🔦',
  color: '#10b981',
  topics: [
    {
      id: 'refraction',
      moduleId: 'optics',
      title: { ru: 'Преломление света', uz: 'Yorug\'lik sinishi' },
      summary: {
        ru: 'Закон Снеллиуса, показатель преломления.',
        uz: 'Snellius qonuni, sindirish ko\'rsatkichi.'
      },
      formulas: [
        { id: 'n', latex: 'n = \\frac{\\sin \\alpha}{\\sin \\beta}', description: { ru: 'Показатель преломления', uz: 'Sindirish ko\'rsatkichi' } },
        { id: 'c', latex: 'v = \\frac{c}{n}', description: { ru: 'Скорость света в среде', uz: 'Muhitda yorug\'lik tezligi' } }
      ],
      tasks: [
        {
          id: 'opt1',
          title: { ru: 'Показатель преломления', uz: 'Sindirish ko\'rsatkichi' },
          description: { ru: 'Угол падения 30°, угол преломления 20°. Найдите показатель преломления.', uz: 'Tushish burchagi 30°, sinish burchagi 20°. Sindirish ko\'rsatkichini toping.' },
          difficulty: 2,
          xpReward: 45,
          coinReward: 7,
          formulas: ['n']
        }
      ],
      quiz: [
        {
          id: 'opt-q1',
          question: { ru: 'Закон преломления света:', uz: 'Yorug\'lik sinish qonuni:' },
          options: [
            { ru: 'sinα/sinβ = n', uz: 'sinα/sinβ = n' },
            { ru: 'sinα·sinβ = n', uz: 'sinα·sinβ = n' },
            { ru: 'cosα/cosβ = n', uz: 'cosα/cosβ = n' },
            { ru: 'tanα/tanβ = n', uz: 'tanα/tanβ = n' }
          ],
          correctIndex: 0
        },
        {
          id: 'opt-q2',
          question: { ru: 'Скорость света в вакууме:', uz: 'Vakuumda yorug\'lik tezligi:' },
          options: [
            { ru: '3·10⁸ м/с', uz: '3·10⁸ m/s' },
            { ru: '3·10⁶ м/с', uz: '3·10⁶ m/s' },
            { ru: '300 м/с', uz: '300 m/s' },
            { ru: '3 км/с', uz: '3 km/s' }
          ],
          correctIndex: 0
        }
      ]
    }
  ]
};
