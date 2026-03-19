import { Router} from "express";
import OrderController from "./order.controller";

const router = Router();

// create Order
router.post("/", OrderController.addOrder);
//get Orders
router.get("/", OrderController.getOrders)
// get Order by id
router.get("/:id", OrderController.getOrderById);
// update Order
router.put("/:id", OrderController.updateOrder);
// delete Order
router.delete("/:id", OrderController.deleteOrder);

export default router;
