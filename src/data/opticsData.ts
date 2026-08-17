import type { PhysicsModule } from '../types/physics';

export const opticsModule: PhysicsModule = {
  id: 'optics',
  title: { ru: 'Оптика и волны', uz: 'Optika va to\'lqinlar' },
  icon: '🔦',
  color: '#10b981',
  summary: { ru: 'Изучает свет, его распространение, преломление, линзы и волновые явления.', uz: 'Yorug\'lik, uning tarqalishi, sinishi, linzalar va to\'lqin hodisalarini o\'rganadi.' },
  topics: [
    {
      id: 'refraction',
      moduleId: 'optics',
      title: { ru: 'Преломление света', uz: 'Yorug\'lik sinishi' },
      summary: { ru: 'Закон Снеллиуса, показатель преломления, линзы.', uz: 'Snellius qonuni, sindirish ko\'rsatkichi, linzalar.' },
      details: { ru: 'Свет меняет направление на границе сред. Показатель преломления определяет, во сколько раз скорость света в среде меньше, чем в вакууме.', uz: 'Yorug\'lik muhit chegarasida yo\'nalishini o\'zgartiradi. Sindirish ko\'rsatkichi yorug\'likning muhitdagi tezligi vakuumdagidan necha marta kichikligini belgilaydi.' },
      formulas: [
        { id: 'n', latex: 'n = \\frac{\\sin \\alpha}{\\sin \\beta}', description: { ru: 'Показатель преломления', uz: 'Sindirish ko\'rsatkichi' } },
        { id: 'c', latex: 'v = \\frac{c}{n}', description: { ru: 'Скорость света в среде', uz: 'Muhitda yorug\'lik tezligi' } },
        { id: 'lens', latex: '\\frac{1}{F} = \\frac{1}{d} + \\frac{1}{f}', description: { ru: 'Формула тонкой линзы', uz: 'Yupqa linza formulasi' } }
      ],
      tasks: [
        { id: 'opt1', title: { ru: 'Показатель преломления', uz: 'Sindirish ko\'rsatkichi' }, description: { ru: 'Угол падения 30°, угол преломления 20°. Найдите показатель преломления (округлите до сотых).', uz: 'Tushish burchagi 30°, sinish burchagi 20°. Sindirish ko\'rsatkichini toping (yuzdan birgacha yaxlitlang).' }, difficulty: 2, xpReward: 45, coinReward: 7, formulas: ['n'], answer: 1.46 },
        { id: 'opt2', title: { ru: 'Скорость света в стекле', uz: 'Shishada yorug\'lik tezligi' }, description: { ru: 'Показатель преломления стекла 1.5. Найдите скорость света в стекле (×10⁸ м/с).', uz: 'Shishaning sindirish ko\'rsatkichi 1.5. Shishada yorug\'lik tezligini toping (×10⁸ m/s).' }, difficulty: 2, xpReward: 50, coinReward: 8, formulas: ['c'], answer: 2 },
        { id: 'opt3', title: { ru: 'Линза', uz: 'Linza' }, description: { ru: 'Предмет на расстоянии 20 см от линзы с фокусным расстоянием 10 см. Найдите расстояние до изображения (в см).', uz: 'Buyum fokus masofasi 10 sm bo\'lgan linzadan 20 sm masofada. Tasvirgacha masofani toping (sm).' }, difficulty: 3, xpReward: 65, coinReward: 10, formulas: ['lens'], answer: 20 }
      ],
      quiz: [
        { id: 'opt-q1', difficulty: 1, question: { ru: 'Закон преломления света:', uz: 'Yorug\'lik sinish qonuni:' }, options: [{ ru: 'sinα/sinβ = n', uz: 'sinα/sinβ = n' }, { ru: 'sinα·sinβ = n', uz: 'sinα·sinβ = n' }, { ru: 'cosα/cosβ = n', uz: 'cosα/cosβ = n' }, { ru: 'tanα/tanβ = n', uz: 'tanα/tanβ = n' }], correctIndex: 0 },
        { id: 'opt-q2', difficulty: 1, question: { ru: 'Скорость света в вакууме:', uz: 'Vakuumda yorug\'lik tezligi:' }, options: [{ ru: '3·10⁸ м/с', uz: '3·10⁸ m/s' }, { ru: '3·10⁶ м/с', uz: '3·10⁶ m/s' }, { ru: '300 м/с', uz: '300 m/s' }, { ru: '3 км/с', uz: '3 km/s' }], correctIndex: 0 },
        { id: 'opt-q3', difficulty: 2, question: { ru: 'Что такое дисперсия?', uz: 'Dispersiya nima?' }, options: [{ ru: 'Разложение белого света в спектр', uz: 'Oq yorug\'likning spektrga ajralishi' }, { ru: 'Отражение света', uz: 'Yorug\'likning qaytishi' }, { ru: 'Преломление света', uz: 'Yorug\'likning sinishi' }, { ru: 'Поглощение света', uz: 'Yorug\'likning yutilishi' }], correctIndex: 0 },
        { id: 'opt-q4', difficulty: 2, question: { ru: 'Линза с фокусным расстоянием 10 см. Чему равна оптическая сила?', uz: 'Fokus masofasi 10 sm bo\'lgan linza. Optik kuchi qancha?' }, options: [{ ru: '10 дптр', uz: '10 dptr' }, { ru: '0.1 дптр', uz: '0.1 dptr' }, { ru: '1 дптр', uz: '1 dptr' }, { ru: '100 дптр', uz: '100 dptr' }], correctIndex: 0 },
        { id: 'opt-q5', difficulty: 3, question: { ru: 'Свет переходит из воздуха в воду (n=1.33). Угол падения 45°. Найдите угол преломления (приблизительно).', uz: 'Yorug\'lik havodan suvga o\'tadi (n=1.33). Tushish burchagi 45°. Sinish burchagini toping (taxminan).' }, options: [{ ru: '32°', uz: '32°' }, { ru: '45°', uz: '45°' }, { ru: '60°', uz: '60°' }, { ru: '20°', uz: '20°' }], correctIndex: 0 }
      ],
      hasSimulation: true
    }
  ]
};
