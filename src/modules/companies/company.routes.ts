import { Router} from "express";
import CompanyController from "./company.controller";

const router = Router();

// create Company
router.post("/", CompanyController.addCompany);
//get Companys
router.get("/", CompanyController.getCompanies)
// get Company by id
router.get("/:id", CompanyController.getCompanyById);
// update Company
router.put("/:id", CompanyController.updateCompany);
// delete Company
router.delete("/:id", CompanyController.deleteCompany);

export default router;
