import { z } from "../../config/zod";

export const baseOrderSchema = z.object({
  clientID: z.any(),
  companyID: z.any(),
  employeeID: z.any(),
  priceTotal: z.any(),
});

export const orderDbSchema = baseOrderSchema.extend({
  _id: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number(),
});

export const createOrderSchema = baseOrderSchema;
export const updateOrderSchema = baseOrderSchema
    .partial()
    .refine(data => Object.keys(data).length > 0, {
        message: "Debe enviar al menos un campo",
    });

// tipo automático
export type Order = z.infer<typeof baseOrderSchema>;
export type CreateOrderDTO = z.infer<typeof createOrderSchema>;
export type UpdateOrderDTO = z.infer<typeof updateOrderSchema>;