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
        { id: 'opt1', title: { ru: 'Показатель преломления', uz: 'Sindirish ko\'rsatkichi' }, description: { ru: 'Угол падения 30°, угол преломления 20°. Найдите показатель преломления (округлите до сотых).', uz: 'Tushish burchagi 30°, sinish burchagi 20°. Sindirish ko\'rsatkichini toping (yuzdan birgacha yaxlitlang).' }, difficulty: 2, xpReward: 35, coinReward: 5, formulas: ['n'], answer: 1.46 },
        { id: 'opt2', title: { ru: 'Скорость света в стекле', uz: 'Shishada yorug\'lik tezligi' }, description: { ru: 'Показатель преломления стекла 1.5. Найдите скорость света в стекле (×10⁸ м/с).', uz: 'Shishaning sindirish ko\'rsatkichi 1.5. Shishada yorug\'lik tezligini toping (×10⁸ m/s).' }, difficulty: 2, xpReward: 35, coinReward: 5, formulas: ['c'], answer: 2 },
        { id: 'opt3', title: { ru: 'Линза', uz: 'Linza' }, description: { ru: 'Предмет находится на расстоянии 20 см от линзы с фокусным расстоянием 10 см. Найдите расстояние до изображения (в см).', uz: 'Buyum fokus masofasi 10 sm bo\'lgan linzadan 20 sm masofada joylashgan. Tasvirgacha bo\'lgan masofani toping (sm).' }, difficulty: 3, xpReward: 50, coinReward: 8, formulas: ['lens'], answer: 20 },
        { id: 'opt4', title: { ru: 'Оптическая сила линзы', uz: 'Linza optik kuchi' }, description: { ru: 'Фокусное расстояние линзы 25 см. Найдите оптическую силу (дптр).', uz: 'Linzaning fokus masofasi 25 sm. Optik kuchini toping (dptr).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['lens'], answer: 4 },
        { id: 'opt5', title: { ru: 'Угол преломления', uz: 'Sinish burchagi' }, description: { ru: 'Показатель преломления 2.0, угол падения 30°. Найдите угол преломления (в градусах, округлите до целых).', uz: 'Sindirish ko\'rsatkichi 2.0, tushish burchagi 30°. Sinish burchagini toping (gradus, butungacha yaxlitlang).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['n'], answer: 14 },
        { id: 'opt6', title: { ru: 'Скорость света в воде', uz: 'Suvda yorug\'lik tezligi' }, description: { ru: 'Показатель преломления воды 1.33. Найдите скорость света в воде (×10⁸ м/с, округлите до сотых).', uz: 'Suvning sindirish ko\'rsatkichi 1.33. Suvda yorug\'lik tezligini toping (×10⁸ m/s, yuzdan birgacha yaxlitlang).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['c'], answer: 2.26 },
        { id: 'opt7', title: { ru: 'Фокусное расстояние', uz: 'Fokus masofasi' }, description: { ru: 'Оптическая сила линзы 5 дптр. Найдите фокусное расстояние (в см).', uz: 'Linzaning optik kuchi 5 dptr. Fokus masofasini toping (sm).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['lens'], answer: 20 },
        { id: 'opt8', title: { ru: 'Увеличение линзы', uz: 'Linza kattalashtirishi' }, description: { ru: 'Расстояние до изображения 30 см, до предмета 10 см. Найдите увеличение.', uz: 'Tasvirgacha masofa 30 sm, buyumgacha 10 sm. Kattalashtirishni toping.' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: [], answer: 3 },
        { id: 'opt9', title: { ru: 'Критический угол', uz: 'Kritik burchak' }, description: { ru: 'Показатель преломления среды 1.5. Найдите предельный угол полного внутреннего отражения (округлите до целых).', uz: 'Muhitning sindirish ko\'rsatkichi 1.5. To\'liq ichki qaytishning chegaraviy burchagini toping (butungacha yaxlitlang).' }, difficulty: 3, xpReward: 50, coinReward: 8, formulas: ['n'], answer: 42 },
        { id: 'opt10', title: { ru: 'Скорость света в алмазе', uz: 'Olmosda yorug\'lik tezligi' }, description: { ru: 'Показатель преломления алмаза 2.42. Найдите скорость света в алмазе (×10⁸ м/с, округлите до десятых).', uz: 'Olmosning sindirish ko\'rsatkichi 2.42. Olmosda yorug\'lik tezligini toping (×10⁸ m/s, o\'ndan birgacha yaxlitlang).' }, difficulty: 2, xpReward: 35, coinReward: 5, formulas: ['c'], answer: 1.2 }
      ],
      quiz: [
        { id: 'opt-q1', difficulty: 1, question: { ru: 'Закон преломления света:', uz: 'Yorug\'lik sinish qonuni:' }, options: [{ ru: 'sinα/sinβ = n', uz: 'sinα/sinβ = n' }, { ru: 'sinα·sinβ = n', uz: 'sinα·sinβ = n' }, { ru: 'cosα/cosβ = n', uz: 'cosα/cosβ = n' }, { ru: 'tanα/tanβ = n', uz: 'tanα/tanβ = n' }], correctIndex: 0 },
        { id: 'opt-q2', difficulty: 1, question: { ru: 'Скорость света в вакууме:', uz: 'Vakuumda yorug\'lik tezligi:' }, options: [{ ru: '3·10⁸ м/с', uz: '3·10⁸ m/s' }, { ru: '3·10⁶ м/с', uz: '3·10⁶ m/s' }, { ru: '300 м/с', uz: '300 m/s' }, { ru: '3 км/с', uz: '3 km/s' }], correctIndex: 0 },
        { id: 'opt-q3', difficulty: 2, question: { ru: 'Что такое дисперсия?', uz: 'Dispersiya nima?' }, options: [{ ru: 'Разложение белого света в спектр', uz: 'Oq yorug\'likning spektrga ajralishi' }, { ru: 'Отражение света', uz: 'Yorug\'likning qaytishi' }, { ru: 'Преломление света', uz: 'Yorug\'likning sinishi' }, { ru: 'Поглощение света', uz: 'Yorug\'likning yutilishi' }], correctIndex: 0 },
        { id: 'opt-q4', difficulty: 2, question: { ru: 'Линза с фокусным расстоянием 10 см. Чему равна оптическая сила?', uz: 'Fokus masofasi 10 sm bo\'lgan linza. Optik kuchi qancha?' }, options: [{ ru: '10 дптр', uz: '10 dptr' }, { ru: '0.1 дптр', uz: '0.1 dptr' }, { ru: '1 дптр', uz: '1 dptr' }, { ru: '100 дптр', uz: '100 dptr' }], correctIndex: 0 },
        { id: 'opt-q5', difficulty: 3, question: { ru: 'Свет переходит из воздуха в воду (n=1.33). Угол падения 45°. Найдите угол преломления (приблизительно).', uz: 'Yorug\'lik havodan suvga o\'tadi (n=1.33). Tushish burchagi 45°. Sinish burchagini toping (taxminan).' }, options: [{ ru: '32°', uz: '32°' }, { ru: '45°', uz: '45°' }, { ru: '60°', uz: '60°' }, { ru: '20°', uz: '20°' }], correctIndex: 0 }
      ],
      simulationType: 'prism'
    },
    {
      id: 'waves',
      moduleId: 'optics',
      title: { ru: 'Волновая оптика', uz: 'To\'lqin optikasi' },
      summary: { ru: 'Интерференция, дифракция, поляризация света.', uz: 'Interferentsiya, difraksiya, yorug\'lik qutblanishi.' },
      details: { ru: 'Волновые свойства света проявляются в явлениях интерференции и дифракции.', uz: 'Yorug\'likning to\'lqin xossalari interferentsiya va difraksiyada namoyon bo\'ladi.' },
      formulas: [
        { id: 'd', latex: 'd\\sin\\theta = k\\lambda', description: { ru: 'Условие максимума дифракционной решётки', uz: 'Difraksion panjara maksimum sharti' } }
      ],
      tasks: [
        { id: 'wave1', title: { ru: 'Длина волны', uz: 'To\'lqin uzunligi' }, description: { ru: 'Дифракционная решётка с периодом 2 мкм даёт максимум первого порядка под углом 30°. Найдите длину волны (нм).', uz: 'Davri 2 mkm bo\'lgan difraksion panjara 30° burchak ostida birinchi tartibli maksimum beradi. To\'lqin uzunligini toping (nm).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['d'], answer: 1000 },
        { id: 'wave2', title: { ru: 'Период решётки', uz: 'Panjara davri' }, description: { ru: 'Максимум второго порядка для длины волны 500 нм наблюдается под углом 30°. Найдите период решётки (мкм).', uz: '500 nm to\'lqin uzunligi uchun ikkinchi tartibli maksimum 30° burchak ostida kuzatiladi. Panjara davrini toping (mkm).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['d'], answer: 2 },
        { id: 'wave3', title: { ru: 'Угол максимума', uz: 'Maksimum burchagi' }, description: { ru: 'Период решётки 3 мкм, длина волны 600 нм. Найдите угол для первого максимума (в градусах).', uz: 'Panjara davri 3 mkm, to\'lqin uzunligi 600 nm. Birinchi maksimum uchun burchakni toping (gradus).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['d'], answer: 11.5 },
        { id: 'wave4', title: { ru: 'Разность хода', uz: 'Yo\'l farqi' }, description: { ru: 'Два когерентных источника с длиной волны 400 нм. Разность хода 200 нм. Что наблюдается? (1 - максимум, 0 - минимум)', uz: '400 nm to\'lqin uzunlikdagi ikkita kogerent manba. Yo\'l farqi 200 nm. Nima kuzatiladi? (1 - maksimum, 0 - minimum)' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: [], answer: 1 },
        { id: 'wave5', title: { ru: 'Число максимумов', uz: 'Maksimumlar soni' }, description: { ru: 'Период решётки 1 мкм, длина волны 400 нм. Сколько всего максимумов (включая нулевой)?', uz: 'Panjara davri 1 mkm, to\'lqin uzunligi 400 nm. Jami nechta maksimum (nolchi bilan)?' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['d'], answer: 5 },
        { id: 'wave6', title: { ru: 'Длина волны через разность хода', uz: 'Yo\'l farqi orqali to\'lqin uzunligi' }, description: { ru: 'Для первого максимума разность хода равна 550 нм. Найдите длину волны (нм).', uz: 'Birinchi maksimum uchun yo\'l farqi 550 nm ga teng. To\'lqin uzunligini toping (nm).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['d'], answer: 550 },
        { id: 'wave7', title: { ru: 'Угол второго максимума', uz: 'Ikkinchi maksimum burchagi' }, description: { ru: 'Период решётки 2 мкм, длина волны 600 нм. Найдите угол второго максимума (в градусах).', uz: 'Panjara davri 2 mkm, to\'lqin uzunligi 600 nm. Ikkinchi maksimum burchagini toping (gradus).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['d'], answer: 36.9 },
        { id: 'wave8', title: { ru: 'Длина волны для третьего максимума', uz: 'Uchinchi maksimum uchun to\'lqin uzunligi' }, description: { ru: 'Решётка с периодом 1.5 мкм даёт третий максимум под углом 90°. Найдите максимальную длину волны (нм).', uz: '1.5 mkm davrli panjara 90° burchak ostida uchinchi maksimum beradi. Maksimal to\'lqin uzunligini toping (nm).' }, difficulty: 3, xpReward: 60, coinReward: 9, formulas: ['d'], answer: 500 },
        { id: 'wave9', title: { ru: 'Условие минимума', uz: 'Minimum sharti' }, description: { ru: 'Разность хода 300 нм, длина волны 600 нм. Каков порядок минимума? (укажите число)', uz: 'Yo\'l farqi 300 nm, to\'lqin uzunligi 600 nm. Minimum tartibi qanday? (sonni kiriting)' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: [], answer: 0.5 },
        { id: 'wave10', title: { ru: 'Расстояние между максимумами', uz: 'Maksimumlar orasidagi masofa' }, description: { ru: 'Длина волны 500 нм, расстояние до экрана 1 м, период решётки 10 мкм. Найдите расстояние между нулевым и первым максимумом (в см).', uz: 'To\'lqin uzunligi 500 nm, ekranggacha masofa 1 m, panjara davri 10 mkm. Nolchi va birinchi maksimum orasidagi masofani toping (sm).' }, difficulty: 3, xpReward: 60, coinReward: 9, formulas: ['d'], answer: 5 }
      ],
      quiz: [
        { id: 'wave-q1', difficulty: 2, question: { ru: 'Явление интерференции света доказывает:', uz: 'Yorug\'lik interferentsiyasi nima isbotlaydi?' }, options: [{ ru: 'Волновую природу света', uz: 'Yorug\'likning to\'lqin tabiatini' }, { ru: 'Корпускулярную природу света', uz: 'Yorug\'likning korpuskulyar tabiatini' }, { ru: 'Химические свойства', uz: 'Kimyoviy xossalari' }, { ru: 'Электрические свойства', uz: 'Elektr xossalari' }], correctIndex: 0 },
        { id: 'wave-q2', difficulty: 2, question: { ru: 'Какое условие необходимо для интерференции?', uz: 'Interferentsiya uchun qanday shart zarur?' }, options: [{ ru: 'Когерентность источников', uz: 'Manbalar kogerentligi' }, { ru: 'Разная частота', uz: 'Har xil chastota' }, { ru: 'Большая интенсивность', uz: 'Katta intensivlik' }, { ru: 'Поляризация', uz: 'Qutblanish' }], correctIndex: 0 }
      ],
      simulationType: 'waves'
    }
  ]
};
