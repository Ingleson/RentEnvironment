import AppDataSource from "../../data-source"
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity"
import { AppError } from "../../errors/appError";
import {IPropertyRequest} from "../../interfaces/properties"

export const createPropertyService = async ({value, size, address, categoryId}: IPropertyRequest): Promise<IPropertyRequest | any> => {

  const propertyRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const categoryRepository = AppDataSource.getRepository(Categories);
  
  const findAddress = await addressRepository.findOneBy({district: address.district});
  const findCategory = await categoryRepository.findOneBy({id: categoryId});

  if(!findCategory) {
    throw new AppError('Category not found', 404);
  };

  if(findAddress) {
    throw new AppError("Address already exists");
  };
  
  const newAddress = addressRepository.create({
    district: address.district,
    city: address.city,
    number: address.number,
    state: address.state,
    zipCode: address.zipCode
  });

  const addressCreated = await addressRepository.save(newAddress);

  const property = propertyRepository.create({
    value,
    size,
    address: addressCreated,
    category: findCategory
  });

  await propertyRepository.save(property);

  return property;
};