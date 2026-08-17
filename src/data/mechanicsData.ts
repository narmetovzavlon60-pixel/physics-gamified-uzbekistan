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
      summary: { ru: 'Движение тел без учёта причин.', uz: 'Jismlar harakati sabablarsiz.' },
      details: { ru: 'Основные величины: путь, скорость, ускорение, время.', uz: 'Asosiy kattaliklar: yo\'l, tezlik, tezlanish, vaqt.' },
      formulas: [
        { id: 'v', latex: 'v = \\frac{s}{t}', description: { ru: 'Средняя скорость', uz: 'O\'rtacha tezlik' } },
        { id: 'a', latex: 'a = \\frac{v - v_0}{t}', description: { ru: 'Ускорение', uz: 'Tezlanish' } },
        { id: 's', latex: 's = v_0 t + \\frac{at^2}{2}', description: { ru: 'Путь при равноускоренном движении', uz: 'Tekis tezlanuvchan harakatda yo\'l' } }
      ],
      tasks: [
        { id: 'kin1', title: { ru: 'Средняя скорость', uz: 'O\'rtacha tezlik' }, description: { ru: 'Автомобиль проехал 120 км за 1.5 ч. Найдите среднюю скорость (км/ч).', uz: 'Avtomobil 120 km ni 1.5 soatda bosib o\'tdi. O\'rtacha tezlikni toping (km/soat).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['v'], answer: 80 },
        { id: 'kin2', title: { ru: 'Ускорение', uz: 'Tezlanish' }, description: { ru: 'Тело изменило скорость с 10 м/с до 30 м/с за 5 с. Найдите ускорение (м/с²).', uz: 'Jism tezligini 10 m/s dan 30 m/s ga 5 s da o\'zgartirdi. Tezlanishni toping (m/s²).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['a'], answer: 4 },
        { id: 'kin3', title: { ru: 'Путь при разгоне', uz: 'Tezlanishda yo\'l' }, description: { ru: 'Тело из состояния покоя разгоняется с ускорением 3 м/с². Какой путь пройдёт за 4 с?', uz: 'Jism tinch holatdan 3 m/s² tezlanish bilan tezlashadi. 4 s da qancha yo\'l bosadi?' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['s'], answer: 24 },
        { id: 'kin4', title: { ru: 'Время свободного падения', uz: 'Erkin tushish vaqti' }, description: { ru: 'Камень падает с высоты 80 м. Сколько секунд длится падение? (g=10 м/с²)', uz: 'Tosh 80 m balandlikdan tushadi. Tushish necha sekund davom etadi? (g=10 m/s²)' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['s'], answer: 4 },
        { id: 'kin5', title: { ru: 'Скорость при свободном падении', uz: 'Erkin tushishda tezlik' }, description: { ru: 'Тело свободно падает 3 с. Найдите конечную скорость (м/с). g=10 м/с².', uz: 'Jism 3 s erkin tushadi. Oxirgi tezlikni toping (m/s). g=10 m/s².' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['a'], answer: 30 },
        { id: 'kin6', title: { ru: 'Пройденный путь при равномерном движении', uz: 'Tekis harakatda yo\'l' }, description: { ru: 'Поезд движется со скоростью 72 км/ч. Какой путь он пройдёт за 10 минут? (в км)', uz: 'Poyezd 72 km/soat tezlikda harakatlanmoqda. 10 daqiqada qancha yo\'l bosadi? (km)' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['v'], answer: 12 },
        { id: 'kin7', title: { ru: 'Тормозной путь', uz: 'Tormozlanish yo\'li' }, description: { ru: 'Автомобиль движется со скоростью 20 м/с и тормозит с ускорением 5 м/с². Какой путь до остановки?', uz: 'Avtomobil 20 m/s tezlikda harakatlanib, 5 m/s² sekinlashish bilan to\'xtaydi. To\'xtashgacha bo\'lgan yo\'l qancha?' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['s'], answer: 40 },
        { id: 'kin8', title: { ru: 'Время разгона', uz: 'Tezlanish vaqti' }, description: { ru: 'Тело разгоняется с 5 м/с до 25 м/с с ускорением 4 м/с². Найдите время разгона (с).', uz: 'Jism 5 m/s dan 25 m/s gacha 4 m/s² tezlanish bilan tezlashadi. Tezlanish vaqtini toping (s).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['a'], answer: 5 },
        { id: 'kin9', title: { ru: 'Высота подъёма', uz: 'Ko\'tarilish balandligi' }, description: { ru: 'Тело брошено вертикально вверх со скоростью 30 м/с. Найдите максимальную высоту (м). g=10 м/с².', uz: 'Jism 30 m/s tezlik bilan yuqoriga otildi. Maksimal balandlikni toping (m). g=10 m/s².' }, difficulty: 3, xpReward: 60, coinReward: 9, formulas: ['s'], answer: 45 },
        { id: 'kin10', title: { ru: 'Ускорение свободного падения', uz: 'Erkin tushish tezlanishi' }, description: { ru: 'Камень падает с высоты 20 м за 2 с. Найдите ускорение (м/с²).', uz: 'Tosh 20 m balandlikdan 2 s da tushadi. Tezlanishni toping (m/s²).' }, difficulty: 3, xpReward: 60, coinReward: 9, formulas: ['s'], answer: 10 }
      ],
      quiz: [
        { id: 'kin-q1', difficulty: 1, question: { ru: 'Единица скорости в СИ?', uz: 'SI da tezlik birligi?' }, options: [{ ru: 'м/с', uz: 'm/s' }, { ru: 'км/ч', uz: 'km/soat' }, { ru: 'м/с²', uz: 'm/s²' }, { ru: 'кг', uz: 'kg' }], correctIndex: 0 },
        { id: 'kin-q2', difficulty: 1, question: { ru: 'Формула ускорения:', uz: 'Tezlanish formulasi:' }, options: [{ ru: 'a = v/t', uz: 'a = v/t' }, { ru: 'a = (v-v₀)/t', uz: 'a = (v-v₀)/t' }, { ru: 'a = s/t', uz: 'a = s/t' }, { ru: 'a = mF', uz: 'a = mF' }], correctIndex: 1 },
        { id: 'kin-q3', difficulty: 1, question: { ru: 'Какой путь пройдёт тело за 2 с при скорости 5 м/с?', uz: '5 m/s tezlik bilan 2 s da qancha yo\'l bosiladi?' }, options: [{ ru: '10 м', uz: '10 m' }, { ru: '2.5 м', uz: '2.5 m' }, { ru: '7 м', uz: '7 m' }, { ru: '5 м', uz: '5 m' }], correctIndex: 0 },
        { id: 'kin-q4', difficulty: 2, question: { ru: 'Тело брошено вертикально вверх со скоростью 20 м/с. Через какое время оно достигнет максимальной высоты? (g=10 м/с²)', uz: 'Jism 20 m/s tezlik bilan yuqoriga otildi. U maksimal balandlikka qancha vaqtda yetadi? (g=10 m/s²)' }, options: [{ ru: '2 с', uz: '2 s' }, { ru: '1 с', uz: '1 s' }, { ru: '4 с', uz: '4 s' }, { ru: '0.5 с', uz: '0.5 s' }], correctIndex: 0 },
        { id: 'kin-q5', difficulty: 3, question: { ru: 'Автомобиль разгоняется с ускорением 2 м/с². Какую скорость он наберёт за 6 с, если начальная скорость была 4 м/с?', uz: 'Avtomobil 2 m/s² tezlanish bilan tezlashmoqda. Agar boshlang\'ich tezligi 4 m/s bo\'lsa, 6 s dan keyin tezligi qancha bo\'ladi?' }, options: [{ ru: '16 м/с', uz: '16 m/s' }, { ru: '12 м/с', uz: '12 m/s' }, { ru: '8 м/с', uz: '8 m/s' }, { ru: '20 м/с', uz: '20 m/s' }], correctIndex: 0 }
      ],
      simulationType: 'pendulum'
    },
    {
      id: 'dynamics',
      moduleId: 'mechanics',
      title: { ru: 'Динамика', uz: 'Dinamika' },
      summary: { ru: 'Причины движения — силы.', uz: 'Harakat sabablari — kuchlar.' },
      details: { ru: 'Законы Ньютона, импульс, закон всемирного тяготения.', uz: 'Nyuton qonunlari, impuls, butun olam tortishish qonuni.' },
      formulas: [
        { id: 'F', latex: 'F = ma', description: { ru: 'Второй закон Ньютона', uz: 'Nyutonning ikkinchi qonuni' } },
        { id: 'p', latex: 'p = mv', description: { ru: 'Импульс тела', uz: 'Jism impulsi' } },
        { id: 'Fgrav', latex: 'F = mg', description: { ru: 'Сила тяжести', uz: 'Og\'irlik kuchi' } }
      ],
      tasks: [
        { id: 'dyn1', title: { ru: 'Сила', uz: 'Kuch' }, description: { ru: 'Тело массой 5 кг движется с ускорением 2 м/с². Найдите силу (Н).', uz: 'Massasi 5 kg bo\'lgan jism 2 m/s² tezlanish bilan harakatlanmoqda. Kuchni toping (N).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['F'], answer: 10 },
        { id: 'dyn2', title: { ru: 'Импульс', uz: 'Impuls' }, description: { ru: 'Тело массой 3 кг движется со скоростью 4 м/с. Найдите импульс (кг·м/с).', uz: 'Massasi 3 kg bo\'lgan jism 4 m/s tezlik bilan harakatlanmoqda. Impulsni toping (kg·m/s).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['p'], answer: 12 },
        { id: 'dyn3', title: { ru: 'Сила тяжести', uz: 'Og\'irlik kuchi' }, description: { ru: 'Масса тела 10 кг. Найдите силу тяжести (g=10 м/с²).', uz: 'Jism massasi 10 kg. Og\'irlik kuchini toping (g=10 m/s²).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Fgrav'], answer: 100 },
        { id: 'dyn4', title: { ru: 'Равнодействующая сила', uz: 'Teng ta\'sir etuvchi kuch' }, description: { ru: 'Силы 3 Н и 4 Н перпендикулярны. Найдите модуль равнодействующей (Н).', uz: '3 N va 4 N kuchlar perpendikulyar. Teng ta\'sir etuvchi kuch modulini toping (N).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['F'], answer: 5 },
        { id: 'dyn5', title: { ru: 'Ускорение по второму закону', uz: 'Ikkinchi qonun bo\'yicha tezlanish' }, description: { ru: 'Сила 20 Н действует на тело массой 4 кг. Найдите ускорение (м/с²).', uz: '20 N kuch 4 kg massali jismga ta\'sir qiladi. Tezlanishni toping (m/s²).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['F'], answer: 5 },
        { id: 'dyn6', title: { ru: 'Масса по силе и ускорению', uz: 'Kuch va tezlanish bo\'yicha massa' }, description: { ru: 'Тело под действием силы 15 Н движется с ускорением 3 м/с². Найдите массу (кг).', uz: 'Jism 15 N kuch ta\'sirida 3 m/s² tezlanish bilan harakatlanadi. Massani toping (kg).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['F'], answer: 5 },
        { id: 'dyn7', title: { ru: 'Импульс силы', uz: 'Kuch impulsi' }, description: { ru: 'Сила 10 Н действует на тело в течение 2 с. Найдите изменение импульса (кг·м/с).', uz: '10 N kuch jismga 2 s davomida ta\'sir qiladi. Impuls o\'zgarishini toping (kg·m/s).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['p'], answer: 20 },
        { id: 'dyn8', title: { ru: 'Вес тела', uz: 'Jism og\'irligi' }, description: { ru: 'Тело массой 2 кг лежит на горизонтальной поверхности. Найдите его вес (Н). g=10 м/с².', uz: '2 kg massali jism gorizontal yuzada yotibdi. Uning og\'irligini toping (N). g=10 m/s².' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Fgrav'], answer: 20 },
        { id: 'dyn9', title: { ru: 'Сила трения', uz: 'Ishqalanish kuchi' }, description: { ru: 'Коэффициент трения 0.2, масса тела 5 кг. Найдите силу трения (Н). g=10 м/с².', uz: 'Ishqalanish koeffitsienti 0.2, jism massasi 5 kg. Ishqalanish kuchini toping (N). g=10 m/s².' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Fgrav'], answer: 10 },
        { id: 'dyn10', title: { ru: 'Центростремительная сила', uz: 'Markazga intilma kuch' }, description: { ru: 'Тело массой 0.5 кг движется по окружности радиусом 2 м со скоростью 4 м/с. Найдите силу (Н).', uz: '0.5 kg massali jism 2 m radiusli aylana bo\'ylab 4 m/s tezlik bilan harakatlanadi. Kuchni toping (N).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['F'], answer: 4 }
      ],
      quiz: [
        { id: 'dyn-q1', difficulty: 1, question: { ru: 'Формула второго закона Ньютона:', uz: 'Nyutonning ikkinchi qonuni formulasi:' }, options: [{ ru: 'F = ma', uz: 'F = ma' }, { ru: 'F = mv', uz: 'F = mv' }, { ru: 'F = kx', uz: 'F = kx' }, { ru: 'F = μN', uz: 'F = μN' }], correctIndex: 0 },
        { id: 'dyn-q2', difficulty: 1, question: { ru: 'Единица силы в СИ:', uz: 'SI da kuch birligi:' }, options: [{ ru: 'Ньютон (Н)', uz: 'Nyuton (N)' }, { ru: 'Килограмм (кг)', uz: 'Kilogramm (kg)' }, { ru: 'Джоуль (Дж)', uz: 'Joul (J)' }, { ru: 'Ватт (Вт)', uz: 'Vatt (W)' }], correctIndex: 0 },
        { id: 'dyn-q3', difficulty: 2, question: { ru: 'Тело массой 2 кг движется с ускорением 3 м/с². Какая сила действует?', uz: 'Massasi 2 kg bo\'lgan jism 3 m/s² tezlanish bilan harakatlanmoqda. Qanday kuch ta\'sir qiladi?' }, options: [{ ru: '6 Н', uz: '6 N' }, { ru: '5 Н', uz: '5 N' }, { ru: '1.5 Н', uz: '1.5 N' }, { ru: '0.67 Н', uz: '0.67 N' }], correctIndex: 0 },
        { id: 'dyn-q4', difficulty: 2, question: { ru: 'Импульс тела 20 кг·м/с, масса 4 кг. Чему равна скорость?', uz: 'Jism impulsi 20 kg·m/s, massasi 4 kg. Tezligi qancha?' }, options: [{ ru: '5 м/с', uz: '5 m/s' }, { ru: '80 м/с', uz: '80 m/s' }, { ru: '0.2 м/с', uz: '0.2 m/s' }, { ru: '16 м/с', uz: '16 m/s' }], correctIndex: 0 },
        { id: 'dyn-q5', difficulty: 3, question: { ru: 'Две силы 6 Н и 8 Н направлены перпендикулярно. Равнодействующая равна:', uz: '6 N va 8 N kuchlar perpendikulyar yo\'nalgan. Teng ta\'sir etuvchi kuch:' }, options: [{ ru: '10 Н', uz: '10 N' }, { ru: '14 Н', uz: '14 N' }, { ru: '2 Н', uz: '2 N' }, { ru: '48 Н', uz: '48 N' }], correctIndex: 0 }
      ]
    },
    {
      id: 'oscillations',
      moduleId: 'mechanics',
      title: { ru: 'Колебания', uz: 'Tebranishlar' },
      summary: { ru: 'Периодические движения, пружинный и математический маятники.', uz: 'Davriy harakatlar, prujinali va matematik mayatniklar.' },
      details: { ru: 'Колебания характеризуются периодом, частотой и амплитудой.', uz: 'Tebranishlar davr, chastota va amplituda bilan tavsiflanadi.' },
      formulas: [
        { id: 'T', latex: 'T = 2\\pi\\sqrt{\\frac{m}{k}}', description: { ru: 'Период пружинного маятника', uz: 'Prujinali mayatnik davri' } },
        { id: 'freq', latex: '\\nu = \\frac{1}{T}', description: { ru: 'Частота колебаний', uz: 'Tebranish chastotasi' } }
      ],
      tasks: [
        { id: 'osc1', title: { ru: 'Период пружинного маятника', uz: 'Prujinali mayatnik davri' }, description: { ru: 'Груз массой 0.5 кг на пружине жёсткостью 50 Н/м. Найдите период (округлите до сотых).', uz: '0.5 kg massali yuk 50 N/m qattiqlikdagi prujinaga osilgan. Davrni toping (yuzdan birgacha yaxlitlang).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['T'], answer: 0.63 },
        { id: 'osc2', title: { ru: 'Частота', uz: 'Chastota' }, description: { ru: 'Период колебаний 0.25 с. Найдите частоту (Гц).', uz: 'Tebranish davri 0.25 s. Chastotani toping (Hz).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['freq'], answer: 4 },
        { id: 'osc3', title: { ru: 'Период математического маятника', uz: 'Matematik mayatnik davri' }, description: { ru: 'Длина маятника 1 м. Найдите период (g=10 м/с², округлите до сотых).', uz: 'Mayatnik uzunligi 1 m. Davrni toping (g=10 m/s², yuzdan birgacha yaxlitlang).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['T'], answer: 1.99 },
        { id: 'osc4', title: { ru: 'Жёсткость пружины', uz: 'Prujina qattiqligi' }, description: { ru: 'Груз массой 0.2 кг совершает колебания с периодом 0.4 с. Найдите жёсткость (Н/м).', uz: '0.2 kg yuk 0.4 s davr bilan tebranadi. Qattiqlikni toping (N/m).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['T'], answer: 49.35 },
        { id: 'osc5', title: { ru: 'Частота пружинного маятника', uz: 'Prujinali mayatnik chastotasi' }, description: { ru: 'Масса 0.1 кг, жёсткость 40 Н/м. Найдите частоту (Гц).', uz: 'Massa 0.1 kg, qattiqlik 40 N/m. Chastotani toping (Hz).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['freq'], answer: 3.18 },
        { id: 'osc6', title: { ru: 'Амплитуда', uz: 'Amplituda' }, description: { ru: 'За одно колебание маятник проходит путь 20 см. Найдите амплитуду (см).', uz: 'Bitta tebranishda mayatnik 20 sm yo\'l bosadi. Amplitudani toping (sm).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: [], answer: 5 },
        { id: 'osc7', title: { ru: 'Число колебаний', uz: 'Tebranishlar soni' }, description: { ru: 'Частота 5 Гц. Сколько колебаний за 10 с?', uz: 'Chastota 5 Hz. 10 s da nechta tebranish bo\'ladi?' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['freq'], answer: 50 },
        { id: 'osc8', title: { ru: 'Период и частота', uz: 'Davr va chastota' }, description: { ru: 'Частота 2 Гц. Найдите период (с).', uz: 'Chastota 2 Hz. Davrni toping (s).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['freq'], answer: 0.5 },
        { id: 'osc9', title: { ru: 'Длина маятника', uz: 'Mayatnik uzunligi' }, description: { ru: 'Период математического маятника 2 с. Найдите длину (м). g=10 м/с².', uz: 'Matematik mayatnik davri 2 s. Uzunligini toping (m). g=10 m/s².' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['T'], answer: 1.01 },
        { id: 'osc10', title: { ru: 'Частота при изменении жёсткости', uz: 'Qattiqlik o\'zgarganda chastota' }, description: { ru: 'Жёсткость пружины увеличили в 4 раза. Во сколько раз изменится частота?', uz: 'Prujina qattiqligi 4 marta oshirildi. Chastota necha marta o\'zgaradi?' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['freq'], answer: 2 }
      ],
      quiz: [
        { id: 'osc-q1', difficulty: 1, question: { ru: 'Формула периода пружинного маятника:', uz: 'Prujinali mayatnik davri formulasi:' }, options: [{ ru: 'T = 2π√(m/k)', uz: 'T = 2π√(m/k)' }, { ru: 'T = 2π√(k/m)', uz: 'T = 2π√(k/m)' }, { ru: 'T = 2π√(mg)', uz: 'T = 2π√(mg)' }, { ru: 'T = 1/ν', uz: 'T = 1/ν' }], correctIndex: 0 },
        { id: 'osc-q2', difficulty: 2, question: { ru: 'Частота и период связаны соотношением:', uz: 'Chastota va davr o\'zaro bog\'liq:' }, options: [{ ru: 'ν = 1/T', uz: 'ν = 1/T' }, { ru: 'ν = T', uz: 'ν = T' }, { ru: 'ν = 2πT', uz: 'ν = 2πT' }, { ru: 'T = 1/ν²', uz: 'T = 1/ν²' }], correctIndex: 0 }
      ],
      simulationType: 'spring'
    }
  ]
};
