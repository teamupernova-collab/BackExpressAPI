import { Request, Response } from "express";
import { OrderService } from "./order.services";
import { CreateOrderSchema } from "./order.schema";
import { CreateOrderDTO, UpdateOrderDTO } from "./order.types"
import { asyncHandler } from "../../utils/asyncHandler"; 

class OrderController {
  addOrder = asyncHandler(async (req: Request, res: Response) => {
      const { error } = CreateOrderSchema.validate(req.body);

      if (error) {
        return res.status(400).send(error.message);
      }

      const data: CreateOrderDTO = req.body
    
      const Order  = await OrderService.createOrder(data);

      res.status(201).send(Order);
  });

  getOrders =  asyncHandler(async (_req: Request, res: Response) => {
    const Orders = await OrderService.getAll();
    res.send(Orders);
  });

  getOrderById =  asyncHandler(async (req: Request, res: Response) => {
    const Order = await OrderService.getById(req.params.id);

    if (!Order) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Order);
  });

  updateOrder = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;

    const data: UpdateOrderDTO = req.body;

    const Order = await OrderService.update(id, data);

    if (!Order) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Order);
  });

  deleteOrder =  asyncHandler(async (req: Request, res: Response) => {
    const deleted = await OrderService.delete(req.params.id);

    if (!deleted) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send({ code: "SUCCESS" });
  });
}

export default new OrderController();