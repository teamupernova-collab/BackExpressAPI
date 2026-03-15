import mongoose, { Schema, Document } from "mongoose";

interface IEmployee extends Document {
  userID: mongoose.Types.ObjectId;
  companyID: mongoose.Types.ObjectId;
  rolID: mongoose.Types.ObjectId;
  isActive: boolean;
}

const EmployeeSchema: Schema = new Schema(
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

export default mongoose.model<IEmployee>("employees", EmployeeSchema);
