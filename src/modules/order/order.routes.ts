import { Router} from "express";
import { buildRoute } from "../../utils/routeBuilder";
import { z } from "../../config/zod";
import OrderController from "./order.controller";
import { createOrderSchema, updateOrderSchema, orderDbSchema } from "./order.schema"

const router = Router();
const basePath = "/api/order";


// CREATE
buildRoute(router, {
  method: "post",
  path: basePath,
  schema: createOrderSchema,
  response: orderDbSchema,
  handler: OrderController.addOrder,
  tag: "Order",
});

// GET ALL
buildRoute(router, {
  method: "get",
  path: basePath,
  response: orderDbSchema.array(),
  handler: OrderController.getOrders,
  tag: "Order",
});

// GET BY ID
buildRoute(router, {
  method: "get",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  response: orderDbSchema,
  handler: OrderController.getOrderById,
  tag: "Order",
});

// UPDATE
buildRoute(router, {
  method: "put",
  path: `${basePath}/{id}`,
  schema: updateOrderSchema,
  params: z.object({ id: z.string() }),
  response: orderDbSchema,
  handler: OrderController.updateOrder,
  tag: "Order",
});

// DELETE
buildRoute(router, {
  method: "delete",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  handler: OrderController.deleteOrder,
  tag: "Order",
});

export default router;
