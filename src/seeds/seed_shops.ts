import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("shops").del();
  const shops = await knex("shops")
    .insert([
      { name: "Shop A", location: "Lagos", status: "active" },
      { name: "Shop B", location: "Abj", status: "suspended" },
    ])
    .returning("id");

  await knex("products").del();

  const products = await knex("products")
    .insert([
      { name: "Macbook Pro", price: 500.0 },
      { name: "HP Elitebook", price: 200.0 },
    ])
    .returning("id");

  await knex("shop_products").insert([
    { shop_id: shops[0].id, product_id: products[0].id },
    { shop_id: shops[1].id, product_id: products[1].id },
  ]);
}
