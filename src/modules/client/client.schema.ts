import Joi from "joi";

export const CreateClientSchema = Joi.object({
  userID: Joi.string().required(),
  isActive: Joi.boolean(),
});
