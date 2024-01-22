import { UtilsRepository } from '../repositories/utils.repository.js';
import { UtilsService } from '../services/utils.service.js';
import { config } from '../config/config.js';

import sampleSize from 'lodash.samplesize';
import range from 'lodash.range';

const createGame = async (data) => {
  /**
   * 1. Перевірка, чи існує гравець з таким id у БД
   * 2. Конвертація валюти у USD
   * 3. Чи достатньо коштів на балансі у гравця / Чи вища сумма за мінімально допустиму
   * 4. Генерація гри
   * 5. Результати гри
   * 6. Відповідь сервера
   */

  const { playerId, amount, ticker, activeCells } = data;
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
  const cells = range(1, 41);

  try {
    const usdAmount = UtilsService.convertToUSD(amount, ticker);

    if (usdAmount < config.USD_MIN_LIMIT || usdAmount > config.USD_MAX_LIMIT) {
      throw new Error('Ставка не повинна бути меншою за $10 та перевищувати $50 000');
    }

    const playerBalance = await UtilsRepository.getBalance(playerId, ticker);

    if (!playerBalance.length) {
      throw new Error('Такого користувача не існує.');
    }

    const usdPlayerBalance = UtilsService.convertToUSD(playerBalance[0].amount, ticker);

    if (usdPlayerBalance <= usdAmount) {
      throw new Error('В тебе немає грошей.');
    }

    // Всі перевірки пройдені, час генерувати гру
    const winCells = sampleSize(cells, activeCells.length);
    const equalCells = activeCells.filter((i) => winCells.includes(i.id));
    const multiplier = rewards[equalCells.length];
    const win = amount * multiplier;
    const usdWin = UtilsService.convertToUSD(win, ticker);

    return { winCells, multiplier, win, usdWin };
  } catch (e) {
    return { ok: false, error: e.message };
  }
};

export const KenoService = {
  createGame,
};
