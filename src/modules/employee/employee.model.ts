import mongoose, { Schema, Types } from "mongoose";
import { Employee } from "./employee.schema";

const EmployeeSchema: Schema = new Schema<Employee>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    companyID: {
      type: Schema.Types.ObjectId,
      ref: "companies",
      required: true,
    },
    rolID: {
      type: Schema.Types.ObjectId,
      ref: "roles",
      required: true,
    },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model<Employee>("employees", EmployeeSchema);
