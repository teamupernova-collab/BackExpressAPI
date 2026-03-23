import { Router} from "express";
import { buildRoute } from "../../utils/routeBuilder";
import { z } from "../../config/zod";
import ClientController from "./client.controller";
import { createClientSchema, updateClientSchema, clientDbSchema } from "./client.schema"

const router = Router();
const basePath = "/api/client";

// CREATE
buildRoute(router, {
  method: "post",
  path: basePath,
  schema: createClientSchema,
  response: clientDbSchema,
  handler: ClientController.addClient,
  tag: "Client",
});

// GET ALL
buildRoute(router, {
  method: "get",
  path: basePath,
  response: clientDbSchema.array(),
  handler: ClientController.getClients,
  tag: "Client",
});

// GET BY ID
buildRoute(router, {
  method: "get",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  response: clientDbSchema,
  handler: ClientController.getClientById,
  tag: "Client",
});

// UPDATE
buildRoute(router, {
  method: "put",
  path: `${basePath}/{id}`,
  schema: updateClientSchema,
  params: z.object({ id: z.string() }),
  response: clientDbSchema,
  handler: ClientController.updateClient,
  tag: "Client",
});

// DELETE
buildRoute(router, {
  method: "delete",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  handler: ClientController.deleteClient,
  tag: "Client",
});

export default router;
