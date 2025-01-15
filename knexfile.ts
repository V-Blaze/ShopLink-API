import { Knex } from "knex";
import dotenv from "dotenv";
import path from "path";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

dotenv.config();

const knexConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, "./src/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "./src/seeds"),
    },
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
