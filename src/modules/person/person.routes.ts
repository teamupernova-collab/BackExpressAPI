import { Router} from "express";
import PersonController from "./person.controller";

const router = Router();

// create person
router.post("/", PersonController.addPerson);
//get persons
router.get("/", PersonController.getPersons)
// get person by id
router.get("/:id", PersonController.getPersonById);
// update person
router.put("/:id", PersonController.updatePerson);
// delete person
router.delete("/:id", PersonController.deletePerson);

export default router;
