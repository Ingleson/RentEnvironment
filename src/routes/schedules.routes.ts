import { Router } from "express";
import { allSchedulesByPropertyController } from "../controllers/schedules/allSchedulesByProperty.controller";
import { createScheduleController } from "../controllers/schedules/createSchedule.controller";
import { authUserMiddleware } from "../middlewares/authUser.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";
import { userExistsMiddleware } from "../middlewares/userExists.middleware";

export const schedulesRoutes = Router();

schedulesRoutes.post('', userExistsMiddleware, authUserMiddleware, createScheduleController);
schedulesRoutes.get('/properties/:id',authUserMiddleware, isAdmMiddleware, allSchedulesByPropertyController);