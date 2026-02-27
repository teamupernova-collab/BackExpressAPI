import { Request, Response } from "express";
import { UserSchemaVali } from "../models/user";
import User from "../models/user";
import bcrypt from "bcryptjs";

class userController {
  addUser = async (req: Request, res: Response) => {
    const { error } = UserSchemaVali.validate(req.body);

    if (error) {
      res.send(error.message);
      return;
    }

    try {
      const { username, password, personId } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        personId,
        password: hashedPassword,
      });

      const UserOb = newUser.toObject();
      const { password: _, _id, ...UserRes } = UserOb;

      res.status(201).send(UserRes);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({
          code: "INTERNAL_SERVER_ERROR",
          msg: "An error occurred while creating the user.",
        });
    }
  };

  getUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.find().select("-password");
      res.send(users);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({
          code: "INTERNAL_SERVER_ERROR",
          msg: "An error occurred while fetching users.",
        });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const user = await User.findById(id).select("-password");
      if (!user) {
        res.send({ code: "NOT_FOUND", msg: "user not found" });
        return;
      }
      res.send(user);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({
          code: "INTERNAL_SERVER_ERROR",
          msg: "An error occurred while fetching the user.",
        });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const userU = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      }).select("-password");
      if (!userU) {
        res.send({ code: "NOT_FOUND", msg: "user not found" });
      }
      res.send(userU);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({
          code: "INTERNAL_SERVER_ERROR",
          msg: "An error occurred while updating the user.",
        });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const userD = await User.findByIdAndDelete(id);
      if (!userD) {
        res.send({ code: "NOT_FOUND", msg: "user not found" });
      }
      res.send({ code: "COMPLETED", msg: "user deleted" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({
          code: "INTERNAL_SERVER_ERROR",
          msg: "An error occurred while deleting the user.",
        });
    }
  };
}

export const userControllers = new userController();
