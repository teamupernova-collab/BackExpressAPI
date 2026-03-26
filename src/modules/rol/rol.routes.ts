import { Router} from "express";
import { buildRoute } from "../../utils/routeBuilder";
import { z } from "../../config/zod";
import RolController from "./rol.controller";
import { createRolSchema, updateRolSchema, rolDbSchema } from "./rol.schema"

const router = Router();
const basePath = "/api/rol";

// CREATE
buildRoute(router, {
  method: "post",
  path: basePath,
  schema: createRolSchema,
  response: rolDbSchema,
  handler: RolController.addRol,
  tag: "Rol",
});

// GET ALL
buildRoute(router, {
  method: "get",
  path: basePath,
  response: rolDbSchema.array(),
  handler: RolController.getRols,
  tag: "Rol",
});

// GET BY ID
buildRoute(router, {
  method: "get",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  response: rolDbSchema,
  handler: RolController.getRolById,
  tag: "Rol",
});

// UPDATE
buildRoute(router, {
  method: "put",
  path: `${basePath}/{id}`,
  schema: updateRolSchema,
  params: z.object({ id: z.string() }),
  response: rolDbSchema,
  handler: RolController.updateRol,
  tag: "Rol",
});

// DELETE
buildRoute(router, {
  method: "delete",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  handler: RolController.deleteRol,
  tag: "Rol",
});

export default router;
