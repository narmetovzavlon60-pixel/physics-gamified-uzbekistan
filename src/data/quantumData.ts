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
      details: { ru: 'Атом Бора состоит из ядра и электронов, находящихся на дискретных орбитах. Переходы между орбитами сопровождаются излучением или поглощением фотонов.', uz: 'Bor atomi yadro va diskret orbitalarda joylashgan elektronlardan iborat. Orbitalar orasidagi o\'tishlar fotonlar chiqarish yoki yutilishi bilan kechadi.' },
      formulas: [
        { id: 'E', latex: 'E_n = -\\frac{13.6}{n^2} \\text{ эВ}', description: { ru: 'Энергия уровня водорода', uz: 'Vodorod sathi energiyasi' } },
        { id: 'hf', latex: '\\Delta E = h\\nu', description: { ru: 'Энергия фотона', uz: 'Foton energiyasi' } },
        { id: 'lambda', latex: '\\lambda = \\frac{h}{p}', description: { ru: 'Длина волны де Бройля', uz: 'De Broyl to\'lqin uzunligi' } }
      ],
      tasks: [
        { id: 'bohr1', title: { ru: 'Энергия уровня', uz: 'Sath energiyasi' }, description: { ru: 'Найдите энергию второго уровня атома водорода (в эВ).', uz: 'Vodorod atomining ikkinchi sath energiyasini toping (eV).' }, difficulty: 2, xpReward: 40, coinReward: 7, formulas: ['E'], answer: -3.4 },
        { id: 'bohr2', title: { ru: 'Энергия фотона', uz: 'Foton energiyasi' }, description: { ru: 'Частота света 5·10¹⁴ Гц. Найдите энергию фотона (×10⁻¹⁹ Дж).', uz: 'Yorug\'lik chastotasi 5·10¹⁴ Hz. Foton energiyasini toping (×10⁻¹⁹ J).' }, difficulty: 2, xpReward: 50, coinReward: 8, formulas: ['hf'], answer: 3.315 },
        { id: 'bohr3', title: { ru: 'Длина волны де Бройля', uz: 'De Broyl to\'lqin uzunligi' }, description: { ru: 'Электрон с импульсом 6.63·10⁻²⁴ кг·м/с. Найдите длину волны (×10⁻¹⁰ м).', uz: 'Elektron impulsi 6.63·10⁻²⁴ kg·m/s. To\'lqin uzunligini toping (×10⁻¹⁰ m).' }, difficulty: 3, xpReward: 60, coinReward: 10, formulas: ['lambda'], answer: 1 }
      ],
      quiz: [
        { id: 'bohr-q1', difficulty: 1, question: { ru: 'Энергия основного состояния водорода:', uz: 'Vodorod asosiy holat energiyasi:' }, options: [{ ru: '-13.6 эВ', uz: '-13.6 eV' }, { ru: '13.6 эВ', uz: '13.6 eV' }, { ru: '0 эВ', uz: '0 eV' }, { ru: '-3.4 эВ', uz: '-3.4 eV' }], correctIndex: 0 },
        { id: 'bohr-q2', difficulty: 1, question: { ru: 'Постоянная Планка обозначается буквой:', uz: 'Plank doimiysi qaysi harf bilan belgilanadi?' }, options: [{ ru: 'h', uz: 'h' }, { ru: 'c', uz: 'c' }, { ru: 'k', uz: 'k' }, { ru: 'R', uz: 'R' }], correctIndex: 0 },
        { id: 'bohr-q3', difficulty: 2, question: { ru: 'Что такое фотон?', uz: 'Foton nima?' }, options: [{ ru: 'Квант света', uz: 'Yorug\'lik kvanti' }, { ru: 'Электрон', uz: 'Elektron' }, { ru: 'Протон', uz: 'Proton' }, { ru: 'Нейтрон', uz: 'Neytron' }], correctIndex: 0 },
        { id: 'bohr-q4', difficulty: 2, question: { ru: 'Модель атома Бора основана на...', uz: 'Bor atom modeli nimaga asoslangan?' }, options: [{ ru: 'Квантовании энергии', uz: 'Energiyaning kvantlanishiga' }, { ru: 'Непрерывном излучении', uz: 'Uzluksiz nurlanishga' }, { ru: 'Классической механике', uz: 'Klassik mexanikaga' }, { ru: 'Теории относительности', uz: 'Nisbiylik nazariyasiga' }], correctIndex: 0 },
        { id: 'bohr-q5', difficulty: 3, question: { ru: 'Частота фотона с энергией 2 эВ (1 эВ = 1.6·10⁻¹⁹ Дж). Найдите частоту (×10¹⁴ Гц).', uz: 'Energiyasi 2 eV bo\'lgan foton chastotasi (×10¹⁴ Hz).' }, options: [{ ru: '4.8', uz: '4.8' }, { ru: '3.2', uz: '3.2' }, { ru: '2.4', uz: '2.4' }, { ru: '1.6', uz: '1.6' }], correctIndex: 0 }
      ],
      hasSimulation: true
    }
  ]
};
