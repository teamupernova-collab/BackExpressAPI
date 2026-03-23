import mongoose, { Schema, Types } from "mongoose";
import { Order } from "./order.schema";

const OrderSchema: Schema = new Schema<Order>(
  {
    clientID: {
      type: Schema.Types.ObjectId,
      ref: "clients",
      required: true,
    },
    companyID: {
      type: Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
    employeeID: {
      type: Schema.Types.ObjectId,
      ref: "employees",
      required: true,
    },
    priceTotal: { type: Types.Decimal128, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<Order>("orders", OrderSchema);
