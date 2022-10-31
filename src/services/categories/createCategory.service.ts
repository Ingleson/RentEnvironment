import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.entity"
import { AppError } from "../../errors/appError";
import { ICategoryRequest } from "../../interfaces/categories"

export const createCategoryService = async ({name}: ICategoryRequest): Promise<Categories> => {

  const categoryRepository = AppDataSource.getRepository(Categories);
  const findCategory = await categoryRepository.findOneBy({name});

  if(findCategory){
    throw new AppError("Category Already Exists", 400);
  };

  const category = categoryRepository.create({
    name
  });

  await categoryRepository.save(category);

  return category;
};