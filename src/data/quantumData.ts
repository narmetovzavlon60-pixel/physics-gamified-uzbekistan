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
      details: { ru: 'Атом Бора состоит из ядра и электронов на дискретных орбитах.', uz: 'Bor atomi yadro va diskret orbitalarda joylashgan elektronlardan iborat.' },
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
        { id: 'nuc1', title: { ru: 'Радиоактивный распад', uz: 'Radioaktiv parchalanish' }, description: { ru: 'Период полураспада 2 часа. Какая доля вещества останется через 6 часов?', uz: 'Yarim parchalanish davri 2 soat. 6 soatdan keyin moddaning qanday qismi qoladi?' }, difficulty: 3, xpReward: 60, coinReward: 10, formulas: ['decay'], answer: 0.125 }
      ],
      quiz: [
        { id: 'nuc-q1', difficulty: 2, question: { ru: 'Что такое период полураспада?', uz: 'Yarim parchalanish davri nima?' }, options: [{ ru: 'Время, за которое распадается половина ядер', uz: 'Yadrolarning yarmi parchalanadigan vaqt' }, { ru: 'Время полного распада', uz: 'To\'liq parchalanish vaqti' }, { ru: 'Время жизни одного ядра', uz: 'Bitta yadroning yashash vaqti' }, { ru: 'Время образования ядра', uz: 'Yadro hosil bo\'lish vaqti' }], correctIndex: 0 },
        { id: 'nuc-q2', difficulty: 2, question: { ru: 'Какие частицы входят в состав ядра?', uz: 'Yadro tarkibiga qanday zarralar kiradi?' }, options: [{ ru: 'Протоны и нейтроны', uz: 'Protonlar va neytronlar' }, { ru: 'Электроны и позитроны', uz: 'Elektronlar va pozitronlar' }, { ru: 'Фотоны', uz: 'Fotonlar' }, { ru: 'Мезоны', uz: 'Mezonlar' }], correctIndex: 0 }
      ]
    }
  ]
};
