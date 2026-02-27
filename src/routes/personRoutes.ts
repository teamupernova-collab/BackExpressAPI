import { Router} from "express";
import { personControllers } from "../controllers/personController";

const router = Router();

// create person
router.post("/", personControllers.addPerson);
//get persons
router.get("/", personControllers.getPersons)
// get person by id
router.get("/:id", personControllers.getPersonById);
// update person
router.put("/:id", personControllers.updatePerson);
// delete person
router.delete("/:id", personControllers.deletePerson);

export default router;
