import mongoose, { Schema, Document } from "mongoose";

interface I{{Name}} extends Document {

}

const {{Name}}Schema: Schema = new Schema(
    {
    },
    { timestamps: true },
);

export default mongoose.model<I{{Name}}>("{{name}}s", {{Name}}Schema);