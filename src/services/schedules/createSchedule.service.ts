import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity";
import { SchedulesUserProperties } from "../../entities/schedules_user_properties.entity"
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules"

export const createScheduleService = async ({date, hour, propertyId, userId}: IScheduleRequest): Promise<IScheduleRequest | any> => {

  const scheduleRepository = AppDataSource.getRepository(SchedulesUserProperties);
  const userRepository = AppDataSource.getRepository(User);
  const propertyRepository = AppDataSource.getRepository(Properties)

  const findUser = await userRepository.findOneBy({id: userId});

  if(!findUser) {
    throw new AppError("User not found", 404);
  };

  const findProperty = await propertyRepository.findOneBy({id: propertyId});
  
  if(!findProperty) {
    throw new AppError('Property not found', 404)
  }

  const scheduleDate = new Date(`${date} ${hour}`)
  const workingDays = scheduleDate.getDay();
  const businessHours = scheduleDate.getHours();
  const businessMinutes = scheduleDate.getMinutes();

  if(businessHours < 8 || (businessHours > 17 && businessMinutes < 59)){
    throw new AppError('Only during business hours')
  }

  if(workingDays === 0 || (workingDays === 6 )) {
    throw new AppError('Only on working days')
  }

  const findSchedule = await scheduleRepository.findOneBy({date, hour});

  if(findSchedule) {
    throw new AppError("Schedule Already Exists")
  }

  const schedule = scheduleRepository.create({
    date,
    hour,
    property: {id: propertyId},
    user: {id: userId}
  })

  await scheduleRepository.save(schedule)

  return {message: 'Schedule created'};
};