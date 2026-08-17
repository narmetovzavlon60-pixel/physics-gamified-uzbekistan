import type { PhysicsModule } from '../types/physics';

export const mechanicsModule: PhysicsModule = {
  id: 'mechanics',
  title: { ru: 'Механика', uz: 'Mexanika' },
  icon: '⚙️',
  color: '#3b82f6',
  topics: [
    {
      id: 'kinematics',
      moduleId: 'mechanics',
      title: { ru: 'Кинематика', uz: 'Kinematika' },
      summary: {
        ru: 'Движение тел без учёта причин. Скорость, ускорение, путь.',
        uz: 'Jismlar harakati sabablarsiz. Tezlik, tezlanish, yo\'l.'
      },
      formulas: [
        { id: 'v', latex: 'v = \\frac{s}{t}', description: { ru: 'Средняя скорость', uz: 'O\'rtacha tezlik' } },
        { id: 'a', latex: 'a = \\frac{v - v_0}{t}', description: { ru: 'Ускорение', uz: 'Tezlanish' } },
        { id: 's', latex: 's = v_0 t + \\frac{at^2}{2}', description: { ru: 'Путь при равноускоренном движении', uz: 'Tekis tezlanuvchan harakatda yo\'l' } }
      ],
      tasks: [
        {
          id: 'kin1',
          title: { ru: 'Скорость автомобиля', uz: 'Avtomobil tezligi' },
          description: { ru: 'Автомобиль проехал 120 км за 1.5 часа. Найдите среднюю скорость.', uz: 'Avtomobil 120 km ni 1.5 soatda bosib o\'tdi. O\'rtacha tezlikni toping.' },
          difficulty: 1,
          xpReward: 30,
          coinReward: 5,
          formulas: ['v']
        },
        {
          id: 'kin2',
          title: { ru: 'Торможение', uz: 'Tormozlanish' },
          description: { ru: 'Тело двигалось со скоростью 20 м/с и остановилось за 4 с. Найдите ускорение.', uz: 'Jism 20 m/s tezlik bilan harakatlanib, 4 s da to\'xtadi. Tezlanishni toping.' },
          difficulty: 2,
          xpReward: 50,
          coinReward: 8,
          formulas: ['a']
        }
      ],
      quiz: [
        {
          id: 'kin-q1',
          question: { ru: 'Единица скорости в СИ?', uz: 'SI da tezlik birligi?' },
          options: [
            { ru: 'м/с', uz: 'm/s' },
            { ru: 'км/ч', uz: 'km/soat' },
            { ru: 'м/с²', uz: 'm/s²' },
            { ru: 'кг', uz: 'kg' }
          ],
          correctIndex: 0,
          explanation: { ru: 'Скорость измеряется в метрах в секунду.', uz: 'Tezlik metr/sekundda o\'lchanadi.' }
        },
        {
          id: 'kin-q2',
          question: { ru: 'Формула ускорения:', uz: 'Tezlanish formulasi:' },
          options: [
            { ru: 'a = v/t', uz: 'a = v/t' },
            { ru: 'a = (v-v₀)/t', uz: 'a = (v-v₀)/t' },
            { ru: 'a = s/t', uz: 'a = s/t' },
            { ru: 'a = mF', uz: 'a = mF' }
          ],
          correctIndex: 1
        },
        {
          id: 'kin-q3',
          question: { ru: 'Какой путь пройдёт тело за 2 с при скорости 5 м/с?', uz: '5 m/s tezlik bilan 2 s da qancha yo\'l bosiladi?' },
          options: [
            { ru: '10 м', uz: '10 m' },
            { ru: '2.5 м', uz: '2.5 m' },
            { ru: '7 м', uz: '7 m' },
            { ru: '5 м', uz: '5 m' }
          ],
          correctIndex: 0
        }
      ]
    },
    {
      id: 'dynamics',
      moduleId: 'mechanics',
      title: { ru: 'Динамика', uz: 'Dinamika' },
      summary: {
        ru: 'Законы Ньютона, сила, масса, импульс.',
        uz: 'Nyuton qonunlari, kuch, massa, impuls.'
      },
      formulas: [
        { id: 'F', latex: 'F = ma', description: { ru: 'Второй закон Ньютона', uz: 'Nyutonning ikkinchi qonuni' } },
        { id: 'p', latex: 'p = mv', description: { ru: 'Импульс тела', uz: 'Jism impulsi' } }
      ],
      tasks: [
        {
          id: 'dyn1',
          title: { ru: 'Сила', uz: 'Kuch' },
          description: { ru: 'Тело массой 5 кг движется с ускорением 2 м/с². Найдите силу.', uz: 'Massasi 5 kg bo\'lgan jism 2 m/s² tezlanish bilan harakatlanmoqda. Kuchni toping.' },
          difficulty: 1,
          xpReward: 30,
          coinReward: 5,
          formulas: ['F']
        }
      ],
      quiz: [
        {
          id: 'dyn-q1',
          question: { ru: 'Формула второго закона Ньютона:', uz: 'Nyutonning ikkinchi qonuni formulasi:' },
          options: [
            { ru: 'F = ma', uz: 'F = ma' },
            { ru: 'F = mv', uz: 'F = mv' },
            { ru: 'F = kx', uz: 'F = kx' },
            { ru: 'F = μN', uz: 'F = μN' }
          ],
          correctIndex: 0
        }
      ]
    }
  ]
};
