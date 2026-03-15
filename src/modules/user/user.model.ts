import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  personId: mongoose.Types.ObjectId;
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema(
  {
    personId: {
      type: Schema.Types.ObjectId,
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

export default mongoose.model<IUser>("users", UserSchema);
