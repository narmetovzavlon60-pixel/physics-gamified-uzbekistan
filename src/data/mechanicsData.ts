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
        },
        {
          id: 'kin3',
          title: { ru: 'Путь при разгоне', uz: 'Tezlanishda yo\'l' },
          description: { ru: 'Тело начинает движение из состояния покоя с ускорением 2 м/с². Какой путь оно пройдёт за 5 с?', uz: 'Jism tinch holatdan 2 m/s² tezlanish bilan harakatni boshlaydi. 5 s da qancha yo\'l bosadi?' },
          difficulty: 2,
          xpReward: 55,
          coinReward: 8,
          formulas: ['s']
        },
        {
          id: 'kin4',
          title: { ru: 'Свободное падение', uz: 'Erkin tushish' },
          description: { ru: 'Камень падает с высоты 45 м. Сколько времени он будет падать? (g = 10 м/с²)', uz: 'Tosh 45 m balandlikdan tushadi. U qancha vaqt tushadi? (g = 10 m/s²)' },
          difficulty: 3,
          xpReward: 70,
          coinReward: 10,
          formulas: ['s']
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
        },
        {
          id: 'kin-q4',
          question: { ru: 'Что такое ускорение?', uz: 'Tezlanish nima?' },
          options: [
            { ru: 'Изменение скорости за единицу времени', uz: 'Tezlikning vaqt birligida o\'zgarishi' },
            { ru: 'Изменение пути за единицу времени', uz: 'Yo\'lning vaqt birligida o\'zgarishi' },
            { ru: 'Сила, действующая на тело', uz: 'Jismga ta\'sir qiluvchi kuch' },
            { ru: 'Масса тела', uz: 'Jism massasi' }
          ],
          correctIndex: 0
        },
        {
          id: 'kin-q5',
          question: { ru: 'Тело движется равномерно. Это значит, что...', uz: 'Jism tekis harakatlanmoqda. Bu shuni anglatadiki...' },
          options: [
            { ru: 'Скорость постоянна', uz: 'Tezlik doimiy' },
            { ru: 'Скорость увеличивается', uz: 'Tezlik ortmoqda' },
            { ru: 'Скорость уменьшается', uz: 'Tezlik kamaymoqda' },
            { ru: 'Ускорение положительное', uz: 'Tezlanish musbat' }
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
        { id: 'p', latex: 'p = mv', description: { ru: 'Импульс тела', uz: 'Jism impulsi' } },
        { id: 'Fgrav', latex: 'F = mg', description: { ru: 'Сила тяжести', uz: 'Og\'irlik kuchi' } }
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
        },
        {
          id: 'dyn2',
          title: { ru: 'Импульс', uz: 'Impuls' },
          description: { ru: 'Тело массой 3 кг движется со скоростью 4 м/с. Найдите его импульс.', uz: 'Massasi 3 kg bo\'lgan jism 4 m/s tezlik bilan harakatlanmoqda. Uning impulsini toping.' },
          difficulty: 1,
          xpReward: 35,
          coinReward: 5,
          formulas: ['p']
        },
        {
          id: 'dyn3',
          title: { ru: 'Сила тяжести', uz: 'Og\'irlik kuchi' },
          description: { ru: 'Масса тела 10 кг. Найдите силу тяжести, действующую на него. (g = 10 м/с²)', uz: 'Jism massasi 10 kg. Unga ta\'sir qiluvchi og\'irlik kuchini toping. (g = 10 m/s²)' },
          difficulty: 2,
          xpReward: 40,
          coinReward: 6,
          formulas: ['Fgrav']
        },
        {
          id: 'dyn4',
          title: { ru: 'Равнодействующая сила', uz: 'Teng ta\'sir etuvchi kuch' },
          description: { ru: 'На тело действуют две силы 3 Н и 4 Н под прямым углом. Найдите равнодействующую.', uz: 'Jismga 3 N va 4 N kuchlar to\'g\'ri burchak ostida ta\'sir qiladi. Teng ta\'sir etuvchi kuchni toping.' },
          difficulty: 3,
          xpReward: 60,
          coinReward: 9,
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
        },
        {
          id: 'dyn-q2',
          question: { ru: 'Единица силы в СИ:', uz: 'SI da kuch birligi:' },
          options: [
            { ru: 'Ньютон (Н)', uz: 'Nyuton (N)' },
            { ru: 'Килограмм (кг)', uz: 'Kilogramm (kg)' },
            { ru: 'Джоуль (Дж)', uz: 'Joul (J)' },
            { ru: 'Ватт (Вт)', uz: 'Vatt (W)' }
          ],
          correctIndex: 0
        },
        {
          id: 'dyn-q3',
          question: { ru: 'Импульс тела это:', uz: 'Jism impulsi nima?' },
          options: [
            { ru: 'Произведение массы на скорость', uz: 'Massa va tezlik ko\'paytmasi' },
            { ru: 'Произведение силы на время', uz: 'Kuch va vaqt ko\'paytmasi' },
            { ru: 'Произведение массы на ускорение', uz: 'Massa va tezlanish ko\'paytmasi' },
            { ru: 'Сила, делённая на массу', uz: 'Kuchning massaga nisbati' }
          ],
          correctIndex: 0
        },
        {
          id: 'dyn-q4',
          question: { ru: 'Что такое инерция?', uz: 'Inersiya nima?' },
          options: [
            { ru: 'Свойство тела сохранять скорость', uz: 'Jismning tezlikni saqlash xususiyati' },
            { ru: 'Сила трения', uz: 'Ishqalanish kuchi' },
            { ru: 'Изменение скорости', uz: 'Tezlikning o\'zgarishi' },
            { ru: 'Масса тела', uz: 'Jism massasi' }
          ],
          correctIndex: 0
        },
        {
          id: 'dyn-q5',
          question: { ru: 'Закон инерции открыл:', uz: 'Inersiya qonunini kashf etgan:' },
          options: [
            { ru: 'Галилей', uz: 'Galiley' },
            { ru: 'Ньютон', uz: 'Nyuton' },
            { ru: 'Эйнштейн', uz: 'Eynshteyn' },
            { ru: 'Аристотель', uz: 'Aristotel' }
          ],
          correctIndex: 0
        }
      ]
    }
  ]
};
