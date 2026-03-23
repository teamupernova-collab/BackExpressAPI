import mongoose, { Schema, Types } from "mongoose";
import { Client } from "./client.schema";

const ClientSchema: Schema = new Schema<Client>(
  {
    userID: {
      type: Types.ObjectId,
      ref: "users",
      required: true,
    },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model<Client>("clients", ClientSchema);
