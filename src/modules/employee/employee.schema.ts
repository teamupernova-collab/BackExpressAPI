import Joi from "joi";

export const CreateEmployeeSchema = Joi.object({
  userID: Joi.string().required(),
  companyID: Joi.string().required(),
  rolID: Joi.string().required(),
  isActive: Joi.boolean(),
});
