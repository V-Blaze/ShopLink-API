import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("shops", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable().unique();
    table.string("location").notNullable();
    table.string("status").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("shops");
}
