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
        { id: 'c', latex: 'v = \\frac{c}{n}', description: { ru: 'Скорость света в среде', uz: 'Muhitda yorug\'lik tezligi' } },
        { id: 'lens', latex: '\\frac{1}{F} = \\frac{1}{d} + \\frac{1}{f}', description: { ru: 'Формула тонкой линзы', uz: 'Yupqa linza formulasi' } }
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
        },
        {
          id: 'opt2',
          title: { ru: 'Скорость света в стекле', uz: 'Shishada yorug\'lik tezligi' },
          description: { ru: 'Показатель преломления стекла 1.5. Найдите скорость света в стекле. (c = 3·10⁸ м/с)', uz: 'Shishaning sindirish ko\'rsatkichi 1.5. Shishada yorug\'lik tezligini toping. (c = 3·10⁸ m/s)' },
          difficulty: 2,
          xpReward: 50,
          coinReward: 8,
          formulas: ['c']
        },
        {
          id: 'opt3',
          title: { ru: 'Линза', uz: 'Linza' },
          description: { ru: 'Предмет находится на расстоянии 20 см от линзы с фокусным расстоянием 10 см. Найдите расстояние до изображения.', uz: 'Buyum fokus masofasi 10 sm bo\'lgan linzadan 20 sm masofada joylashgan. Tasvirgacha bo\'lgan masofani toping.' },
          difficulty: 3,
          xpReward: 65,
          coinReward: 10,
          formulas: ['lens']
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
        },
        {
          id: 'opt-q3',
          question: { ru: 'Какая линза собирает лучи?', uz: 'Qaysi linza nurlarni to\'playdi?' },
          options: [
            { ru: 'Выпуклая', uz: 'Qavariq' },
            { ru: 'Вогнутая', uz: 'Botiq' },
            { ru: 'Плоская', uz: 'Yassi' },
            { ru: 'Рассеивающая', uz: 'Tarqatuvchi' }
          ],
          correctIndex: 0
        },
        {
          id: 'opt-q4',
          question: { ru: 'Что такое дисперсия?', uz: 'Dispersiya nima?' },
          options: [
            { ru: 'Разложение белого света в спектр', uz: 'Oq yorug\'likning spektrga ajralishi' },
            { ru: 'Отражение света', uz: 'Yorug\'likning qaytishi' },
            { ru: 'Преломление света', uz: 'Yorug\'likning sinishi' },
            { ru: 'Поглощение света', uz: 'Yorug\'likning yutilishi' }
          ],
          correctIndex: 0
        }
      ]
    }
  ]
};
