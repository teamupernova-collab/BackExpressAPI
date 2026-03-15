import { Router} from "express";
import {{Name}}Controller from "./{{name}}.controller";

const router = Router();

// create {{Name}}
router.post("/", {{Name}}Controller.add{{Name}});
//get {{Name}}s
router.get("/", {{Name}}Controller.get{{Name}}s)
// get {{Name}} by id
router.get("/:id", {{Name}}Controller.get{{Name}}ById);
// update {{Name}}
router.put("/:id", {{Name}}Controller.update{{Name}});
// delete {{Name}}
router.delete("/:id", {{Name}}Controller.delete{{Name}});

export default router;
