import { db } from '../db/db.js';

const getUser = async (userID) => {
  const sql = `SELECT * FROM wallets WHERE user_id = ?`;
  const [rows] = await db.query(sql, [userID]);

  return rows;
};

export const UserRepository = {
  getUser,
};
