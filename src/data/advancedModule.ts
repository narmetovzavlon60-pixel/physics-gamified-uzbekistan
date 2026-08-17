import type { PhysicsModule } from '../types/physics';

export const advancedModule: PhysicsModule = {
  id: 'advanced',
  title: { ru: 'Дополнительно', uz: 'Qo\'shimcha' },
  icon: '🚀',
  color: '#a78bfa',
  summary: { ru: 'Углублённые темы для продвинутых пользователей.', uz: 'Ilg\'or foydalanuvchilar uchun chuqurlashtirilgan mavzular.' },
  topics: [
    {
      id: 'statics',
      moduleId: 'advanced',
      title: { ru: 'Статика', uz: 'Statika' },
      summary: { ru: 'Равновесие тел, момент силы, центр масс.', uz: 'Jismlar muvozanati, kuch momenti, massa markazi.' },
      details: { ru: 'Статика изучает условия равновесия тел под действием сил.', uz: 'Statika jismlarning kuchlar ta\'sirida muvozanat shartlarini o\'rganadi.' },
      formulas: [
        { id: 'moment', latex: 'M = F \\cdot l', description: { ru: 'Момент силы', uz: 'Kuch momenti' } },
        { id: 'equilibrium', latex: 'M_1 = M_2', description: { ru: 'Условие равновесия рычага', uz: 'Richag muvozanati sharti' } }
      ],
      tasks: [
        { id: 'stat1', title: { ru: 'Момент силы', uz: 'Kuch momenti' }, description: { ru: 'Сила 20 Н приложена к рычагу на расстоянии 0.5 м от оси. Найдите момент силы (Н·м).', uz: '20 N kuch richagga o\'qdan 0.5 m masofada qo\'yilgan. Kuch momentini toping (N·m).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['moment'], answer: 10 },
        { id: 'stat2', title: { ru: 'Плечо силы', uz: 'Kuch yelkasi' }, description: { ru: 'Момент силы 30 Н·м, сила 15 Н. Найдите плечо силы (м).', uz: 'Kuch momenti 30 N·m, kuch 15 N. Kuch yelkasini toping (m).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['moment'], answer: 2 },
        { id: 'stat3', title: { ru: 'Равновесие рычага', uz: 'Richag muvozanati' }, description: { ru: 'На левое плечо рычага длиной 0.3 м действует сила 20 Н. Какую силу нужно приложить к правому плечу длиной 0.6 м для равновесия? (Н)', uz: 'Richagning chap yelkasi 0.3 m ga 20 N kuch ta\'sir qiladi. Muvozanat uchun 0.6 m li o\'ng yelkaga qanday kuch qo\'yish kerak? (N)' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['equilibrium'], answer: 10 },
        { id: 'stat4', title: { ru: 'Длина плеча', uz: 'Yelka uzunligi' }, description: { ru: 'Для равновесия рычага на длинное плечо 0.8 м действует сила 5 Н. На короткое плечо действует сила 20 Н. Найдите длину короткого плеча (м).', uz: 'Richag muvozanati uchun 0.8 m uzun yelkaga 5 N kuch ta\'sir qiladi. Qisqa yelkaga 20 N kuch ta\'sir qiladi. Qisqa yelka uzunligini toping (m).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['equilibrium'], answer: 0.2 },
        { id: 'stat5', title: { ru: 'Масса для равновесия', uz: 'Muvozanat uchun massa' }, description: { ru: 'На расстоянии 0.4 м от опоры находится груз 2 кг. На каком расстоянии нужно подвесить груз 4 кг, чтобы уравновесить? (м)', uz: 'Tayanchdan 0.4 m masofada 2 kg yuk turibdi. 4 kg yukni qanday masofaga osish kerak? (m)' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['equilibrium'], answer: 0.2 },
        { id: 'stat6', title: { ru: 'Момент силы под углом', uz: 'Burchak ostida kuch momenti' }, description: { ru: 'Сила 10 Н действует на рычаг длиной 0.5 м под углом 90°. Найдите момент (Н·м).', uz: '10 N kuch 0.5 m uzunlikdagi richagga 90° burchak ostida ta\'sir qiladi. Momentni toping (N·m).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['moment'], answer: 5 },
        { id: 'stat7', title: { ru: 'Условие равновесия', uz: 'Muvozanat sharti' }, description: { ru: 'На рычаг действуют две силы: 30 Н на плече 0.2 м и 15 Н на неизвестном плече. Найдите плечо второй силы (м).', uz: 'Richagga ikkita kuch ta\'sir qiladi: 0.2 m yelkada 30 N va noma\'lum yelkada 15 N. Ikkinchi kuchning yelkasini toping (m).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['equilibrium'], answer: 0.4 },
        { id: 'stat8', title: { ru: 'Момент пары сил', uz: 'Juft kuch momenti' }, description: { ru: 'Две силы по 5 Н действуют в противоположных направлениях на расстоянии 0.2 м. Найдите момент пары (Н·м).', uz: '0.2 m masofada qarama-qarshi yo\'nalishda 5 N dan ikkita kuch ta\'sir qiladi. Juft kuch momentini toping (N·m).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['moment'], answer: 1 },
        { id: 'stat9', title: { ru: 'Центр масс', uz: 'Massa markazi' }, description: { ru: 'Два точечных тела массами 2 кг и 3 кг находятся на расстоянии 1 м. На каком расстоянии от первого тела находится центр масс? (м)', uz: '2 kg va 3 kg massali ikkita nuqtaviy jism 1 m masofada. Birinchi jismdan massa markazi qanday masofada? (m)' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: [], answer: 0.6 },
        { id: 'stat10', title: { ru: 'Устойчивое равновесие', uz: 'Barqaror muvozanat' }, description: { ru: 'Чем ниже центр тяжести, тем ... равновесие. Выберите коэффициент (1 - устойчивее, 0 - менее устойчивое)', uz: 'Og\'irlik markazi qanchalik past bo\'lsa, muvozanat shunchalik ... (1 - barqaror, 0 - kam barqaror)' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: [], answer: 1 }
      ],
      quiz: [
        { id: 'stat-q1', difficulty: 1, question: { ru: 'Единица момента силы в СИ:', uz: 'SI da kuch momenti birligi:' }, options: [{ ru: 'Н·м', uz: 'N·m' }, { ru: 'Дж', uz: 'J' }, { ru: 'Вт', uz: 'W' }, { ru: 'Па', uz: 'Pa' }], correctIndex: 0 },
        { id: 'stat-q2', difficulty: 1, question: { ru: 'Условие равновесия рычага:', uz: 'Richag muvozanati sharti:' }, options: [{ ru: 'M₁ = M₂', uz: 'M₁ = M₂' }, { ru: 'F₁ = F₂', uz: 'F₁ = F₂' }, { ru: 'M₁ > M₂', uz: 'M₁ > M₂' }, { ru: 'M₁ + M₂ = 0', uz: 'M₁ + M₂ = 0' }], correctIndex: 0 },
        { id: 'stat-q3', difficulty: 2, question: { ru: 'Если плечо силы увеличить в 3 раза, момент...', uz: 'Kuch yelkasi 3 marta oshsa, moment...' }, options: [{ ru: 'Увеличится в 3 раза', uz: '3 marta ortadi' }, { ru: 'Уменьшится в 3 раза', uz: '3 marta kamayadi' }, { ru: 'Не изменится', uz: 'O\'zgarmaydi' }, { ru: 'Увеличится в 9 раз', uz: '9 marta ortadi' }], correctIndex: 0 }
      ]
    },
    {
      id: 'lenses-instruments',
      moduleId: 'advanced',
      title: { ru: 'Линзы и оптические приборы', uz: 'Linzalar va optik asboblar' },
      summary: { ru: 'Формула тонкой линзы, увеличение, оптические приборы.', uz: 'Yupqa linza formulasi, kattalashtirish, optik asboblar.' },
      details: { ru: 'Линзы используются в очках, микроскопах, телескопах.', uz: 'Linzalar ko\'zoynak, mikroskop, teleskoplarda ishlatiladi.' },
      formulas: [
        { id: 'lens', latex: '\\frac{1}{F} = \\frac{1}{d} + \\frac{1}{f}', description: { ru: 'Формула тонкой линзы', uz: 'Yupqa linza formulasi' } },
        { id: 'magnification', latex: '\\Gamma = \\frac{f}{d}', description: { ru: 'Увеличение линзы', uz: 'Linza kattalashtirishi' } }
      ],
      tasks: [
        { id: 'lens1', title: { ru: 'Оптическая сила', uz: 'Optik kuch' }, description: { ru: 'Фокусное расстояние линзы 20 см. Найдите оптическую силу (дптр).', uz: 'Linzaning fokus masofasi 20 sm. Optik kuchini toping (dptr).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['lens'], answer: 5 },
        { id: 'lens2', title: { ru: 'Расстояние до изображения', uz: 'Tasvirgacha masofa' }, description: { ru: 'Предмет на расстоянии 30 см от линзы с фокусным расстоянием 15 см. Найдите расстояние до изображения (см).', uz: 'Buyum fokus masofasi 15 sm bo\'lgan linzadan 30 sm masofada. Tasvirgacha masofani toping (sm).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['lens'], answer: 30 },
        { id: 'lens3', title: { ru: 'Увеличение', uz: 'Kattalashtirish' }, description: { ru: 'Расстояние до изображения 60 см, до предмета 20 см. Найдите увеличение линзы.', uz: 'Tasvirgacha masofa 60 sm, buyumgacha 20 sm. Linza kattalashtirishini toping.' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['magnification'], answer: 3 },
        { id: 'lens4', title: { ru: 'Фокусное расстояние', uz: 'Fokus masofa' }, description: { ru: 'Оптическая сила линзы 8 дптр. Найдите фокусное расстояние (см).', uz: 'Linzaning optik kuchi 8 dptr. Fokus masofasini toping (sm).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['lens'], answer: 12.5 },
        { id: 'lens5', title: { ru: 'Увеличение микроскопа', uz: 'Mikroskop kattalashtirishi' }, description: { ru: 'Объектив микроскопа увеличивает в 10 раз, окуляр в 15 раз. Найдите общее увеличение.', uz: 'Mikroskop ob\'ektivi 10 marta, okulyar 15 marta kattalashtiradi. Umumiy kattalashtirishni toping.' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: [], answer: 150 }
      ],
      quiz: [
        { id: 'lens-q1', difficulty: 1, question: { ru: 'Формула тонкой линзы:', uz: 'Yupqa linza formulasi:' }, options: [{ ru: '1/F = 1/d + 1/f', uz: '1/F = 1/d + 1/f' }, { ru: 'F = d + f', uz: 'F = d + f' }, { ru: '1/F = 1/d - 1/f', uz: '1/F = 1/d - 1/f' }, { ru: 'F = df', uz: 'F = df' }], correctIndex: 0 },
        { id: 'lens-q2', difficulty: 1, question: { ru: 'Оптическая сила измеряется в:', uz: 'Optik kuch qaysi birlikda o\'lchanadi?' }, options: [{ ru: 'Диоптриях', uz: 'Dioptriyalarda' }, { ru: 'Метрах', uz: 'Metrlarda' }, { ru: 'Люксах', uz: 'Lyukslarda' }, { ru: 'Радианах', uz: 'Radianlarda' }], correctIndex: 0 },
        { id: 'lens-q3', difficulty: 2, question: { ru: 'Собирающая линза имеет фокусное расстояние 20 см. Если предмет на 40 см, изображение будет...', uz: 'Yig\'uvchi linza fokus masofasi 20 sm. Agar buyum 40 sm da bo\'lsa, tasvir...' }, options: [{ ru: 'Действительным и перевёрнутым', uz: 'Haqiqiy va teskari' }, { ru: 'Мнимым и прямым', uz: 'Mavhum va to\'g\'ri' }, { ru: 'Точечным', uz: 'Nuqtali' }, { ru: 'Размытым', uz: 'Xira' }], correctIndex: 0 }
      ]
    },
    {
      id: 'humidity',
      moduleId: 'advanced',
      title: { ru: 'Влажность воздуха', uz: 'Havoning namligi' },
      summary: { ru: 'Относительная влажность, точка росы, парциальное давление.', uz: 'Nisbiy namlik, shudring nuqtasi, parsial bosim.' },
      details: { ru: 'Влажность воздуха характеризуется отношением парциального давления пара к давлению насыщенного пара.', uz: 'Havoning namligi parning parsial bosimining to\'yingan par bosimiga nisbati bilan tavsiflanadi.' },
      formulas: [
        { id: 'relative_humidity', latex: '\\varphi = \\frac{p}{p_{\\text{нас}}} \\cdot 100\\%', description: { ru: 'Относительная влажность', uz: 'Nisbiy namlik' } }
      ],
      tasks: [
        { id: 'hum1', title: { ru: 'Относительная влажность', uz: 'Nisbiy namlik' }, description: { ru: 'Парциальное давление пара 1.2 кПа, давление насыщенного пара 2.0 кПа. Найдите относительную влажность (%).', uz: 'Parning parsial bosimi 1.2 kPa, to\'yingan par bosimi 2.0 kPa. Nisbiy namlikni toping (%).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['relative_humidity'], answer: 60 },
        { id: 'hum2', title: { ru: 'Парциальное давление', uz: 'Parsial bosim' }, description: { ru: 'Относительная влажность 80%, давление насыщенного пара 2.5 кПа. Найдите парциальное давление (кПа).', uz: 'Nisbiy namlik 80%, to\'yingan par bosimi 2.5 kPa. Parsial bosimni toping (kPa).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['relative_humidity'], answer: 2 },
        { id: 'hum3', title: { ru: 'Давление насыщенного пара', uz: 'To\'yingan par bosimi' }, description: { ru: 'Парциальное давление 1.5 кПа, относительная влажность 75%. Найдите давление насыщенного пара (кПа).', uz: 'Parsial bosim 1.5 kPa, nisbiy namlik 75%. To\'yingan par bosimini toping (kPa).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['relative_humidity'], answer: 2 },
        { id: 'hum4', title: { ru: 'Точка росы', uz: 'Shudring nuqtasi' }, description: { ru: 'Парциальное давление 1.8 кПа при 20°C, давление насыщенного пара при 20°C 2.3 кПа. Найдите относительную влажность (%).', uz: '20°C da parsial bosim 1.8 kPa, to\'yingan par bosimi 2.3 kPa. Nisbiy namlikni toping (%).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['relative_humidity'], answer: 78.3 },
        { id: 'hum5', title: { ru: 'Изменение влажности', uz: 'Namlikning o\'zgarishi' }, description: { ru: 'Если температура воздуха понижается, а абсолютная влажность не меняется, относительная влажность... (1 - увеличивается, 0 - уменьшается)', uz: 'Agar havo harorati pasaysa, absolyut namlik o\'zgarmasa, nisbiy namlik... (1 - ortadi, 0 - kamayadi)' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: [], answer: 1 }
      ],
      quiz: [
        { id: 'hum-q1', difficulty: 1, question: { ru: 'Относительная влажность воздуха измеряется в:', uz: 'Havoning nisbiy namligi qaysi birlikda o\'lchanadi?' }, options: [{ ru: 'Процентах', uz: 'Foizlarda' }, { ru: 'Паскалях', uz: 'Paskallarda' }, { ru: 'Кельвинах', uz: 'Kelvinlarda' }, { ru: 'Килограммах', uz: 'Kilogramlarda' }], correctIndex: 0 },
        { id: 'hum-q2', difficulty: 1, question: { ru: 'При 100% относительной влажности воздух...', uz: '100% nisbiy namlikda havo...' }, options: [{ ru: 'Насыщен водяным паром', uz: 'Suv bug\'i bilan to\'yingan' }, { ru: 'Абсолютно сухой', uz: 'Mutlaqo quruq' }, { ru: 'Имеет максимальную температуру', uz: 'Maksimal haroratga ega' }, { ru: 'Не содержит кислорода', uz: 'Kislorodni o\'z ichiga olmaydi' }], correctIndex: 0 },
        { id: 'hum-q3', difficulty: 2, question: { ru: 'Если воздух охлаждается, относительная влажность...', uz: 'Havo sovutilganda nisbiy namlik...' }, options: [{ ru: 'Увеличивается', uz: 'Ortadi' }, { ru: 'Уменьшается', uz: 'Kamayadi' }, { ru: 'Не меняется', uz: 'O\'zgarmaydi' }, { ru: 'Сначала растёт, потом падает', uz: 'Avval ortadi, keyin pasayadi' }], correctIndex: 0 }
      ]
    },
    {
      id: 'induction',
      moduleId: 'advanced',
      title: { ru: 'Электромагнитная индукция', uz: 'Elektromagnit induksiya' },
      summary: { ru: 'Закон Фарадея, ЭДС индукции, правило Ленца.', uz: 'Faradey qonuni, induksiya EYK, Lens qoidasi.' },
      details: { ru: 'Изменение магнитного потока через контур вызывает появление ЭДС индукции.', uz: 'Kontur orqali magnit oqimining o\'zgarishi induksiya EYK ni yuzaga keltiradi.' },
      formulas: [
        { id: 'faraday', latex: '\\mathcal{E} = -\\frac{\\Delta \\Phi}{\\Delta t}', description: { ru: 'Закон Фарадея', uz: 'Faradey qonuni' } },
        { id: 'transformer', latex: '\\frac{U_1}{U_2} = \\frac{N_1}{N_2}', description: { ru: 'Трансформатор', uz: 'Transformator' } }
      ],
      tasks: [
        { id: 'ind1', title: { ru: 'ЭДС индукции', uz: 'Induksiya EYK' }, description: { ru: 'Магнитный поток изменяется на 0.2 Вб за 0.1 с. Найдите ЭДС (В).', uz: 'Magnit oqim 0.1 s da 0.2 Wb ga o\'zgaradi. EYKni toping (V).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['faraday'], answer: 2 },
        { id: 'ind2', title: { ru: 'Время изменения', uz: 'O\'zgarish vaqti' }, description: { ru: 'ЭДС 5 В, изменение потока 0.5 Вб. Найдите время изменения (с).', uz: 'EYK 5 V, oqim o\'zgarishi 0.5 Wb. O\'zgarish vaqtini toping (s).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['faraday'], answer: 0.1 },
        { id: 'ind3', title: { ru: 'Изменение потока', uz: 'Oqim o\'zgarishi' }, description: { ru: 'ЭДС 4 В, время 0.2 с. Найдите изменение магнитного потока (Вб).', uz: 'EYK 4 V, vaqt 0.2 s. Magnit oqim o\'zgarishini toping (Wb).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['faraday'], answer: 0.8 },
        { id: 'ind4', title: { ru: 'Трансформатор', uz: 'Transformator' }, description: { ru: 'Первичная обмотка имеет 100 витков, вторичная 500. Напряжение на первичной 220 В. Найдите напряжение на вторичной (В).', uz: 'Birlamchi o\'ram 100, ikkilamchi 500. Birlamchi kuchlanish 220 V. Ikkilamchi kuchlanishni toping (V).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['transformer'], answer: 1100 },
        { id: 'ind5', title: { ru: 'Число витков', uz: 'O\'ramlar soni' }, description: { ru: 'Напряжение 220 В и 12 В, первичная обмотка 440 витков. Найдите число витков вторичной обмотки.', uz: 'Kuchlanishlar 220 V va 12 V, birlamchi o\'ram 440. Ikkilamchi o\'ram sonini toping.' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['transformer'], answer: 24 }
      ],
      quiz: [
        { id: 'ind-q1', difficulty: 1, question: { ru: 'Закон электромагнитной индукции открыл:', uz: 'Elektromagnit induksiya qonunini kim kashf etgan?' }, options: [{ ru: 'Фарадей', uz: 'Faradey' }, { ru: 'Ньютон', uz: 'Nyuton' }, { ru: 'Максвелл', uz: 'Maksvell' }, { ru: 'Эйнштейн', uz: 'Eynshteyn' }], correctIndex: 0 },
        { id: 'ind-q2', difficulty: 1, question: { ru: 'Правило Ленца определяет...', uz: 'Lens qoidasi nimani aniqlaydi?' }, options: [{ ru: 'Направление индукционного тока', uz: 'Induksion tok yo\'nalishini' }, { ru: 'Величину ЭДС', uz: 'EYK kattaligini' }, { ru: 'Сопротивление проводника', uz: 'O\'tkazgich qarshiligini' }, { ru: 'Мощность тока', uz: 'Tok quvvatini' }], correctIndex: 0 },
        { id: 'ind-q3', difficulty: 2, question: { ru: 'ЭДС индукции возникает при...', uz: 'Induksiya EYK qachon paydo bo\'ladi?' }, options: [{ ru: 'Изменении магнитного потока', uz: 'Magnit oqim o\'zgarganda' }, { ru: 'Постоянном магнитном поле', uz: 'Doimiy magnit maydonda' }, { ru: 'Отсутствии проводника', uz: 'O\'tkazgich yo\'qligida' }, { ru: 'Нулевом токе', uz: 'Nol tokda' }], correctIndex: 0 }
      ]
    },
    {
      id: 'nuclear-structure',
      moduleId: 'advanced',
      title: { ru: 'Строение атома и ядра', uz: 'Atom va yadro tuzilishi' },
      summary: { ru: 'Состав ядра, энергия связи, дефект массы.', uz: 'Yadro tarkibi, bog\'lanish energiyasi, massa defekti.' },
      details: { ru: 'Ядро состоит из протонов и нейтронов. Энергия связи определяется дефектом массы.', uz: 'Yadro proton va neytronlardan iborat. Bog\'lanish energiyasi massa defekti orqali aniqlanadi.' },
      formulas: [
        { id: 'binding_energy', latex: 'E = \\Delta m \\cdot c^2', description: { ru: 'Энергия связи', uz: 'Bog\'lanish energiyasi' } },
        { id: 'mass_number', latex: 'A = Z + N', description: { ru: 'Массовое число', uz: 'Massa soni' } }
      ],
      tasks: [
        { id: 'nucs1', title: { ru: 'Число нейтронов', uz: 'Neytronlar soni' }, description: { ru: 'Ядро урана-235 (A=235, Z=92). Сколько нейтронов в ядре?', uz: 'Uran-235 yadrosi (A=235, Z=92). Yadroda nechta neytron bor?' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['mass_number'], answer: 143 },
        { id: 'nucs2', title: { ru: 'Энергия связи', uz: 'Bog\'lanish energiyasi' }, description: { ru: 'Дефект массы 0.1 а.е.м. Найдите энергию связи (МэВ, 1 а.е.м. = 931.5 МэВ).', uz: 'Massa defekti 0.1 a.e.m. Bog\'lanish energiyasini toping (MeV, 1 a.e.m. = 931.5 MeV).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['binding_energy'], answer: 93.15 },
        { id: 'nucs3', title: { ru: 'Массовое число', uz: 'Massa soni' }, description: { ru: 'Ядро содержит 6 протонов и 6 нейтронов. Найдите массовое число.', uz: 'Yadroda 6 proton va 6 neytron bor. Massa sonini toping.' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['mass_number'], answer: 12 },
        { id: 'nucs4', title: { ru: 'Дефект массы', uz: 'Massa defekti' }, description: { ru: 'Энергия связи ядра 186.3 МэВ. Найдите дефект массы (а.е.м.).', uz: 'Yadro bog\'lanish energiyasi 186.3 MeV. Massa defektini toping (a.e.m.).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['binding_energy'], answer: 0.2 },
        { id: 'nucs5', title: { ru: 'Число протонов', uz: 'Protonlar soni' }, description: { ru: 'Массовое число 23, число нейтронов 12. Найдите число протонов.', uz: 'Massa soni 23, neytronlar soni 12. Protonlar sonini toping.' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['mass_number'], answer: 11 }
      ],
      quiz: [
        { id: 'nucs-q1', difficulty: 1, question: { ru: 'Какие частицы входят в состав ядра?', uz: 'Yadro tarkibiga qanday zarralar kiradi?' }, options: [{ ru: 'Протоны и нейтроны', uz: 'Protonlar va neytronlar' }, { ru: 'Электроны и протоны', uz: 'Elektronlar va protonlar' }, { ru: 'Фотоны', uz: 'Fotonlar' }, { ru: 'Мезоны', uz: 'Mezonlar' }], correctIndex: 0 },
        { id: 'nucs-q2', difficulty: 1, question: { ru: 'Энергия связи определяется по формуле:', uz: 'Bog\'lanish energiyasi qaysi formula bilan aniqlanadi?' }, options: [{ ru: 'E = Δm·c²', uz: 'E = Δm·c²' }, { ru: 'E = mv²/2', uz: 'E = mv²/2' }, { ru: 'E = mgh', uz: 'E = mgh' }, { ru: 'E = hν', uz: 'E = hν' }], correctIndex: 0 },
        { id: 'nucs-q3', difficulty: 2, question: { ru: 'Если массовое число 14, а число протонов 6, то число нейтронов...', uz: 'Agar massa soni 14, protonlar soni 6 bo\'lsa, neytronlar soni...' }, options: [{ ru: '8', uz: '8' }, { ru: '6', uz: '6' }, { ru: '14', uz: '14' }, { ru: '20', uz: '20' }], correctIndex: 0 }
      ]
    }
  ]
};
