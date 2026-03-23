import { z } from "../../config/zod";

export const baseEmployeeSchema = z.object({
  userID: z.any(),
  companyID: z.any(),
  rolID: z.any(),
  isActive: z.boolean().optional(),
});

export const employeeDbSchema = baseEmployeeSchema.extend({
  _id: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number(),
});

export const createEmployeeSchema = baseEmployeeSchema;
export const updateEmployeeSchema = baseEmployeeSchema
    .partial()
    .refine(data => Object.keys(data).length > 0, {
        message: "Debe enviar al menos un campo",
    });

// tipo automático
export type Employee = z.infer<typeof baseEmployeeSchema>;
export type CreateEmployeeDTO = z.infer<typeof createEmployeeSchema>;
export type UpdateEmployeeDTO = z.infer<typeof updateEmployeeSchema>;
