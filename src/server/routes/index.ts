import { Router } from "express";
import { CitiesController } from "./../controllers";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Hello");
});

router.get("/cities", CitiesController.getAllValidator, CitiesController.getAll);
router.get("/cities/:id", CitiesController.getByIdValidator, CitiesController.getById);
router.post("/cities", CitiesController.createValidator, CitiesController.create);
router.delete("/cities/:id", CitiesController.deleteByIdValidator, CitiesController.deleteById);
router.put("/cities/:id", CitiesController.updateByIdValidator, CitiesController.updateById);

export { router }