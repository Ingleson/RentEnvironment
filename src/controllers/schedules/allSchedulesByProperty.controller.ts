import { Request, Response } from "express";
import { allSchedulesByPropertyService } from "../../services/schedules/allSchedulesByProperty.service";

export const allSchedulesByPropertyController = async (req: Request, res: Response) => {
  const propertyId = req.params.id;

  const schedulesProperty = await allSchedulesByPropertyService(propertyId);

  return res.json(schedulesProperty);
};