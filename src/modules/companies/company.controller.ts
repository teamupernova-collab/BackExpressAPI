import { Request, Response } from "express";
import { CompanyService } from "./company.services";
import { CreateCompanySchema } from "./company.schema";
import { CreateCompanyDTO, UpdateCompanyDTO } from "./company.types"
import { asyncHandler } from "../../utils/asyncHandler"; 

class CompanyContCompanyler {
  addCompany = asyncHandler(async (req: Request, res: Response) => {
      const { error } = CreateCompanySchema.validate(req.body);

      if (error) {
        return res.status(400).send(error.message);
      }

      const data: CreateCompanyDTO = req.body
    
      const Company  = await CompanyService.createCompany(data);

      res.status(201).send(Company);
  });

  getCompanies =  asyncHandler(async (_req: Request, res: Response) => {
    const Companys = await CompanyService.getAll();
    res.send(Companys);
  });

  getCompanyById =  asyncHandler(async (req: Request, res: Response) => {
    const Company = await CompanyService.getById(req.params.id);

    if (!Company) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Company);
  });

  updateCompany = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;

    const data: UpdateCompanyDTO = req.body;

    const Company = await CompanyService.update(id, data);

    if (!Company) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Company);
  });

  deleteCompany =  asyncHandler(async (req: Request, res: Response) => {
    const deleted = await CompanyService.delete(req.params.id);

    if (!deleted) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send({ code: "SUCCESS" });
  });
}

export default new CompanyContCompanyler();