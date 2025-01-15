import { Request, Response, NextFunction } from "express";
import * as productModel from "../models/productModel";

export const getProductsAndShops = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await productModel.getAllProductsAndShops();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const storeProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, price, shopId } = req.body;

    if (!name || !price || !shopId) {
      res.status(400).json({ message: "All fields are required." });
      return;
    }

    /* Validate if the shop exists */
    const shopExists = await productModel.checkShopExists(shopId);
    if (!shopExists) {
      res.status(404).json({ message: "Shop not found." });
      return;
    }

    const newProduct = await productModel.addProductToShop(name, price, shopId);
    res
      .status(201)
      .json({ message: "Product added successfully.", newProduct });
  } catch (error) {
    next(error);
  }
};
