import type { PhysicsModule } from '../types/physics';

export const thermoModule: PhysicsModule = {
  id: 'thermo',
  title: { ru: 'Термодинамика', uz: 'Termodinamika' },
  icon: '🔥',
  color: '#ef4444',
  summary: { ru: 'Изучает тепловые явления, внутреннюю энергию, работу газа и законы термодинамики.', uz: 'Issiqlik hodisalari, ichki energiya, gaz ishi va termodinamika qonunlarini o\'rganadi.' },
  topics: [
    {
      id: 'ideal-gas',
      moduleId: 'thermo',
      title: { ru: 'Идеальный газ', uz: 'Ideal gaz' },
      summary: { ru: 'Уравнение Менделеева-Клапейрона, изопроцессы, внутренняя энергия.', uz: 'Mendeleyev-Klapeyron tenglamasi, izoproseslar, ichki energiya.' },
      details: { ru: 'Идеальный газ — модель, в которой частицы не взаимодействуют. Уравнение связывает давление, объём, температуру и количество вещества.', uz: 'Ideal gaz — zarralar o\'zaro ta\'sirlashmaydigan model. Tenglama bosim, hajm, harorat va modda miqdorini bog\'laydi.' },
      formulas: [
        { id: 'pV', latex: 'pV = \\nu RT', description: { ru: 'Уравнение состояния', uz: 'Holat tenglamasi' } },
        { id: 'U', latex: 'U = \\frac{3}{2}\\nu RT', description: { ru: 'Внутренняя энергия', uz: 'Ichki energiya' } },
        { id: 'Q', latex: 'Q = cm\\Delta T', description: { ru: 'Количество теплоты', uz: 'Issiqlik miqdori' } }
      ],
      tasks: [
        { id: 'gas1', title: { ru: 'Давление газа', uz: 'Gaz bosimi' }, description: { ru: 'Найдите давление 1 моль идеального газа при объёме 22.4 л (0.0224 м³) и температуре 273 К (в Па).', uz: '1 mol ideal gazning 22.4 L (0.0224 m³) hajm va 273 K haroratdagi bosimini toping (Pa).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['pV'], answer: 101300 },
        { id: 'gas2', title: { ru: 'Внутренняя энергия', uz: 'Ichki energiya' }, description: { ru: 'Найдите внутреннюю энергию 2 моль одноатомного газа при 300 К (в Дж).', uz: '300 K da 2 mol bir atomli gazning ichki energiyasini toping (J).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['U'], answer: 7479 },
        { id: 'gas3', title: { ru: 'Нагрев воды', uz: 'Suvni isitish' }, description: { ru: 'Сколько теплоты нужно, чтобы нагреть 2 кг воды на 10°C? (c=4200 Дж/(кг·°C))', uz: '2 kg suvni 10°C ga isitish uchun qancha issiqlik kerak? (c=4200 J/(kg·°C))' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['Q'], answer: 84000 },
        { id: 'gas4', title: { ru: 'Количество вещества', uz: 'Modda miqdori' }, description: { ru: 'Газ при давлении 100 кПа, объёме 0.1 м³ и температуре 300 К. Найдите количество вещества (моль, R=8.31).', uz: '100 kPa bosim, 0.1 m³ hajm va 300 K haroratdagi gaz. Modda miqdorini toping (mol, R=8.31).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['pV'], answer: 4.01 },
        { id: 'gas5', title: { ru: 'Изменение температуры', uz: 'Harorat o\'zgarishi' }, description: { ru: 'Газу сообщили 5000 Дж теплоты, удельная теплоёмкость 500 Дж/(кг·°C), масса 2 кг. Найдите изменение температуры (°C).', uz: 'Gazga 5000 J issiqlik berildi, solishtirma issiqlik sig\'imi 500 J/(kg·°C), massa 2 kg. Harorat o\'zgarishini toping (°C).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Q'], answer: 5 },
        { id: 'gas6', title: { ru: 'Температура в уравнении состояния', uz: 'Holat tenglamasida harorat' }, description: { ru: 'Давление 200 кПа, объём 0.05 м³, количество вещества 1 моль. Найдите температуру (К, R=8.31).', uz: '200 kPa bosim, 0.05 m³ hajm, 1 mol modda. Haroratni toping (K, R=8.31).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['pV'], answer: 1203 },
        { id: 'gas7', title: { ru: 'Работа газа', uz: 'Gaz ishi' }, description: { ru: 'Газ изобарно расширился, давление 100 кПа, изменение объёма 0.02 м³. Найдите работу (Дж).', uz: 'Gaz izobarik kengaydi, bosim 100 kPa, hajm o\'zgarishi 0.02 m³. Ishni toping (J).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['pV'], answer: 2000 },
        { id: 'gas8', title: { ru: 'Удельная теплоёмкость', uz: 'Solishtirma issiqlik sig\'imi' }, description: { ru: 'Для нагрева 0.5 кг вещества на 20°C потребовалось 4200 Дж. Найдите удельную теплоёмкость (Дж/(кг·°C)).', uz: '0.5 kg moddani 20°C ga isitish uchun 4200 J kerak. Solishtirma issiqlik sig\'imini toping (J/(kg·°C)).' }, difficulty: 1, xpReward: 25, coinReward: 4, formulas: ['Q'], answer: 420 },
        { id: 'gas9', title: { ru: 'Объём газа', uz: 'Gaz hajmi' }, description: { ru: 'Давление 150 кПа, температура 300 К, количество вещества 2 моль. Найдите объём (м³, R=8.31).', uz: '150 kPa bosim, 300 K harorat, 2 mol modda. Hajmni toping (m³, R=8.31).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['pV'], answer: 0.0332 },
        { id: 'gas10', title: { ru: 'Внутренняя энергия идеального газа', uz: 'Ideal gaz ichki energiyasi' }, description: { ru: 'Изменение внутренней энергии 3 моль одноатомного газа при охлаждении на 100 К (Дж).', uz: '3 mol bir atomli gaz 100 K ga sovutilganda ichki energiya o\'zgarishi (J).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['U'], answer: 3739.5 }
      ],
      quiz: [
        { id: 'gas-q1', difficulty: 1, question: { ru: 'Уравнение состояния идеального газа:', uz: 'Ideal gaz holat tenglamasi:' }, options: [{ ru: 'pV = νRT', uz: 'pV = νRT' }, { ru: 'pV = mRT', uz: 'pV = mRT' }, { ru: 'p = ρRT', uz: 'p = ρRT' }, { ru: 'V = νRT/p', uz: 'V = νRT/p' }], correctIndex: 0 },
        { id: 'gas-q2', difficulty: 1, question: { ru: 'Единица температуры в СИ:', uz: 'SI da harorat birligi:' }, options: [{ ru: 'Кельвин (K)', uz: 'Kelvin (K)' }, { ru: 'Градус Цельсия (°C)', uz: 'Selsiy darajasi (°C)' }, { ru: 'Джоуль (Дж)', uz: 'Joul (J)' }, { ru: 'Паскаль (Па)', uz: 'Paskal (Pa)' }], correctIndex: 0 },
        { id: 'gas-q3', difficulty: 2, question: { ru: 'Что такое абсолютный ноль?', uz: 'Absolyut nol nima?' }, options: [{ ru: '0 K (-273°C)', uz: '0 K (-273°C)' }, { ru: '0°C', uz: '0°C' }, { ru: '100°C', uz: '100°C' }, { ru: '-100°C', uz: '-100°C' }], correctIndex: 0 },
        { id: 'gas-q4', difficulty: 2, question: { ru: 'Изотермический процесс — это процесс при...', uz: 'Izotermik jarayon bu... jarayon' }, options: [{ ru: 'постоянной температуре', uz: 'doimiy haroratda' }, { ru: 'постоянном давлении', uz: 'doimiy bosimda' }, { ru: 'постоянном объёме', uz: 'doimiy hajmda' }, { ru: 'постоянной энергии', uz: 'doimiy energiyada' }], correctIndex: 0 },
        { id: 'gas-q5', difficulty: 3, question: { ru: 'Газ совершил работу 200 Дж и получил 500 Дж теплоты. На сколько изменилась внутренняя энергия?', uz: 'Gaz 200 J ish bajardi va 500 J issiqlik oldi. Ichki energiya qanchaga o\'zgardi?' }, options: [{ ru: '300 Дж', uz: '300 J' }, { ru: '700 Дж', uz: '700 J' }, { ru: '200 Дж', uz: '200 J' }, { ru: '-300 Дж', uz: '-300 J' }], correctIndex: 0 }
      ],
      simulationType: 'gas'
    },
    {
      id: 'heat-engines',
      moduleId: 'thermo',
      title: { ru: 'Тепловые двигатели', uz: 'Issiqlik dvigatellari' },
      summary: { ru: 'Преобразование теплоты в работу, КПД, циклы.', uz: 'Issiqlikni ishga aylantirish, FIK, sikllar.' },
      details: { ru: 'КПД теплового двигателя определяется отношением полезной работы к затраченной теплоте.', uz: 'Issiqlik dvigatelining FIK foydali ishning sarflangan issiqlikka nisbati bilan aniqlanadi.' },
      formulas: [
        { id: 'efficiency', latex: '\\eta = \\frac{A}{Q_1} = 1 - \\frac{Q_2}{Q_1}', description: { ru: 'КПД теплового двигателя', uz: 'Issiqlik dvigateli FIK' } }
      ],
      tasks: [
        { id: 'heat1', title: { ru: 'КПД двигателя', uz: 'Dvigatel FIK' }, description: { ru: 'Двигатель получает от нагревателя 1000 Дж, отдаёт холодильнику 700 Дж. Найдите КПД (%).', uz: 'Dvigatel isitgichdan 1000 J oladi, sovutgichga 700 J beradi. FIKni toping (%).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['efficiency'], answer: 30 },
        { id: 'heat2', title: { ru: 'Полезная работа', uz: 'Foydali ish' }, description: { ru: 'КПД 25%, получено 800 Дж теплоты. Найдите полезную работу (Дж).', uz: 'FIK 25%, 800 J issiqlik olingan. Foydali ishni toping (J).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['efficiency'], answer: 200 },
        { id: 'heat3', title: { ru: 'Отданная теплота', uz: 'Berilgan issiqlik' }, description: { ru: 'КПД 40%, получено 500 Дж. Сколько теплоты отдано холодильнику?', uz: 'FIK 40%, 500 J olingan. Sovutgichga qancha issiqlik berilgan?' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['efficiency'], answer: 300 },
        { id: 'heat4', title: { ru: 'КПД идеальной машины', uz: 'Ideal mashina FIK' }, description: { ru: 'Температура нагревателя 500 К, холодильника 300 К. Найдите КПД (%).', uz: 'Isitgich harorati 500 K, sovutgich 300 K. FIKni toping (%).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['efficiency'], answer: 40 },
        { id: 'heat5', title: { ru: 'Температура нагревателя', uz: 'Isitgich harorati' }, description: { ru: 'КПД 50%, температура холодильника 300 К. Найдите температуру нагревателя (К).', uz: 'FIK 50%, sovutgich harorati 300 K. Isitgich haroratini toping (K).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['efficiency'], answer: 600 },
        { id: 'heat6', title: { ru: 'Температура холодильника', uz: 'Sovutgich harorati' }, description: { ru: 'Температура нагревателя 600 К, КПД 30%. Найдите температуру холодильника (К).', uz: 'Isitgich harorati 600 K, FIK 30%. Sovutgich haroratini toping (K).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['efficiency'], answer: 420 },
        { id: 'heat7', title: { ru: 'Полученная теплота', uz: 'Olingan issiqlik' }, description: { ru: 'Двигатель совершил работу 150 Дж, КПД 30%. Сколько теплоты получено?', uz: 'Dvigatel 150 J ish bajardi, FIK 30%. Qancha issiqlik olingan?' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['efficiency'], answer: 500 },
        { id: 'heat8', title: { ru: 'КПД через работу и теплоту', uz: 'Ish va issiqlik orqali FIK' }, description: { ru: 'Полезная работа 300 Дж, отдано 700 Дж. Найдите КПД (%).', uz: 'Foydali ish 300 J, 700 J berilgan. FIKni toping (%).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['efficiency'], answer: 30 },
        { id: 'heat9', title: { ru: 'Максимальный КПД', uz: 'Maksimal FIK' }, description: { ru: 'Температура нагревателя 1000 К, холодильника 250 К. Найдите максимальный КПД (%).', uz: 'Isitgich harorati 1000 K, sovutgich 250 K. Maksimal FIKni toping (%).' }, difficulty: 2, xpReward: 40, coinReward: 6, formulas: ['efficiency'], answer: 75 },
        { id: 'heat10', title: { ru: 'Температура холодильника при КПД', uz: 'FIK bo\'yicha sovutgich harorati' }, description: { ru: 'Температура нагревателя 800 К, КПД 60%. Найдите температуру холодильника (К).', uz: 'Isitgich harorati 800 K, FIK 60%. Sovutgich haroratini toping (K).' }, difficulty: 3, xpReward: 55, coinReward: 8, formulas: ['efficiency'], answer: 320 }
      ],
      quiz: [
        { id: 'heat-q1', difficulty: 2, question: { ru: 'Формула КПД теплового двигателя:', uz: 'Issiqlik dvigateli FIK formulasi:' }, options: [{ ru: 'η = 1 - Q₂/Q₁', uz: 'η = 1 - Q₂/Q₁' }, { ru: 'η = Q₂/Q₁', uz: 'η = Q₂/Q₁' }, { ru: 'η = Q₁/Q₂', uz: 'η = Q₁/Q₂' }, { ru: 'η = 1 + Q₂/Q₁', uz: 'η = 1 + Q₂/Q₁' }], correctIndex: 0 }
      ]
    }
  ]
};
