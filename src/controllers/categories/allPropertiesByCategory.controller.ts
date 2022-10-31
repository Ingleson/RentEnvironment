import { Request, Response } from "express";
import { allPropertiesByCategoryService } from "../../services/categories/allPropertiesByCategory.service";

export const allPropertiesByCategoryController = async (req: Request, res: Response) => {
  const categoryId = req.params.id;

  const propertiesCategory = await allPropertiesByCategoryService(categoryId);

  return res.json(propertiesCategory);
};