/**
 * Завдання:
 *
 * Є ігрове поле з клітинками від 1 до 40.
 * Гравець обирає будь яку кількість клітинок від 1 до 10
 * Гра автоматично генерує виграшні клітинки
 * Якщо виграшні клітинкі співпадають з клітинками, які обрав гравець,
 * то він отримує винагороду відповідно таблиці коефіцієнтів.
 *
 * Таблиця коефіцієнтів
 * (Кількість виграшних клітинок / коефіцієнт множення)
 *
 * 1 - 0.00x
 * 2 - 0.00x
 * 3 - 0.00x
 * 4 - 0.00x
 * 5 - 4.00x
 * 6 - 11.00x
 * 7 - 56.00x
 * 8 - 500.00x
 * 9 - 800.00x
 * 10 - 1 000.00x
 */

import range from 'lodash.range';
import sampleSize from 'lodash.samplesize';

const rewards = {
  0: 0.0,
  1: 0.0,
  2: 0.0,
  3: 0.0,
  4: 3.5,
  5: 8.0,
  6: 13.0,
  7: 63.0,
  8: 500.0,
  9: 800.0,
  10: 1000.0,
};

const gameConfig = {
  userId: 3,
  selectedUnits: [1, 10, 22, 23, 26, 28, 32, 33, 34, 38],
  amount: 100,
};
const units = range(1, 41);

const createGame = (config) => {
  const prizeUnits = sampleSize(units, config.selectedUnits.length);
  const equalUnits = config.selectedUnits.filter((unit) => prizeUnits.includes(unit));
  const multiplier = rewards[equalUnits.length];
  const prize = config.amount * multiplier;

  return { prizeUnits, equalUnits, multiplier, prize };
};

const game = createGame(gameConfig);

console.log(game);
