import { Router} from "express";
import { buildRoute } from "../../utils/routeBuilder";
import { z } from "../../config/zod";
import UserController from "./user.controller";
import { createUserSchema, updateUserSchema, userDbSchema } from "./user.schema"
//import { authMiddleware, authRoles  } from "../middleware/auth";
//TODO: agregar authMiddleware y authRoles a las rutas que lo requieran

const router = Router();
const basePath = "/api/user";

// CREATE
buildRoute(router, {
  method: "post",
  path: basePath,
  schema: createUserSchema,
  response: userDbSchema,
  handler: UserController.addUser,
  tag: "User",
});

// GET ALL
buildRoute(router, {
  method: "get",
  path: basePath,
  response: userDbSchema.array(),
  handler: UserController.getUsers,
  tag: "User",
});

// GET BY ID
buildRoute(router, {
  method: "get",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  response: userDbSchema,
  handler: UserController.getUserById,
  tag: "User",
});

// UPDATE
buildRoute(router, {
  method: "put",
  path: `${basePath}/{id}`,
  schema: updateUserSchema,
  params: z.object({ id: z.string() }),
  response: userDbSchema,
  handler: UserController.updateUser,
  tag: "User",
});

// DELETE
buildRoute(router, {
  method: "delete",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  handler: UserController.deleteUser,
  tag: "User",
});


export default router;