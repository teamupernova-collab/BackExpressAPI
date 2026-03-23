import { Router} from "express";
import { buildRoute } from "../../utils/routeBuilder";
import { z } from "../../config/zod";
import PersonController from "./person.controller";
import { createPersonSchema, updatePersonSchema, personDbSchema } from "./person.schema";


const router = Router();
const basePath = "/api/person";

// CREATE
buildRoute(router, {
  method: "post",
  path: basePath,
  schema: createPersonSchema,
  response: personDbSchema,
  handler: PersonController.addPerson,
  tag: "Person",
});

// GET ALL
buildRoute(router, {
  method: "get",
  path: basePath,
  response: personDbSchema.array(),
  handler: PersonController.getPersons,
  tag: "Person",
});

// GET BY ID
buildRoute(router, {
  method: "get",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  response: personDbSchema,
  handler: PersonController.getPersonById,
  tag: "Person",
});

// UPDATE
buildRoute(router, {
  method: "put",
  path: `${basePath}/{id}`,
  schema: updatePersonSchema,
  params: z.object({ id: z.string() }),
  response: personDbSchema,
  handler: PersonController.updatePerson,
  tag: "Person",
});

// DELETE
buildRoute(router, {
  method: "delete",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  handler: PersonController.deletePerson,
  tag: "Person",
});

export default router;
