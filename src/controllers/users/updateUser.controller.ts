import { Request, Response} from "express";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import { updateUserService } from "../../services/users/updateUser.service";

export const updateUserController = async (req: Request, res: Response) => {
  
  try {
    const user:IUserUpdate = req.body;
    const id:string = req.params.id;
  
    const updatedUser = await updateUserService(user, id);
  
    if(updatedUser instanceof User) {
      return res.json({message: "User updated"});
    }
    
    return res.status(updatedUser[1] as number).json({message: updatedUser[0]});

  } catch (error) {
    if(error instanceof Error) {
      return res.status(400).json({
        message: error.message
      });
    };
  };
};