import Joi from "joi";

export const CreateCompanySchema = Joi.object({
  legalName: Joi.string().required(),
  description: Joi.string().required(),
  rfc: Joi.string().required(),
  status: Joi.boolean(),
});