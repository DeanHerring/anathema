import { db } from '../db/db.js';

const isExistPlayer = async (playerId) => {
  const sql = `SELECT * FROM users WHERE id = ?`;
  const [rows] = await db.query(sql, [playerId]);

  return rows.length === 1;
};

const getBalance = async (playerId, ticker) => {
  const sql = `SELECT amount FROM wallets WHERE user_id = ? AND ticker = ?`;
  const [rows] = await db.query(sql, [playerId, ticker]);

  return rows;
};

export const UtilsRepository = {
  isExistPlayer,
  getBalance,
};
