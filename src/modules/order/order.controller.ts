import { Request, Response } from "express";
import { OrderService } from "./order.services";
import { CreateOrderDTO, UpdateOrderDTO } from "./order.schema"
import { asyncHandler } from "../../utils/asyncHandler"; 
import { ClientService } from "../client/client.services";
import { CompanyService } from "../company/company.services";
import { EmployeeService } from "../employee/employee.services";

class OrderController {
  addOrder = asyncHandler(async (req: Request, res: Response) => {

      const data: CreateOrderDTO = req.body

      const client = ClientService.getById(data.clientID)
      if (!client) {
        return res.status(404).send({ code: "NOT_FOUND" });
      }

      const company = CompanyService.getById(data.companyID)
      if (!company) {
         return res.status(404).send({ code: "NOT_FOUND" });
      }

      const employye = EmployeeService.getById(data.employeeID);
      if (!employye) {
        return res.status(404).send({ code: "NOT_FOUND" });
      }
    
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