import { Router, Request, Response } from "express";
import {
  getProductsAndShops,
  storeProduct,
} from "../controllers/productController";
const router = Router();

router.get("/ping", (req: Request, res: Response) => {
  res.status(200).json({ message: "Pong!" });
});

router.get("/products-and-shops", getProductsAndShops);
router.post("/store-product", storeProduct);

export default router;
