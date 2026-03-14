import mongoose, { Schema, Document } from "mongoose";

interface ICompany extends Document {
  legalName: string;
  description: string;
  rfc: string;
  status: boolean;
}

const CompanySchema: Schema = new Schema(
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

export default mongoose.model<ICompany>("companies", CompanySchema);
