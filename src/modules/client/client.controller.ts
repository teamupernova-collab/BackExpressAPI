import { Request, Response } from "express";
import { ClientService } from "./client.services";
import { CreateClientDTO, UpdateClientDTO} from "./client.schema";
import { asyncHandler } from "../../utils/asyncHandler"; 

class ClientController {
  addClient = asyncHandler(async (req: Request, res: Response) => {

      const data: CreateClientDTO = req.body
    
      const Client  = await ClientService.createClient(data);

      res.status(201).send(Client);
  });

  getClients =  asyncHandler(async (_req: Request, res: Response) => {
    const Clients = await ClientService.getAll();
    res.send(Clients);
  });

  getClientById =  asyncHandler(async (req: Request, res: Response) => {
    const Client = await ClientService.getById(req.params.id);

    if (!Client) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Client);
  });

  updateClient = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;

    const data: UpdateClientDTO = req.body;

    const Client = await ClientService.update(id, data);

    if (!Client) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send(Client);
  });

  deleteClient =  asyncHandler(async (req: Request, res: Response) => {
    const deleted = await ClientService.delete(req.params.id);

    if (!deleted) {
      return res.status(404).send({ code: "NOT_FOUND" });
    }

    res.send({ code: "SUCCESS" });
  });
}

export default new ClientController();