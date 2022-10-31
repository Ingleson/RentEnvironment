import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

export const allSchedulesByPropertyService = async (id: string) => {
  const propertyRepository = AppDataSource.getRepository(Properties);

  const findSchedules = await propertyRepository.findOne({
    where: {
      id
    }, relations: {
      schedules: true
    }
  });
  

  if(!findSchedules) {
    throw new AppError("PropertyId not found", 404)
  }

  return findSchedules;
}