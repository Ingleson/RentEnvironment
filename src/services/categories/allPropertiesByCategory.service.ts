import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

export const allPropertiesByCategoryService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const findCategory = await categoryRepository.findOne({
    where: {
      id
    }, relations: {
      properties: true
    }
  });

  if(!findCategory) {
    throw new AppError('Category not found', 404)
  }

  return findCategory;
}