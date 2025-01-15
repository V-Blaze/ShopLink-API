import knex from "../utils/db";

export const getAllProductsAndShops = async () => {
  return knex("products")
    .select("products.name as productName", "shops.name as shopName")
    .join("shop_products", "products.id", "shop_products.product_id")
    .join("shops", "shops.id", "shop_products.shop_id");
};

export const checkShopExists = async (shopId: number) => {
  const shop = await knex("shops").where("id", shopId).first();
  return !!shop;
};

export const addProductToShop = async (
  name: string,
  price: number,
  shopId: number
) => {
  const [productId] = await knex("products")
    .insert({ name, price })
    .returning("id");
  await knex("shop_products").insert({
    shop_id: shopId,
    product_id: productId,
  });
  return { id: productId, name, price, shopId };
};
