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
        { id: 'hf', latex: '\\Delta E = h\\nu', description: { ru: 'Энергия фотона', uz: 'Foton energiyasi' } }
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
        }
      ]
    }
  ]
};
