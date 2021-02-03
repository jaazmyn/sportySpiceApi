import dotenv from "dotenv";
dotenv.config();
import { Pool } from "pg";

const { DBUSER, DBHOST, DBNAME, DBPASS, DBPORT } = process.env;

const pool = new Pool({
  user: DBUSER,
  host: DBHOST,
  database: DBNAME,
  password: DBPASS,
  port: DBPORT,
});

const db = {
  query: (text, params) => {
    return pool.query(text, params);
  },
};

export default db;
