import { CreateOrderDTO, UpdateOrderDTO } from "./order.schema"
import Order from "./order.model"
import { ClientSession } from "mongoose"

export class OrderService {
  static async createOrder( data: CreateOrderDTO, session?: ClientSession ) {
    return await Order.create([data], { session }).then(r => r[0])
  }

  static async getAll() {
    return await Order.find();
  }

  static async getById(id: string) {
    return await Order.findById(id);
  }

  static async update(id: string, data: UpdateOrderDTO ) {
    return await Order.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await Order.findByIdAndDelete(id);
  }
}