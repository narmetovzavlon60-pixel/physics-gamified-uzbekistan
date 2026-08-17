import type { PhysicsModule } from '../types/physics';

export const quantumModule: PhysicsModule = {
  id: 'quantum',
  title: { ru: 'Квантовая физика', uz: 'Kvant fizikasi' },
  icon: '⚛️',
  color: '#8b5cf6',
  summary: { ru: 'Изучает поведение частиц на микроуровне, квантовые явления, строение атома.', uz: 'Mikrodarajada zarralar harakati, kvant hodisalari, atom tuzilishini o\'rganadi.' },
  topics: [
    {
      id: 'bohr',
      moduleId: 'quantum',
      title: { ru: 'Модель Бора', uz: 'Bor modeli' },
      summary: { ru: 'Энергетические уровни, квантовые переходы, фотоны.', uz: 'Energiya sathlari, kvant o\'tishlar, fotonlar.' },
      details: { ru: 'Атом Бора состоит из ядра и электронов на дискретных орбитах. Переходы между орбитами сопровождаются излучением или поглощением фотонов.', uz: 'Bor atomi yadro va diskret orbitalarda joylashgan elektronlardan iborat. Orbitalar orasidagi o\'tishlar fotonlar chiqarish yoki yutilishi bilan kechadi.' },
      formulas: [
        { id: 'E', latex: 'E_n = -\\frac{13.6}{n^2} \\text{ эВ}', description: { ru: 'Энергия уровня водорода', uz: 'Vodorod sathi energiyasi' } },
        { id: 'hf', latex: '\\Delta E = h\\nu', description: { ru: 'Энергия фотона', uz: 'Foton energiyasi' } },
        { id: 'lambda', latex: '\\lambda = \\frac{h}{p}', description: { ru: 'Длина волны де Бройля', uz: 'De Broyl to\'lqin uzunligi' } }
      ],
      tasks: [
        { id: 'bohr1', title: { ru: 'Энергия уровня', uz: 'Sath energiyasi' }, description: { ru: 'Найдите энергию второго уровня атома водорода (в эВ).', uz: 'Vodorod atomining ikkinchi sath energiyasini toping (eV).' }, difficulty: 2, xpReward: 35, coinReward: 5, formulas: ['E'], answer: -3.4 },
        { id: 'bohr2', title: { ru: 'Энергия фотона', uz: 'Foton energiyasi' }, description: { ru: 'Частота света 5·10¹⁴ Гц. Найдите энергию фотона (×10⁻¹⁹ Дж).', uz: 'Yorug\'lik chastotasi 5·10¹⁴ Hz. Foton energiyasini toping (×10⁻¹⁹ J).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['hf'], answer: 3.315 },
        { id: 'bohr3', title: { ru: 'Длина волны де Бройля', uz: 'De Broyl to\'lqin uzunligi' }, description: { ru: 'Электрон с импульсом 6.63·10⁻²⁴ кг·м/с. Найдите длину волны (×10⁻¹⁰ м).', uz: 'Elektron impulsi 6.63·10⁻²⁴ kg·m/s. To\'lqin uzunligini toping (×10⁻¹⁰ m).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['lambda'], answer: 1 },
        { id: 'bohr4', title: { ru: 'Переход между уровнями', uz: 'Sathlar orasidagi o\'tish' }, description: { ru: 'Атом водорода переходит с n=3 на n=2. Найдите энергию излучения (эВ).', uz: 'Vodorod atomi n=3 dan n=2 ga o\'tadi. Nurlanish energiyasini toping (eV).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['E'], answer: 1.89 },
        { id: 'bohr5', title: { ru: 'Длина волны фотона', uz: 'Foton to\'lqin uzunligi' }, description: { ru: 'Энергия фотона 2 эВ. Найдите длину волны (нм, hc=1240 эВ·нм).', uz: 'Foton energiyasi 2 eV. To\'lqin uzunligini toping (nm, hc=1240 eV·nm).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['hf'], answer: 620 },
        { id: 'bohr6', title: { ru: 'Энергия основного состояния', uz: 'Asosiy holat energiyasi' }, description: { ru: 'Найдите энергию основного состояния водорода (эВ).', uz: 'Vodorodning asosiy holat energiyasini toping (eV).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['E'], answer: -13.6 },
        { id: 'bohr7', title: { ru: 'Частота фотона', uz: 'Foton chastotasi' }, description: { ru: 'Энергия фотона 3.315·10⁻¹⁹ Дж. Найдите частоту (×10¹⁴ Гц, h=6.63·10⁻³⁴).', uz: 'Foton energiyasi 3.315·10⁻¹⁹ J. Chastotani toping (×10¹⁴ Hz, h=6.63·10⁻³⁴).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['hf'], answer: 5 },
        { id: 'bohr8', title: { ru: 'Номер уровня', uz: 'Sath raqami' }, description: { ru: 'Энергия уровня водорода равна -1.51 эВ. Найдите номер уровня.', uz: 'Vodorod sathining energiyasi -1.51 eV. Sath raqamini toping.' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['E'], answer: 3 },
        { id: 'bohr9', title: { ru: 'Импульс фотона', uz: 'Foton impulsi' }, description: { ru: 'Длина волны фотона 663 нм. Найдите импульс (×10⁻²⁷ кг·м/с).', uz: 'Foton to\'lqin uzunligi 663 nm. Impulsni toping (×10⁻²⁷ kg·m/s).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['lambda'], answer: 1 },
        { id: 'bohr10', title: { ru: 'Энергия ионизации', uz: 'Ionlashish energiyasi' }, description: { ru: 'Какую энергию нужно сообщить атому водорода в основном состоянии, чтобы ионизировать его? (эВ)', uz: 'Vodorod atomini asosiy holatda ionlashtirish uchun qancha energiya kerak? (eV)' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['E'], answer: 13.6 }
      ],
      quiz: [
        { id: 'bohr-q1', difficulty: 1, question: { ru: 'Энергия основного состояния водорода:', uz: 'Vodorod asosiy holat energiyasi:' }, options: [{ ru: '-13.6 эВ', uz: '-13.6 eV' }, { ru: '13.6 эВ', uz: '13.6 eV' }, { ru: '0 эВ', uz: '0 eV' }, { ru: '-3.4 эВ', uz: '-3.4 eV' }], correctIndex: 0 },
        { id: 'bohr-q2', difficulty: 1, question: { ru: 'Постоянная Планка обозначается буквой:', uz: 'Plank doimiysi qaysi harf bilan belgilanadi?' }, options: [{ ru: 'h', uz: 'h' }, { ru: 'c', uz: 'c' }, { ru: 'k', uz: 'k' }, { ru: 'R', uz: 'R' }], correctIndex: 0 },
        { id: 'bohr-q3', difficulty: 2, question: { ru: 'Что такое фотон?', uz: 'Foton nima?' }, options: [{ ru: 'Квант света', uz: 'Yorug\'lik kvanti' }, { ru: 'Электрон', uz: 'Elektron' }, { ru: 'Протон', uz: 'Proton' }, { ru: 'Нейтрон', uz: 'Neytron' }], correctIndex: 0 },
        { id: 'bohr-q4', difficulty: 2, question: { ru: 'Модель атома Бора основана на...', uz: 'Bor atom modeli nimaga asoslangan?' }, options: [{ ru: 'Квантовании энергии', uz: 'Energiyaning kvantlanishiga' }, { ru: 'Непрерывном излучении', uz: 'Uzluksiz nurlanishga' }, { ru: 'Классической механике', uz: 'Klassik mexanikaga' }, { ru: 'Теории относительности', uz: 'Nisbiylik nazariyasiga' }], correctIndex: 0 },
        { id: 'bohr-q5', difficulty: 3, question: { ru: 'Частота фотона с энергией 2 эВ (1 эВ = 1.6·10⁻¹⁹ Дж). Найдите частоту (×10¹⁴ Гц).', uz: 'Energiyasi 2 eV bo\'lgan foton chastotasi (×10¹⁴ Hz).' }, options: [{ ru: '4.8', uz: '4.8' }, { ru: '3.2', uz: '3.2' }, { ru: '2.4', uz: '2.4' }, { ru: '1.6', uz: '1.6' }], correctIndex: 0 }
      ],
      simulationType: 'bohr'
    },
    {
      id: 'nuclear',
      moduleId: 'quantum',
      title: { ru: 'Ядерная физика', uz: 'Yadro fizikasi' },
      summary: { ru: 'Строение ядра, радиоактивность, ядерные реакции.', uz: 'Yadro tuzilishi, radioaktivlik, yadro reaksiyalari.' },
      details: { ru: 'Ядро состоит из протонов и нейтронов. Радиоактивный распад — спонтанное превращение ядер.', uz: 'Yadro proton va neytronlardan iborat. Radioaktiv parchalanish — yadrolarning o\'z-o\'zidan o\'zgarishi.' },
      formulas: [
        { id: 'decay', latex: 'N = N_0 \\cdot 2^{-t/T}', description: { ru: 'Закон радиоактивного распада', uz: 'Radioaktiv parchalanish qonuni' } }
      ],
      tasks: [
        { id: 'nuc1', title: { ru: 'Доля после распада', uz: 'Parchalanishdan keyingi ulush' }, description: { ru: 'Период полураспада 2 часа. Какая доля вещества останется через 6 часов?', uz: 'Yarim parchalanish davri 2 soat. 6 soatdan keyin moddaning qanday qismi qoladi?' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['decay'], answer: 0.125 },
        { id: 'nuc2', title: { ru: 'Период полураспада', uz: 'Yarim parchalanish davri' }, description: { ru: 'За 8 дней распалось 75% вещества. Найдите период полураспада (дней).', uz: '8 kunda moddaning 75% parchalandi. Yarim parchalanish davrini toping (kun).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['decay'], answer: 4 },
        { id: 'nuc3', title: { ru: 'Число нейтронов', uz: 'Neytronlar soni' }, description: { ru: 'Ядро урана-235. Сколько нейтронов в ядре? (атомный номер 92)', uz: 'Uran-235 yadrosi. Yadroda nechta neytron bor? (atom raqami 92)' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: [], answer: 143 },
        { id: 'nuc4', title: { ru: 'Энергия связи', uz: 'Bog\'lanish energiyasi' }, description: { ru: 'Дефект массы 0.1 а.е.м. Найдите энергию связи (МэВ, 1 а.е.м. = 931.5 МэВ).', uz: 'Massa defekti 0.1 a.e.m. Bog\'lanish energiyasini toping (MeV, 1 a.e.m. = 931.5 MeV).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: [], answer: 93.15 },
        { id: 'nuc5', title: { ru: 'Оставшаяся масса', uz: 'Qolgan massa' }, description: { ru: 'Начальная масса 100 г, период полураспада 1 час. Сколько останется через 3 часа? (г)', uz: 'Boshlang\'ich massa 100 g, yarim parchalanish davri 1 soat. 3 soatdan keyin qancha qoladi? (g)' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['decay'], answer: 12.5 },
        { id: 'nuc6', title: { ru: 'Активность', uz: 'Aktivlik' }, description: { ru: 'Число распадов за 1 секунду 5000. Найдите активность (Бк).', uz: '1 sekundda 5000 parchalanish. Aktivlikni toping (Bk).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: [], answer: 5000 },
        { id: 'nuc7', title: { ru: 'Заряд ядра', uz: 'Yadro zaryadi' }, description: { ru: 'Ядро содержит 88 протонов. Найдите заряд ядра (в элементарных зарядах).', uz: 'Yadroda 88 proton bor. Yadro zaryadini toping (elementar zaryadlarda).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: [], answer: 88 },
        { id: 'nuc8', title: { ru: 'Доза излучения', uz: 'Nurlanish dozasi' }, description: { ru: 'Поглощённая энергия 0.02 Дж, масса 2 кг. Найдите дозу (Гр).', uz: 'Yutilgan energiya 0.02 J, massa 2 kg. Dozani toping (Gr).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: [], answer: 0.01 },
        { id: 'nuc9', title: { ru: 'Эквивалентная доза', uz: 'Ekvivalent doza' }, description: { ru: 'Поглощённая доза 0.1 Гр, коэффициент качества 20. Найдите эквивалентную дозу (Зв).', uz: 'Yutilgan doza 0.1 Gr, sifat koeffitsienti 20. Ekvivalent dozani toping (Zv).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: [], answer: 2 },
        { id: 'nuc10', title: { ru: 'Число распадов за период', uz: 'Davr ichidagi parchalanishlar' }, description: { ru: 'За время, равное двум периодам полураспада, какая часть ядер распадётся?', uz: 'Yarim parchalanish davrining ikki barobar vaqtda yadrolarning qanday qismi parchalanadi?' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['decay'], answer: 0.75 }
      ],
      quiz: [
        { id: 'nuc-q1', difficulty: 2, question: { ru: 'Что такое период полураспада?', uz: 'Yarim parchalanish davri nima?' }, options: [{ ru: 'Время, за которое распадается половина ядер', uz: 'Yadrolarning yarmi parchalanadigan vaqt' }, { ru: 'Время полного распада', uz: 'To\'liq parchalanish vaqti' }, { ru: 'Время жизни одного ядра', uz: 'Bitta yadroning yashash vaqti' }, { ru: 'Время образования ядра', uz: 'Yadro hosil bo\'lish vaqti' }], correctIndex: 0 },
        { id: 'nuc-q2', difficulty: 2, question: { ru: 'Какие частицы входят в состав ядра?', uz: 'Yadro tarkibiga qanday zarralar kiradi?' }, options: [{ ru: 'Протоны и нейтроны', uz: 'Protonlar va neytronlar' }, { ru: 'Электроны и позитроны', uz: 'Elektronlar va pozitronlar' }, { ru: 'Фотоны', uz: 'Fotonlar' }, { ru: 'Мезоны', uz: 'Mezonlar' }], correctIndex: 0 }
      ]
    }
  ]
};
