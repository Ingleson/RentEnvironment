import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { userRoutes } from "./routes/users.routes";
import { categoryRoutes } from "./routes/categories.routes";
import { propertyRoutes } from "./routes/properties.routes";
import { schedulesRoutes } from "./routes/schedules.routes";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use('/categories', categoryRoutes);
app.use('/properties', propertyRoutes);
app.use('/schedules', schedulesRoutes);

app.use(handleErrorMiddleware)

export default app;