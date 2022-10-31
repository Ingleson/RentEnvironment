import { Router } from "express";
import { createPropertyController } from "../controllers/properties/createProperty.controller";
import { listPropertiesController } from "../controllers/properties/listProperties.controller";
import { authUserMiddleware } from "../middlewares/authUser.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";
import { userExistsMiddleware } from "../middlewares/userExists.middleware";

export const propertyRoutes = Router();

propertyRoutes.post('', userExistsMiddleware, authUserMiddleware, isAdmMiddleware, createPropertyController);
propertyRoutes.get('', listPropertiesController);