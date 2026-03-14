import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { PersonService } from "../persons/person.services";
import { UserService } from "../users/user.services";
import { RegisterDTO, LoginDTO } from "./auth.types";

const JWT_SECRET = process.env.JWT_SECRET || "";

export class AuthService {

  static async register(data: RegisterDTO) {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {

      const { name, lastname, username, password } = data;

      const existingUser = await UserService.getByUserName(username);

      if (existingUser) {
        throw new Error("Username already exists");
      }

      const person = await PersonService.createPerson(
        { name, lastname },
        session
      );

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await UserService.createUser(
        {
          username,
          password: hashedPassword,
          personId: person._id.toString()
        },
        session
      );

      await session.commitTransaction();
      session.endSession();

      return user;

    } catch (error) {

      await session.abortTransaction();
      session.endSession();

      throw error;
    }
  }

  static async login(data: LoginDTO) {

    const { username, password } = data;

    const user = await UserService.getByUserName(username);

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user._id },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    const userObj = user.toObject();
    const { password: _, ...userRes } = userObj;

    return {
      token,
      user: userRes
    };
  }

  static async checkToken(token: string) {

    if (!token) {
      return { authenticated: false };
    }

    try {

      const decoded: any = jwt.verify(token, JWT_SECRET);

      const user = await UserService.getById(decoded.id);

      if (!user) {
        return { authenticated: false };
      }

      const userObj = user.toObject();
      const { password: _, ...userRes } = userObj;

      return {
        authenticated: true,
        user: userRes
      };

    } catch {
      return { authenticated: false };
    }

  }

}