import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";

export const listPropertiesService = async (): Promise<Properties[]> => {
  const propertyRepository = AppDataSource.getRepository(Properties);

  const properties = await propertyRepository.find();

  return properties;
};