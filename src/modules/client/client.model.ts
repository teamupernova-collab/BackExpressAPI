import mongoose, { Schema, Document } from "mongoose";

interface IClient extends Document {
  userID: mongoose.Types.ObjectId;
  isActive: boolean;
}

const ClientSchema: Schema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model<IClient>("clients", ClientSchema);
