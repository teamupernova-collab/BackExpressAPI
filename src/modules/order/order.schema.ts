import Joi from "joi";

export const CreateOrderSchema = Joi.object({
    clientID: Joi.string().required(),
    companyID: Joi.string().required(),
    EmployeeID: Joi.string().required(),
    priceTotal: Joi.number()
});
