import { Pool } from 'pg';
import { databaseConfig } from '../../configs';

const pool = new Pool(databaseConfig);

export async function selectAll(sql, args) {
  return ((await pool.query) < T > (sql, args)).rows;
}
