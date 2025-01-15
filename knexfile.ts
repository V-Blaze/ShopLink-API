/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    useNullAsDefault: true,
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default knexConfig;
