import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("shop_products", (table) => {
    table.increments("id").primary();
    table
      .integer("shop_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("shops")
      .onDelete("CASCADE");
    table
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
    table.unique(["shop_id", "product_id"]);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("shop_products");
}
