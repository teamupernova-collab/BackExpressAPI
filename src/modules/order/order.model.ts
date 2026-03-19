import mongoose, { Schema, Document } from "mongoose";

interface IOrder extends Document {
  clientID: mongoose.Types.ObjectId;
  companyID: mongoose.Types.ObjectId;
  EmployeeID: mongoose.Types.ObjectId;
  priceTotal: mongoose.Types.Decimal128;
}

const OrderSchema: Schema = new Schema(
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
        EmployeeID: {
        type: Schema.Types.ObjectId,
        ref: "employees",
        required: true,
        },
        priceTotal: { type:  mongoose.Schema.Types.Decimal128, required: true },
    },
    { timestamps: true }
);

export default mongoose.model<IOrder>("orders", OrderSchema);
