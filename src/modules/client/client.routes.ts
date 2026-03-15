import { Router} from "express";
import ClientController from "./client.controller";

const router = Router();

// create Client
router.post("/", ClientController.addClient);
//get Clients
router.get("/", ClientController.getClients)
// get Client by id
router.get("/:id", ClientController.getClientById);
// update Client
router.put("/:id", ClientController.updateClient);
// delete Client
router.delete("/:id", ClientController.deleteClient);

export default router;
