import mongoose, { Schema } from "mongoose";
import { Company } from "./company.schema";

const CompanySchema: Schema = new Schema<Company>(
  {
     legalName: {
      type: String,
      required: true,
    },
     description: {
      type: String,
      required: true,
    },
     rfc: {
      type: String,
      required: true,
    },
    status: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model<Company>("companies", CompanySchema);
