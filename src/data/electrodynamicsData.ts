import type { PhysicsModule } from '../types/physics';

export const electrodynamicsModule: PhysicsModule = {
  id: 'electrodynamics',
  title: { ru: 'Электродинамика', uz: 'Elektrodinamika' },
  icon: '⚡',
  color: '#f59e0b',
  topics: [
    {
      id: 'circuits',
      moduleId: 'electrodynamics',
      title: { ru: 'Электрические цепи', uz: 'Elektr zanjirlari' },
      summary: {
        ru: 'Закон Ома, сопротивление, мощность.',
        uz: 'Om qonuni, qarshilik, quvvat.'
      },
      formulas: [
        { id: 'Ohm', latex: 'I = \\frac{U}{R}', description: { ru: 'Закон Ома', uz: 'Om qonuni' } },
        { id: 'P', latex: 'P = UI', description: { ru: 'Мощность', uz: 'Quvvat' } }
      ],
      tasks: [
        {
          id: 'ohm1',
          title: { ru: 'Сила тока', uz: 'Tok kuchi' },
          description: { ru: 'Напряжение 12 В, сопротивление 4 Ом. Найдите силу тока.', uz: 'Kuchlanish 12 V, qarshilik 4 Ω. Tok kuchini toping.' },
          difficulty: 1,
          xpReward: 30,
          coinReward: 5,
          formulas: ['Ohm']
        }
      ],
      quiz: [
        {
          id: 'ohm-q1',
          question: { ru: 'Закон Ома для участка цепи:', uz: 'Zanjir qismi uchun Om qonuni:' },
          options: [
            { ru: 'I = U/R', uz: 'I = U/R' },
            { ru: 'I = UR', uz: 'I = UR' },
            { ru: 'U = I/R', uz: 'U = I/R' },
            { ru: 'R = UI', uz: 'R = UI' }
          ],
          correctIndex: 0
        }
      ]
    }
  ]
};
