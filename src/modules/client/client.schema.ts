import { z } from "../../config/zod";

export const baseClientSchema = z.object({
  userID: z.any(),
  isActive: z.boolean().optional(),
});

export const clientDbSchema = baseClientSchema.extend({
  _id: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number(),
});

export const createClientSchema = baseClientSchema;
export const updateClientSchema = baseClientSchema
    .partial()
    .refine(data => Object.keys(data).length > 0, {
        message: "Debe enviar al menos un campo",
    });

// tipo automático
export type Client = z.infer<typeof baseClientSchema>;
export type CreateClientDTO = z.infer<typeof createClientSchema>;
export type UpdateClientDTO = z.infer<typeof updateClientSchema>;