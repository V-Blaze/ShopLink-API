import express, { Application, ErrorRequestHandler } from "express";
import productsRoutes from "./routes/productRoutes";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";

const app: Application = express();

app.use(express.json());

app.use(cors());
app.use("/api/", productsRoutes);

app.use(errorHandler as ErrorRequestHandler);

export default app;
