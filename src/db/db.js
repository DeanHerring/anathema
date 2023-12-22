import mysql from 'mysql2';

export const db = await mysql
  .createPool({
    host: 'localhost',
    user: 'root',
    database: 'casino',
  })
  .promise();
