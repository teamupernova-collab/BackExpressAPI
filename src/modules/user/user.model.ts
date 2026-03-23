import mongoose, { Schema, Types } from "mongoose";
import { User } from "./user.schema";

const UserSchema: Schema = new Schema<User>(
  {
    personID: {
      type: Types.ObjectId,
      ref: "persons",
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<User>("users", UserSchema);
