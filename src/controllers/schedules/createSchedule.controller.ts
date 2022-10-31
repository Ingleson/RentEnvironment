import { Request, Response } from "express";
import { createScheduleService } from "../../services/schedules/createSchedule.service";

export const createScheduleController = async (req: Request, res: Response) => {
  const {date, hour, propertyId} = req.body;
  const userId = req.user.id;

  const createdSchedule = await createScheduleService({date, hour, propertyId, userId});

  return res.status(201).json(createdSchedule);
};