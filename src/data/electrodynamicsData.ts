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
      details: { ru: 'Электрическая цепь — замкнутый путь для тока.', uz: 'Elektr zanjiri — tok uchun berk yo\'l.' },
      formulas: [
        { id: 'Ohm', latex: 'I = \\frac{U}{R}', description: { ru: 'Закон Ома', uz: 'Om qonuni' } },
        { id: 'P', latex: 'P = UI', description: { ru: 'Мощность', uz: 'Quvvat' } },
        { id: 'Rseries', latex: 'R = R_1 + R_2', description: { ru: 'Последовательное соединение', uz: 'Ketma-ket ulanish' } },
        { id: 'Rparallel', latex: '\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}', description: { ru: 'Параллельное соединение', uz: 'Parallel ulanish' } }
      ],
      tasks: [
        { id: 'ohm1', title: { ru: 'Сила тока', uz: 'Tok kuchi' }, description: { ru: 'Напряжение 12 В, сопротивление 4 Ом. Найдите силу тока (в А).', uz: 'Kuchlanish 12 V, qarshilik 4 Ω. Tok kuchini (A) toping.' }, difficulty: 1, xpReward: 30, coinReward: 5, formulas: ['Ohm'], answer: 3 },
        { id: 'ohm2', title: { ru: 'Мощность', uz: 'Quvvat' }, description: { ru: 'Прибор работает при 220 В и токе 2 А. Найдите мощность (Вт).', uz: 'Asbob 220 V va 2 A tokda ishlaydi. Quvvatni (W) toping.' }, difficulty: 2, xpReward: 45, coinReward: 7, formulas: ['P'], answer: 440 },
        { id: 'ohm3', title: { ru: 'Последовательное соединение', uz: 'Ketma-ket ulanish' }, description: { ru: 'Резисторы 5 Ом и 10 Ом соединены последовательно. Найдите общее сопротивление (Ом).', uz: '5 Ω va 10 Ω rezistorlar ketma-ket ulangan. Umumiy qarshilikni (Ω) toping.' }, difficulty: 2, xpReward: 50, coinReward: 8, formulas: ['Rseries'], answer: 15 },
        { id: 'ohm4', title: { ru: 'Параллельное соединение', uz: 'Parallel ulanish' }, description: { ru: 'Резисторы 6 Ом и 3 Ом соединены параллельно. Найдите общее сопротивление (Ом).', uz: '6 Ω va 3 Ω rezistorlar parallel ulangan. Umumiy qarshilikni (Ω) toping.' }, difficulty: 3, xpReward: 60, coinReward: 9, formulas: ['Rparallel'], answer: 2 }
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
        { id: 'mag1', title: { ru: 'Сила Лоренца', uz: 'Lorents kuchi' }, description: { ru: 'Заряд 2 мкКл движется со скоростью 100 м/с перпендикулярно магнитному полю 0.5 Тл. Найдите силу (мН).', uz: '2 mkKl zaryad 100 m/s tezlik bilan 0.5 T magnit maydonga perpendikulyar harakatlanadi. Kuchni toping (mN).' }, difficulty: 2, xpReward: 50, coinReward: 8, formulas: ['Lorentz'], answer: 0.1 },
        { id: 'mag2', title: { ru: 'Магнитный поток', uz: 'Magnit oqim' }, description: { ru: 'Площадь рамки 0.1 м², индукция 0.2 Тл, угол 0°. Найдите поток (Вб).', uz: 'Ramka yuzasi 0.1 m², induksiya 0.2 T, burchak 0°. Oqimni toping (Wb).' }, difficulty: 1, xpReward: 35, coinReward: 5, formulas: ['Flux'], answer: 0.02 }
      ],
      quiz: [
        { id: 'mag-q1', difficulty: 2, question: { ru: 'Сила Лоренца действует на...', uz: 'Lorents kuchi nimaga ta\'sir qiladi?' }, options: [{ ru: 'Движущийся заряд', uz: 'Harakatlanuvchi zaryadga' }, { ru: 'Покоящийся заряд', uz: 'Tinch turgan zaryadga' }, { ru: 'Массу', uz: 'Massaga' }, { ru: 'Проводник без тока', uz: 'Toksiz o\'tkazgichga' }], correctIndex: 0 },
        { id: 'mag-q2', difficulty: 2, question: { ru: 'Единица магнитной индукции:', uz: 'Magnit induksiya birligi:' }, options: [{ ru: 'Тесла (Тл)', uz: 'Tesla (T)' }, { ru: 'Вебер (Вб)', uz: 'Veber (Wb)' }, { ru: 'Генри (Гн)', uz: 'Genri (H)' }, { ru: 'Фарад (Ф)', uz: 'Farad (F)' }], correctIndex: 0 }
      ],
      simulationType: 'magnetic'
    }
  ]
};
