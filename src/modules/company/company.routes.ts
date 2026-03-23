import { Router} from "express";
import { buildRoute } from "../../utils/routeBuilder";
import { z } from "../../config/zod";
import CompanyController from "./company.controller";
import { createCompanySchema, updateCompanySchema, companyDbSchema } from "./company.schema"

const router = Router();
const basePath = "/api/company";

// CREATE
buildRoute(router, {
  method: "post",
  path: basePath,
  schema: createCompanySchema,
  response: companyDbSchema,
  handler: CompanyController.addCompany,
  tag: "Company",
});

// GET ALL
buildRoute(router, {
  method: "get",
  path: basePath,
  response: companyDbSchema.array(),
  handler: CompanyController.getCompanies,
  tag: "Company",
});

// GET BY ID
buildRoute(router, {
  method: "get",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  response: companyDbSchema,
  handler: CompanyController.getCompanyById,
  tag: "Company",
});

// UPDATE
buildRoute(router, {
  method: "put",
  path: `${basePath}/{id}`,
  schema: updateCompanySchema,
  params: z.object({ id: z.string() }),
  response: companyDbSchema,
  handler: CompanyController.updateCompany,
  tag: "Company",
});

// DELETE
buildRoute(router, {
  method: "delete",
  path: `${basePath}/{id}`,
  params: z.object({ id: z.string() }),
  handler: CompanyController.deleteCompany,
  tag: "Company",
});

export default router;
