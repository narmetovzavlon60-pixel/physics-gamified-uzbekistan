import type { PhysicsModule } from '../types/physics';

export const quantumModule: PhysicsModule = {
  id: 'quantum',
  title: { ru: 'Квантовая физика', uz: 'Kvant fizikasi' },
  icon: '⚛️',
  color: '#8b5cf6',
  topics: [
    {
      id: 'bohr',
      moduleId: 'quantum',
      title: { ru: 'Модель Бора', uz: 'Bor modeli' },
      summary: {
        ru: 'Энергетические уровни, квантовые переходы.',
        uz: 'Energiya sathlari, kvant o\'tishlar.'
      },
      formulas: [
        { id: 'E', latex: 'E_n = -\\frac{13.6}{n^2} \\text{ эВ}', description: { ru: 'Энергия уровня водорода', uz: 'Vodorod sathi energiyasi' } },
        { id: 'hf', latex: '\\Delta E = h\\nu', description: { ru: 'Энергия фотона', uz: 'Foton energiyasi' } },
        { id: 'lambda', latex: '\\lambda = \\frac{h}{p}', description: { ru: 'Длина волны де Бройля', uz: 'De Broyl to\'lqin uzunligi' } }
      ],
      tasks: [
        {
          id: 'bohr1',
          title: { ru: 'Энергия уровня', uz: 'Sath energiyasi' },
          description: { ru: 'Найдите энергию второго уровня атома водорода.', uz: 'Vodorod atomining ikkinchi sath energiyasini toping.' },
          difficulty: 2,
          xpReward: 40,
          coinReward: 7,
          formulas: ['E']
        },
        {
          id: 'bohr2',
          title: { ru: 'Энергия фотона', uz: 'Foton energiyasi' },
          description: { ru: 'Частота света 5·10¹⁴ Гц. Найдите энергию фотона. (h = 6.63·10⁻³⁴ Дж·с)', uz: 'Yorug\'lik chastotasi 5·10¹⁴ Hz. Foton energiyasini toping. (h = 6.63·10⁻³⁴ J·s)' },
          difficulty: 2,
          xpReward: 50,
          coinReward: 8,
          formulas: ['hf']
        },
        {
          id: 'bohr3',
          title: { ru: 'Длина волны де Бройля', uz: 'De Broyl to\'lqin uzunligi' },
          description: { ru: 'Электрон движется с импульсом 6.63·10⁻²⁴ кг·м/с. Найдите длину волны.', uz: 'Elektron 6.63·10⁻²⁴ kg·m/s impuls bilan harakatlanadi. To\'lqin uzunligini toping.' },
          difficulty: 3,
          xpReward: 60,
          coinReward: 10,
          formulas: ['lambda']
        }
      ],
      quiz: [
        {
          id: 'bohr-q1',
          question: { ru: 'Энергия основного состояния водорода:', uz: 'Vodorod asosiy holat energiyasi:' },
          options: [
            { ru: '-13.6 эВ', uz: '-13.6 eV' },
            { ru: '13.6 эВ', uz: '13.6 eV' },
            { ru: '0 эВ', uz: '0 eV' },
            { ru: '-3.4 эВ', uz: '-3.4 eV' }
          ],
          correctIndex: 0
        },
        {
          id: 'bohr-q2',
          question: { ru: 'Постоянная Планка обозначается буквой:', uz: 'Plank doimiysi qaysi harf bilan belgilanadi?' },
          options: [
            { ru: 'h', uz: 'h' },
            { ru: 'c', uz: 'c' },
            { ru: 'k', uz: 'k' },
            { ru: 'R', uz: 'R' }
          ],
          correctIndex: 0
        },
        {
          id: 'bohr-q3',
          question: { ru: 'Что такое фотон?', uz: 'Foton nima?' },
          options: [
            { ru: 'Квант электромагнитного излучения', uz: 'Elektromagnit nurlanish kvanti' },
            { ru: 'Электрон', uz: 'Elektron' },
            { ru: 'Протон', uz: 'Proton' },
            { ru: 'Нейтрон', uz: 'Neytron' }
          ],
          correctIndex: 0
        },
        {
          id: 'bohr-q4',
          question: { ru: 'Модель атома Бора основана на...', uz: 'Bor atom modeli nimaga asoslangan?' },
          options: [
            { ru: 'Квантовании энергии электронов', uz: 'Elektronlar energiyasining kvantlanishiga' },
            { ru: 'Непрерывном излучении', uz: 'Uzluksiz nurlanishga' },
            { ru: 'Классической механике', uz: 'Klassik mexanikaga' },
            { ru: 'Теории относительности', uz: 'Nisbiylik nazariyasiga' }
          ],
          correctIndex: 0
        }
      ]
    }
  ]
};
