import express, { Application } from "express";
import productsRoutes from "./routes/productRoutes";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use("/api/", productsRoutes);

export default app;
