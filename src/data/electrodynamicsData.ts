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
        { id: 'P', latex: 'P = UI', description: { ru: 'Мощность', uz: 'Quvvat' } },
        { id: 'Rseries', latex: 'R = R_1 + R_2', description: { ru: 'Последовательное соединение', uz: 'Ketma-ket ulanish' } },
        { id: 'Rparallel', latex: '\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}', description: { ru: 'Параллельное соединение', uz: 'Parallel ulanish' } }
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
        },
        {
          id: 'ohm2',
          title: { ru: 'Мощность', uz: 'Quvvat' },
          description: { ru: 'Электрический прибор работает при напряжении 220 В и токе 2 А. Найдите мощность.', uz: 'Elektr asbob 220 V kuchlanish va 2 A tokda ishlaydi. Quvvatni toping.' },
          difficulty: 2,
          xpReward: 45,
          coinReward: 7,
          formulas: ['P']
        },
        {
          id: 'ohm3',
          title: { ru: 'Последовательное соединение', uz: 'Ketma-ket ulanish' },
          description: { ru: 'Два резистора 5 Ом и 10 Ом соединены последовательно. Найдите общее сопротивление.', uz: '5 Ω va 10 Ω rezistorlar ketma-ket ulangan. Umumiy qarshilikni toping.' },
          difficulty: 2,
          xpReward: 50,
          coinReward: 8,
          formulas: ['Rseries']
        },
        {
          id: 'ohm4',
          title: { ru: 'Параллельное соединение', uz: 'Parallel ulanish' },
          description: { ru: 'Два резистора 6 Ом и 3 Ом соединены параллельно. Найдите общее сопротивление.', uz: '6 Ω va 3 Ω rezistorlar parallel ulangan. Umumiy qarshilikni toping.' },
          difficulty: 3,
          xpReward: 60,
          coinReward: 9,
          formulas: ['Rparallel']
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
        },
        {
          id: 'ohm-q2',
          question: { ru: 'Единица сопротивления:', uz: 'Qarshilik birligi:' },
          options: [
            { ru: 'Ом (Ω)', uz: 'Om (Ω)' },
            { ru: 'Ампер (A)', uz: 'Amper (A)' },
            { ru: 'Вольт (V)', uz: 'Volt (V)' },
            { ru: 'Ватт (W)', uz: 'Vatt (W)' }
          ],
          correctIndex: 0
        },
        {
          id: 'ohm-q3',
          question: { ru: 'Формула мощности:', uz: 'Quvvat formulasi:' },
          options: [
            { ru: 'P = UI', uz: 'P = UI' },
            { ru: 'P = IR', uz: 'P = IR' },
            { ru: 'P = UR', uz: 'P = UR' },
            { ru: 'P = I/R', uz: 'P = I/R' }
          ],
          correctIndex: 0
        },
        {
          id: 'ohm-q4',
          question: { ru: 'При последовательном соединении общее сопротивление:', uz: 'Ketma-ket ulanishda umumiy qarshilik:' },
          options: [
            { ru: 'Увеличивается', uz: 'Ortadi' },
            { ru: 'Уменьшается', uz: 'Kamayadi' },
            { ru: 'Не меняется', uz: 'O\'zgarmaydi' },
            { ru: 'Становится нулевым', uz: 'Nolga teng bo\'ladi' }
          ],
          correctIndex: 0
        }
      ]
    }
  ]
};
