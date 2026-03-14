import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { UserService } from "./user.services";
import { createUserSchema } from "./user.schema";
import { CreateUserDTO, UpdateUserDTO } from "./user.types";
import { asyncHandler } from "../../utils/asyncHandler";

class UserController {

  addUser = asyncHandler(async (req: Request, res: Response) => {

    const { error } = createUserSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        code: "VALIDATION_ERROR",
        msg: error.message
      });
    }

    const { username, password, personId } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const data: CreateUserDTO = {
      username,
      password: hashedPassword,
      personId
    };

    const user = await UserService.createUser(data);

    const userObj = user.toObject();
    const { password: _, ...userRes } = userObj;

    res.status(201).json(userRes);

  });

  getUsers = asyncHandler(async (_req: Request, res: Response) => {

    const users = await UserService.getAll();

    res.json(users);

  });

  getUserById = asyncHandler(async (req: Request, res: Response) => {

    const id = req.params.id;

    const user = await UserService.getById(id);

    if (!user) {
      return res.status(404).json({
        code: "NOT_FOUND",
        msg: "User not found"
      });
    }

    res.json(user);

  });

  updateUser = asyncHandler(async (req: Request, res: Response) => {

    const id = req.params.id;

    const data: UpdateUserDTO = req.body;

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const user = await UserService.update(id, data);

    if (!user) {
      return res.status(404).json({
        code: "NOT_FOUND",
        msg: "User not found"
      });
    }

    res.json(user);

  });

  deleteUser = asyncHandler(async (req: Request, res: Response) => {

    const id = req.params.id;

    const user = await UserService.delete(id);

    if (!user) {
      return res.status(404).json({
        code: "NOT_FOUND",
        msg: "User not found"
      });
    }

    res.json({
      code: "COMPLETED",
      msg: "User deleted"
    });

  });

}

export default new UserController();