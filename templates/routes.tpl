import { Router} from "express";
import {{Name}}Controller from "./{{name}}.controller";
import { buildRoute } from "../../utils/routeBuilder";
import { create{{Name}}Schema, update{{Name}}Schema, {{name}}DbSchema } from "./{{name}}.schema";
import { z } from "../../config/zod";

const router = Router();
const basePath = "/api/{{name}}s";

// CREATE
buildRoute(router, {
  method: "post",
  path: basePath,
  schema: create{{Name}}Schema,
  response: {{name}}DbSchema,
  handler: {{Name}}Controller.add{{Name}},
  tag: "{{Name}}s",
});

// GET ALL
buildRoute(router, {
  method: "get",
  path: basePath,
  response: {{name}}DbSchema.array(),
  handler: {{Name}}Controller.get{{Name}}s,
  tag: "{{Name}}s",
});

// GET BY ID
buildRoute(router, {
  method: "get",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  response: {{name}}DbSchema,
  handler: {{Name}}Controller.get{{Name}}ById,
  tag: "{{Name}}s",
});

// UPDATE
buildRoute(router, {
  method: "put",
  path: `${basePath}/{id}`,
  schema: update{{Name}}Schema,
  params: z.object({ id: z.string() }),
  response: {{name}}DbSchema,
  handler: {{Name}}Controller.update{{Name}},
  tag: "{{Name}}s",
});

// DELETE
buildRoute(router, {
  method: "delete",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  handler: {{Name}}Controller.delete{{Name}},
  tag: "{{Name}}s",
});

export default router;
