import { Request, Response } from "express";
import { listPropertiesService } from "../../services/properties/listProperties.service";

export const listPropertiesController = async (req: Request, res: Response) => {
  const properties = await listPropertiesService();

  return res.json(properties);
};