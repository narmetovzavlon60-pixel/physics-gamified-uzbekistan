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
      details: { ru: 'Идеальный газ — модель, в которой частицы не взаимодействуют.', uz: 'Ideal gaz — zarralar o\'zaro ta\'sirlashmaydigan model.' },
      formulas: [
        { id: 'pV', latex: 'pV = \\nu RT', description: { ru: 'Уравнение состояния', uz: 'Holat tenglamasi' } },
        { id: 'U', latex: 'U = \\frac{3}{2}\\nu RT', description: { ru: 'Внутренняя энергия', uz: 'Ichki energiya' } },
        { id: 'Q', latex: 'Q = cm\\Delta T', description: { ru: 'Количество теплоты', uz: 'Issiqlik miqdori' } }
      ],
      tasks: [
        { id: 'gas1', title: { ru: 'Давление газа', uz: 'Gaz bosimi' }, description: { ru: 'Найдите давление 1 моль идеального газа при объёме 22.4 л (0.0224 м³) и температуре 273 К.', uz: '1 mol ideal gazning 22.4 L (0.0224 m³) hajm va 273 K haroratdagi bosimini toping.' }, difficulty: 2, xpReward: 50, coinReward: 8, formulas: ['pV'], answer: 101300 },
        { id: 'gas2', title: { ru: 'Внутренняя энергия', uz: 'Ichki energiya' }, description: { ru: 'Найдите внутреннюю энергию 2 моль одноатомного газа при 300 К.', uz: '300 K da 2 mol bir atomli gazning ichki energiyasini toping.' }, difficulty: 3, xpReward: 60, coinReward: 9, formulas: ['U'], answer: 7479 },
        { id: 'gas3', title: { ru: 'Нагрев воды', uz: 'Suvni isitish' }, description: { ru: 'Сколько теплоты нужно, чтобы нагреть 2 кг воды на 10°C? (c = 4200 Дж/(кг·°C))', uz: '2 kg suvni 10°C ga isitish uchun qancha issiqlik kerak? (c = 4200 J/(kg·°C))' }, difficulty: 2, xpReward: 55, coinReward: 8, formulas: ['Q'], answer: 84000 }
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
        { id: 'heat1', title: { ru: 'КПД двигателя', uz: 'Dvigatel FIK' }, description: { ru: 'Двигатель получает от нагревателя 1000 Дж, а отдаёт холодильнику 700 Дж. Найдите КПД (%).', uz: 'Dvigatel isitgichdan 1000 J oladi va sovutgichga 700 J beradi. FIKni toping (%).' }, difficulty: 2, xpReward: 50, coinReward: 8, formulas: ['efficiency'], answer: 30 }
      ],
      quiz: [
        { id: 'heat-q1', difficulty: 2, question: { ru: 'Формула КПД теплового двигателя:', uz: 'Issiqlik dvigateli FIK formulasi:' }, options: [{ ru: 'η = 1 - Q₂/Q₁', uz: 'η = 1 - Q₂/Q₁' }, { ru: 'η = Q₂/Q₁', uz: 'η = Q₂/Q₁' }, { ru: 'η = Q₁/Q₂', uz: 'η = Q₁/Q₂' }, { ru: 'η = 1 + Q₂/Q₁', uz: 'η = 1 + Q₂/Q₁' }], correctIndex: 0 }
      ]
    }
  ]
};
