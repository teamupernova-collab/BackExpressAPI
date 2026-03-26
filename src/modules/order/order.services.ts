import { CreateOrderDTO, UpdateOrderDTO } from "./order.schema"
import Order from "./order.model"
import { ClientSession } from "mongoose"

const mapOrder = (order: any) => ({
  ...order.toObject(),
  priceTotal: order.priceTotal?.toString(),
});


export class OrderService {
  static async createOrder( data: CreateOrderDTO, session?: ClientSession ) {
    return await Order.create([data], { session }).then(r => r[0])
  }

  static async getAll() {
   const orders = await Order.find().lean();

  return orders.map((order: any) => ({
    ...order,
    priceTotal: order.priceTotal?.toString(),
  }));
  }

  static async getById(id: string) {
    const order = await Order.findById(id).lean();

  if (!order) return null;

  return {
    ...order,
    priceTotal: order.priceTotal?.toString(),
  };
  }

  static async update(id: string, data: UpdateOrderDTO ) {
    return await Order.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(id: string) {
    return await Order.findByIdAndDelete(id);
  }
}