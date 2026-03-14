import { Request, Response } from "express";
import { AuthService } from "./auth.services";
import { loginSchema, registerSchema } from "./auth.schema";
import { asyncHandler } from "../../utils/asyncHandler";

class AuthController {

  login = asyncHandler(async (req: Request, res: Response) => {

    const { error } = loginSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        code: "INVALID",
        msg: error.message
      });
    }

    const { token, user } = await AuthService.login(req.body);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400000
    });

    res.json({ token, user });

  });

  logout = asyncHandler(async (_req: Request, res: Response) => {

    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.json({
      code: "LOGOUT",
      msg: "Logged out successfully"
    });

  });

  checkToken = asyncHandler(async (req: Request, res: Response) => {

    const result = await AuthService.checkToken(req.cookies.token);

    res.json(result);

  });

  register = asyncHandler(async (req: Request, res: Response) => {

    const { error } = registerSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        code: "INVALID",
        msg: error.message
      });
    }

    const user = await AuthService.register(req.body);

    res.status(201).json({
      message: "Usuario creado correctamente",
      userId: user._id
    });

  });

}

export default new AuthController();