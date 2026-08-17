import type { PhysicsModule } from '../types/physics';

export const electrodynamicsModule: PhysicsModule = {
  id: 'electrodynamics',
  title: { ru: 'Электродинамика', uz: 'Elektrodinamika' },
  icon: '⚡',
  color: '#f59e0b',
  summary: { ru: 'Изучает электрические и магнитные явления, законы цепей, электромагнитную индукцию.', uz: 'Elektr va magnit hodisalari, zanjir qonunlari, elektromagnit induksiyani o\'rganadi.' },
  topics: [
    {
      id: 'circuits',
      moduleId: 'electrodynamics',
      title: { ru: 'Электрические цепи', uz: 'Elektr zanjirlari' },
      summary: { ru: 'Закон Ома, сопротивление, мощность, соединения проводников.', uz: 'Om qonuni, qarshilik, quvvat, o\'tkazgichlar ulanishi.' },
      details: { ru: 'Электрическая цепь — замкнутый путь для тока. Закон Ома связывает напряжение, силу тока и сопротивление.', uz: 'Elektr zanjiri — tok uchun berk yo\'l. Om qonuni kuchlanish, tok kuchi va qarshilikni bog\'laydi.' },
      formulas: [
        { id: 'Ohm', latex: 'I = \\frac{U}{R}', description: { ru: 'Закон Ома', uz: 'Om qonuni' } },
        { id: 'P', latex: 'P = UI', description: { ru: 'Мощность', uz: 'Quvvat' } },
        { id: 'Rseries', latex: 'R = R_1 + R_2', description: { ru: 'Последовательное соединение', uz: 'Ketma-ket ulanish' } },
        { id: 'Rparallel', latex: '\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}', description: { ru: 'Параллельное соединение', uz: 'Parallel ulanish' } }
      ],
      tasks: [
        { id: 'ohm1', title: { ru: 'Сила тока', uz: 'Tok kuchi' }, description: { ru: 'Напряжение 12 В, сопротивление 4 Ом. Найдите силу тока (А).', uz: 'Kuchlanish 12 V, qarshilik 4 Ω. Tok kuchini toping (A).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Ohm'], answer: 3 },
        { id: 'ohm2', title: { ru: 'Мощность', uz: 'Quvvat' }, description: { ru: 'Прибор работает при 220 В и токе 2 А. Найдите мощность (Вт).', uz: 'Asbob 220 V va 2 A tokda ishlaydi. Quvvatni toping (W).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['P'], answer: 440 },
        { id: 'ohm3', title: { ru: 'Последовательное соединение', uz: 'Ketma-ket ulanish' }, description: { ru: 'Резисторы 5 Ом и 10 Ом соединены последовательно. Найдите общее сопротивление (Ом).', uz: '5 Ω va 10 Ω rezistorlar ketma-ket ulangan. Umumiy qarshilikni toping (Ω).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Rseries'], answer: 15 },
        { id: 'ohm4', title: { ru: 'Параллельное соединение', uz: 'Parallel ulanish' }, description: { ru: 'Резисторы 6 Ом и 3 Ом соединены параллельно. Найдите общее сопротивление (Ом).', uz: '6 Ω va 3 Ω rezistorlar parallel ulangan. Umumiy qarshilikni toping (Ω).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Rparallel'], answer: 2 },
        { id: 'ohm5', title: { ru: 'Напряжение', uz: 'Kuchlanish' }, description: { ru: 'Сила тока 0.5 А, сопротивление 20 Ом. Найдите напряжение (В).', uz: 'Tok kuchi 0.5 A, qarshilik 20 Ω. Kuchlanishni toping (V).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Ohm'], answer: 10 },
        { id: 'ohm6', title: { ru: 'Сопротивление', uz: 'Qarshilik' }, description: { ru: 'Напряжение 24 В, сила тока 2 А. Найдите сопротивление (Ом).', uz: 'Kuchlanish 24 V, tok kuchi 2 A. Qarshilikni toping (Ω).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Ohm'], answer: 12 },
        { id: 'ohm7', title: { ru: 'Энергия тока', uz: 'Tok energiyasi' }, description: { ru: 'Мощность 100 Вт, время 2 часа. Найдите энергию (Вт·ч).', uz: 'Quvvat 100 W, vaqt 2 soat. Energiyani toping (W·soat).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['P'], answer: 200 },
        { id: 'ohm8', title: { ru: 'Общее сопротивление параллельное', uz: 'Parallel umumiy qarshilik' }, description: { ru: 'Два резистора по 4 Ом соединены параллельно. Найдите общее сопротивление (Ом).', uz: 'Ikkita 4 Ω rezistor parallel ulangan. Umumiy qarshilikni toping (Ω).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Rparallel'], answer: 2 },
        { id: 'ohm9', title: { ru: 'Сила тока при последовательном', uz: 'Ketma-ket ulanishda tok kuchi' }, description: { ru: 'Напряжение 30 В, общее сопротивление 10 Ом (последовательное). Найдите ток (А).', uz: 'Kuchlanish 30 V, umumiy qarshilik 10 Ω (ketma-ket). Tokni toping (A).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Ohm'], answer: 3 },
        { id: 'ohm10', title: { ru: 'Мощность через сопротивление', uz: 'Qarshilik orqali quvvat' }, description: { ru: 'Сила тока 3 А, сопротивление 5 Ом. Найдите мощность (Вт).', uz: 'Tok kuchi 3 A, qarshilik 5 Ω. Quvvatni toping (W).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['P'], answer: 45 }
      ],
      quiz: [
        { id: 'ohm-q1', difficulty: 1, question: { ru: 'Закон Ома для участка цепи:', uz: 'Zanjir qismi uchun Om qonuni:' }, options: [{ ru: 'I = U/R', uz: 'I = U/R' }, { ru: 'I = UR', uz: 'I = UR' }, { ru: 'U = I/R', uz: 'U = I/R' }, { ru: 'R = UI', uz: 'R = UI' }], correctIndex: 0 },
        { id: 'ohm-q2', difficulty: 1, question: { ru: 'Единица сопротивления:', uz: 'Qarshilik birligi:' }, options: [{ ru: 'Ом (Ω)', uz: 'Om (Ω)' }, { ru: 'Ампер (A)', uz: 'Amper (A)' }, { ru: 'Вольт (V)', uz: 'Volt (V)' }, { ru: 'Ватт (W)', uz: 'Vatt (W)' }], correctIndex: 0 },
        { id: 'ohm-q3', difficulty: 2, question: { ru: 'Формула мощности:', uz: 'Quvvat formulasi:' }, options: [{ ru: 'P = UI', uz: 'P = UI' }, { ru: 'P = IR', uz: 'P = IR' }, { ru: 'P = UR', uz: 'P = UR' }, { ru: 'P = I/R', uz: 'P = I/R' }], correctIndex: 0 },
        { id: 'ohm-q4', difficulty: 2, question: { ru: 'При последовательном соединении общее сопротивление:', uz: 'Ketma-ket ulanishda umumiy qarshilik:' }, options: [{ ru: 'Увеличивается', uz: 'Ortadi' }, { ru: 'Уменьшается', uz: 'Kamayadi' }, { ru: 'Не меняется', uz: 'O\'zgarmaydi' }, { ru: 'Становится нулевым', uz: 'Nolga teng bo\'ladi' }], correctIndex: 0 },
        { id: 'ohm-q5', difficulty: 3, question: { ru: 'Два резистора 3 Ом и 6 Ом параллельно. Общее сопротивление равно:', uz: '3 Ω va 6 Ω rezistorlar parallel. Umumiy qarshilik:' }, options: [{ ru: '2 Ом', uz: '2 Ω' }, { ru: '9 Ом', uz: '9 Ω' }, { ru: '0.5 Ом', uz: '0.5 Ω' }, { ru: '18 Ом', uz: '18 Ω' }], correctIndex: 0 }
      ]
    },
    {
      id: 'magnetism',
      moduleId: 'electrodynamics',
      title: { ru: 'Магнетизм', uz: 'Magnitizm' },
      summary: { ru: 'Магнитное поле, сила Лоренца, электромагнитная индукция.', uz: 'Magnit maydon, Lorents kuchi, elektromagnit induksiya.' },
      details: { ru: 'Движущиеся заряды создают магнитное поле. На заряд в магнитном поле действует сила Лоренца.', uz: 'Harakatlanuvchi zaryadlar magnit maydon hosil qiladi. Magnit maydondagi zaryadga Lorents kuchi ta\'sir qiladi.' },
      formulas: [
        { id: 'Lorentz', latex: 'F = qvB\\sin\\theta', description: { ru: 'Сила Лоренца', uz: 'Lorents kuchi' } },
        { id: 'Flux', latex: '\\Phi = B A \\cos\\theta', description: { ru: 'Магнитный поток', uz: 'Magnit oqim' } }
      ],
      tasks: [
        { id: 'mag1', title: { ru: 'Сила Лоренца', uz: 'Lorents kuchi' }, description: { ru: 'Заряд 2 мкКл движется со скоростью 100 м/с перпендикулярно магнитному полю 0.5 Тл. Найдите силу (мН).', uz: '2 mkKl zaryad 100 m/s tezlik bilan 0.5 T magnit maydonga perpendikulyar harakatlanadi. Kuchni toping (mN).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Lorentz'], answer: 0.1 },
        { id: 'mag2', title: { ru: 'Магнитный поток', uz: 'Magnit oqim' }, description: { ru: 'Площадь рамки 0.1 м², индукция 0.2 Тл, угол 0°. Найдите поток (Вб).', uz: 'Ramka yuzasi 0.1 m², induksiya 0.2 T, burchak 0°. Oqimni toping (Wb).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Flux'], answer: 0.02 },
        { id: 'mag3', title: { ru: 'Сила на проводник', uz: 'O\'tkazgichga ta\'sir kuchi' }, description: { ru: 'Проводник длиной 0.5 м с током 4 А в поле 0.3 Тл (угол 90°). Найдите силу (Н).', uz: '0.5 m uzunlikdagi o\'tkazgich 4 A tok bilan 0.3 T maydonda (90° burchak). Kuchni toping (N).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Lorentz'], answer: 0.6 },
        { id: 'mag4', title: { ru: 'Магнитная индукция', uz: 'Magnit induksiya' }, description: { ru: 'Магнитный поток 0.05 Вб через площадь 0.1 м² при угле 0°. Найдите индукцию (Тл).', uz: '0.05 Wb magnit oqim 0.1 m² yuzadan 0° burchak ostida. Induksiyani toping (T).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Flux'], answer: 0.5 },
        { id: 'mag5', title: { ru: 'ЭДС индукции', uz: 'Induksiya EYK' }, description: { ru: 'Магнитный поток изменяется с 0.4 Вб до 0 за 0.2 с. Найдите ЭДС (В).', uz: 'Magnit oqim 0.4 Wb dan 0 gacha 0.2 s da o\'zgaradi. EYKni toping (V).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: [], answer: 2 },
        { id: 'mag6', title: { ru: 'Угол в магнитном потоке', uz: 'Magnit oqimda burchak' }, description: { ru: 'Индукция 0.5 Тл, площадь 0.2 м², поток 0.05 Вб. Найдите cos угла.', uz: 'Induksiya 0.5 T, yuza 0.2 m², oqim 0.05 Wb. Burchak kosinusini toping.' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Flux'], answer: 0.5 },
        { id: 'mag7', title: { ru: 'Радиус окружности', uz: 'Aylana radiusi' }, description: { ru: 'Электрон (заряд 1.6·10⁻¹⁹ Кл, масса 9.1·10⁻³¹ кг) движется со скоростью 1·10⁶ м/с в поле 0.01 Тл. Найдите радиус (м).', uz: 'Elektron (zaryad 1.6·10⁻¹⁹ C, massa 9.1·10⁻³¹ kg) 1·10⁶ m/s tezlik bilan 0.01 T maydonda harakatlanadi. Radiusni toping (m).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['Lorentz'], answer: 0.000569 },
        { id: 'mag8', title: { ru: 'Направление силы Лоренца', uz: 'Lorents kuchi yo\'nalishi' }, description: { ru: 'Заряд положительный, скорость направлена вправо, поле вверх. Куда направлена сила? (1 - из плоскости, -1 - в плоскость)', uz: 'Zaryad musbat, tezlik o\'ngga, maydon yuqoriga. Kuch qayerga yo\'nalgan? (1 - tekislikdan tashqariga, -1 - ichkariga)' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: [], answer: 1 },
        { id: 'mag9', title: { ru: 'Поток под углом 60°', uz: '60° burchak ostida oqim' }, description: { ru: 'Площадь 0.1 м², индукция 0.4 Тл, угол 60°. Найдите поток (Вб, cos60=0.5).', uz: 'Yuza 0.1 m², induksiya 0.4 T, burchak 60°. Oqimni toping (Wb, cos60=0.5).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Flux'], answer: 0.02 },
        { id: 'mag10', title: { ru: 'ЭДС через скорость', uz: 'Tezlik orqali EYK' }, description: { ru: 'Проводник длиной 0.2 м движется со скоростью 5 м/с перпендикулярно полю 0.1 Тл. Найдите ЭДС (В).', uz: '0.2 m uzunlikdagi o\'tkazgich 5 m/s tezlik bilan 0.1 T maydonga perpendikulyar harakatlanadi. EYKni toping (V).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Lorentz'], answer: 0.1 }
      ],
      quiz: [
        { id: 'mag-q1', difficulty: 2, question: { ru: 'Сила Лоренца действует на...', uz: 'Lorents kuchi nimaga ta\'sir qiladi?' }, options: [{ ru: 'Движущийся заряд', uz: 'Harakatlanuvchi zaryadga' }, { ru: 'Покоящийся заряд', uz: 'Tinch turgan zaryadga' }, { ru: 'Массу', uz: 'Massaga' }, { ru: 'Проводник без тока', uz: 'Toksiz o\'tkazgichga' }], correctIndex: 0 },
        { id: 'mag-q2', difficulty: 2, question: { ru: 'Единица магнитной индукции:', uz: 'Magnit induksiya birligi:' }, options: [{ ru: 'Тесла (Тл)', uz: 'Tesla (T)' }, { ru: 'Вебер (Вб)', uz: 'Veber (Wb)' }, { ru: 'Генри (Гн)', uz: 'Genri (H)' }, { ru: 'Фарад (Ф)', uz: 'Farad (F)' }], correctIndex: 0 }
      ],
      simulationType: 'magnetic'
    }
  ]
};
