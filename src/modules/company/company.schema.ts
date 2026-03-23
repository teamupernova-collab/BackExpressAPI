import { z } from "../../config/zod";

export const baseCompanySchema = z.object({
  legalName: z.string(),
  description: z.string(),
  rfc: z.string(),
  status: z.boolean().optional(),
});

export const companyDbSchema = baseCompanySchema.extend({
  _id: z.any(),
  createdAt: z.date(),
  updatedAt: z.date(),
  __v: z.number(),
});

export const createCompanySchema = baseCompanySchema;
export const updateCompanySchema = baseCompanySchema
    .partial()
    .refine(data => Object.keys(data).length > 0, {
        message: "Debe enviar al menos un campo",
    });

// tipo automático
export type Company = z.infer<typeof baseCompanySchema>;
export type CreateCompanyDTO = z.infer<typeof createCompanySchema>;
export type UpdateCompanyDTO = z.infer<typeof updateCompanySchema>;