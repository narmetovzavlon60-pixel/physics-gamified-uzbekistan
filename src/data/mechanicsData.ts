import type { PhysicsModule } from '../types/physics';

export const mechanicsModule: PhysicsModule = {
  id: 'mechanics',
  title: { ru: 'Механика', uz: 'Mexanika' },
  icon: '⚙️',
  color: '#3b82f6',
  summary: { ru: 'Раздел физики, изучающий движение тел и взаимодействия между ними.', uz: 'Jismlar harakati va ular orasidagi o\'zaro ta\'sirlarni o\'rganuvchi fizika bo\'limi.' },
  topics: [
    {
      id: 'kinematics',
      moduleId: 'mechanics',
      title: { ru: 'Кинематика', uz: 'Kinematika' },
      summary: { ru: 'Изучает движение тел, не рассматривая причины. Основные величины: путь, скорость, ускорение, время.', uz: 'Jismlar harakatini sabablarsiz o\'rganadi. Asosiy kattaliklar: yo\'l, tezlik, tezlanish, vaqt.' },
      details: { ru: 'Кинематика описывает равномерное и равноускоренное движение. Формулы позволяют рассчитать путь, скорость и ускорение.', uz: 'Kinematika tekis va tekis tezlanuvchan harakatni tavsiflaydi. Formulalar yo\'l, tezlik va tezlanishni hisoblash imkonini beradi.' },
      formulas: [
        { id: 'v', latex: 'v = \\frac{s}{t}', description: { ru: 'Средняя скорость', uz: 'O\'rtacha tezlik' } },
        { id: 'a', latex: 'a = \\frac{v - v_0}{t}', description: { ru: 'Ускорение', uz: 'Tezlanish' } },
        { id: 's', latex: 's = v_0 t + \\frac{at^2}{2}', description: { ru: 'Путь при равноускоренном движении', uz: 'Tekis tezlanuvchan harakatda yo\'l' } }
      ],
      tasks: [
        {
          id: 'kin1',
          title: { ru: 'Скорость автомобиля', uz: 'Avtomobil tezligi' },
          description: { ru: 'Автомобиль проехал 120 км за 1.5 часа. Найдите среднюю скорость в км/ч.', uz: 'Avtomobil 120 km ni 1.5 soatda bosib o\'tdi. O\'rtacha tezlikni km/soatda toping.' },
          difficulty: 1,
          xpReward: 30,
          coinReward: 5,
          formulas: ['v'],
          answer: 80
        },
        {
          id: 'kin2',
          title: { ru: 'Торможение', uz: 'Tormozlanish' },
          description: { ru: 'Тело двигалось со скоростью 20 м/с и остановилось за 4 с. Найдите модуль ускорения.', uz: 'Jism 20 m/s tezlik bilan harakatlanib, 4 s da to\'xtadi. Tezlanish modulini toping.' },
          difficulty: 2,
          xpReward: 50,
          coinReward: 8,
          formulas: ['a'],
          answer: 5
        },
        {
          id: 'kin3',
          title: { ru: 'Путь при разгоне', uz: 'Tezlanishda yo\'l' },
          description: { ru: 'Тело начинает движение из состояния покоя с ускорением 2 м/с². Какой путь оно пройдёт за 5 с?', uz: 'Jism tinch holatdan 2 m/s² tezlanish bilan harakatni boshlaydi. 5 s da qancha yo\'l bosadi?' },
          difficulty: 2,
          xpReward: 55,
          coinReward: 8,
          formulas: ['s'],
          answer: 25
        },
        {
          id: 'kin4',
          title: { ru: 'Свободное падение', uz: 'Erkin tushish' },
          description: { ru: 'Камень падает с высоты 45 м. Сколько секунд он будет падать? (g = 10 м/с²)', uz: 'Tosh 45 m balandlikdan tushadi. U necha sekund tushadi? (g = 10 m/s²)' },
          difficulty: 3,
          xpReward: 70,
          coinReward: 10,
          formulas: ['s'],
          answer: 3
        }
      ],
      quiz: [
        { id: 'kin-q1', difficulty: 1, question: { ru: 'Единица скорости в СИ?', uz: 'SI da tezlik birligi?' }, options: [{ ru: 'м/с', uz: 'm/s' }, { ru: 'км/ч', uz: 'km/soat' }, { ru: 'м/с²', uz: 'm/s²' }, { ru: 'кг', uz: 'kg' }], correctIndex: 0 },
        { id: 'kin-q2', difficulty: 1, question: { ru: 'Формула ускорения:', uz: 'Tezlanish formulasi:' }, options: [{ ru: 'a = v/t', uz: 'a = v/t' }, { ru: 'a = (v-v₀)/t', uz: 'a = (v-v₀)/t' }, { ru: 'a = s/t', uz: 'a = s/t' }, { ru: 'a = mF', uz: 'a = mF' }], correctIndex: 1 },
        { id: 'kin-q3', difficulty: 1, question: { ru: 'Какой путь пройдёт тело за 2 с при скорости 5 м/с?', uz: '5 m/s tezlik bilan 2 s da qancha yo\'l bosiladi?' }, options: [{ ru: '10 м', uz: '10 m' }, { ru: '2.5 м', uz: '2.5 m' }, { ru: '7 м', uz: '7 m' }, { ru: '5 м', uz: '5 m' }], correctIndex: 0 },
        { id: 'kin-q4', difficulty: 2, question: { ru: 'Тело брошено вертикально вверх со скоростью 20 м/с. Через какое время оно достигнет максимальной высоты? (g=10 м/с²)', uz: 'Jism 20 m/s tezlik bilan yuqoriga otildi. U maksimal balandlikka qancha vaqtda yetadi? (g=10 m/s²)' }, options: [{ ru: '2 с', uz: '2 s' }, { ru: '1 с', uz: '1 s' }, { ru: '4 с', uz: '4 s' }, { ru: '0.5 с', uz: '0.5 s' }], correctIndex: 0 },
        { id: 'kin-q5', difficulty: 3, question: { ru: 'Автомобиль разгоняется с ускорением 2 м/с². Какую скорость он наберёт за 6 с, если начальная скорость была 4 м/с?', uz: 'Avtomobil 2 m/s² tezlanish bilan tezlashmoqda. Agar boshlang\'ich tezligi 4 m/s bo\'lsa, 6 s dan keyin tezligi qancha bo\'ladi?' }, options: [{ ru: '16 м/с', uz: '16 m/s' }, { ru: '12 м/с', uz: '12 m/s' }, { ru: '8 м/с', uz: '8 m/s' }, { ru: '20 м/с', uz: '20 m/s' }], correctIndex: 0 }
      ],
      hasSimulation: true
    },
    {
      id: 'dynamics',
      moduleId: 'mechanics',
      title: { ru: 'Динамика', uz: 'Dinamika' },
      summary: { ru: 'Изучает причины движения тел — силы. Включает законы Ньютона, импульс, закон всемирного тяготения.', uz: 'Harakat sabablari — kuchlarni o\'rganadi. Nyuton qonunlari, impuls, butun olam tortishish qonunini o\'z ichiga oladi.' },
      details: { ru: 'Три закона Ньютона описывают взаимодействие тел. Второй закон связывает силу, массу и ускорение.', uz: 'Nyutonning uchta qonuni jismlar o\'zaro ta\'sirini tavsiflaydi. Ikkinchi qonun kuch, massa va tezlanishni bog\'laydi.' },
      formulas: [
        { id: 'F', latex: 'F = ma', description: { ru: 'Второй закон Ньютона', uz: 'Nyutonning ikkinchi qonuni' } },
        { id: 'p', latex: 'p = mv', description: { ru: 'Импульс тела', uz: 'Jism impulsi' } },
        { id: 'Fgrav', latex: 'F = mg', description: { ru: 'Сила тяжести', uz: 'Og\'irlik kuchi' } }
      ],
      tasks: [
        {
          id: 'dyn1',
          title: { ru: 'Сила', uz: 'Kuch' },
          description: { ru: 'Тело массой 5 кг движется с ускорением 2 м/с². Найдите силу в ньютонах.', uz: 'Massasi 5 kg bo\'lgan jism 2 m/s² tezlanish bilan harakatlanmoqda. Kuchni nyutonda toping.' },
          difficulty: 1, xpReward: 30, coinReward: 5, formulas: ['F'], answer: 10
        },
        {
          id: 'dyn2',
          title: { ru: 'Импульс', uz: 'Impuls' },
          description: { ru: 'Тело массой 3 кг движется со скоростью 4 м/с. Найдите импульс (кг·м/с).', uz: 'Massasi 3 kg bo\'lgan jism 4 m/s tezlik bilan harakatlanmoqda. Impulsni (kg·m/s) toping.' },
          difficulty: 1, xpReward: 35, coinReward: 5, formulas: ['p'], answer: 12
        },
        {
          id: 'dyn3',
          title: { ru: 'Сила тяжести', uz: 'Og\'irlik kuchi' },
          description: { ru: 'Масса тела 10 кг. Найдите силу тяжести (g = 10 м/с²).', uz: 'Jism massasi 10 kg. Og\'irlik kuchini toping (g = 10 m/s²).' },
          difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Fgrav'], answer: 100
        },
        {
          id: 'dyn4',
          title: { ru: 'Равнодействующая сила', uz: 'Teng ta\'sir etuvchi kuch' },
          description: { ru: 'На тело действуют силы 3 Н и 4 Н под прямым углом. Найдите модуль равнодействующей.', uz: 'Jismga 3 N va 4 N kuchlar to\'g\'ri burchak ostida ta\'sir qiladi. Teng ta\'sir etuvchi kuch modulini toping.' },
          difficulty: 3, xpReward: 60, coinReward: 9, formulas: ['F'], answer: 5
        }
      ],
      quiz: [
        { id: 'dyn-q1', difficulty: 1, question: { ru: 'Формула второго закона Ньютона:', uz: 'Nyutonning ikkinchi qonuni formulasi:' }, options: [{ ru: 'F = ma', uz: 'F = ma' }, { ru: 'F = mv', uz: 'F = mv' }, { ru: 'F = kx', uz: 'F = kx' }, { ru: 'F = μN', uz: 'F = μN' }], correctIndex: 0 },
        { id: 'dyn-q2', difficulty: 1, question: { ru: 'Единица силы в СИ:', uz: 'SI da kuch birligi:' }, options: [{ ru: 'Ньютон (Н)', uz: 'Nyuton (N)' }, { ru: 'Килограмм (кг)', uz: 'Kilogramm (kg)' }, { ru: 'Джоуль (Дж)', uz: 'Joul (J)' }, { ru: 'Ватт (Вт)', uz: 'Vatt (W)' }], correctIndex: 0 },
        { id: 'dyn-q3', difficulty: 2, question: { ru: 'Тело массой 2 кг движется с ускорением 3 м/с². Какая сила действует?', uz: 'Massasi 2 kg bo\'lgan jism 3 m/s² tezlanish bilan harakatlanmoqda. Qanday kuch ta\'sir qiladi?' }, options: [{ ru: '6 Н', uz: '6 N' }, { ru: '5 Н', uz: '5 N' }, { ru: '1.5 Н', uz: '1.5 N' }, { ru: '0.67 Н', uz: '0.67 N' }], correctIndex: 0 },
        { id: 'dyn-q4', difficulty: 2, question: { ru: 'Импульс тела 20 кг·м/с, масса 4 кг. Чему равна скорость?', uz: 'Jism impulsi 20 kg·m/s, massasi 4 kg. Tezligi qancha?' }, options: [{ ru: '5 м/с', uz: '5 m/s' }, { ru: '80 м/с', uz: '80 m/s' }, { ru: '0.2 м/с', uz: '0.2 m/s' }, { ru: '16 м/с', uz: '16 m/s' }], correctIndex: 0 },
        { id: 'dyn-q5', difficulty: 3, question: { ru: 'Две силы 6 Н и 8 Н направлены перпендикулярно. Равнодействующая равна:', uz: '6 N va 8 N kuchlar perpendikulyar yo\'nalgan. Teng ta\'sir etuvchi kuch:' }, options: [{ ru: '10 Н', uz: '10 N' }, { ru: '14 Н', uz: '14 N' }, { ru: '2 Н', uz: '2 N' }, { ru: '48 Н', uz: '48 N' }], correctIndex: 0 }
      ]
    }
  ]
};
