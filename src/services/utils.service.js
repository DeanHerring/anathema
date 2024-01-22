import { currency } from '../config/config.js';
import { UtilsRepository } from '../repositories/utils.repository.js';

const convertToUSD = (value, ticker) => {
  return Number(value * currency[ticker].quot);
};

export const UtilsService = {
  convertToUSD,
};
