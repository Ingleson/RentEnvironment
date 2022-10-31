import { Router } from "express";
import { allPropertiesByCategoryController } from "../controllers/categories/allPropertiesByCategory.controller";

import { createCategoryController } from "../controllers/categories/createCategory.controller";
import { listCategoriesController } from "../controllers/categories/listCategories.controller";

import { authUserMiddleware } from "../middlewares/authUser.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";
import { userExistsMiddleware } from "../middlewares/userExists.middleware";

export const categoryRoutes = Router();

categoryRoutes.post('', userExistsMiddleware, authUserMiddleware, isAdmMiddleware, createCategoryController);
categoryRoutes.get('', listCategoriesController);
categoryRoutes.get('/:id/properties', allPropertiesByCategoryController)