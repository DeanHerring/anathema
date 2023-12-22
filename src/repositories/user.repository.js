import { db } from '../db/db.js';

const getUser = async (userID) => {
  const sql = `SELECT * FROM wallets WHERE user_id = ${userID}`;
  const [rows] = await db.query(sql);

  return rows;
};

export const UserRepository = {
  getUser,
};
