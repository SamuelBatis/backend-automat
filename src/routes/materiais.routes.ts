import express, { Request, Response } from "express";
import { MaterialController } from "../controllers/MaterialController";

const materiaisRoutes = express.Router();

materiaisRoutes.post("/", async (req: Request, res: Response) => {
  const materiaisController = new MaterialController();

  const material = await materiaisController.createMaterial(req.body);
  res.status(201).send(material);
});

materiaisRoutes.get("/", async (req: Request, res: Response) => {
  const materiaisController = new MaterialController();

  const materiais = await materiaisController.getMateriais();
  res.status(200).send(materiais);
});

materiaisRoutes.get("/:id", async (req: Request, res: Response) => {
  const materiaisController = new MaterialController();

  const material = await materiaisController.getMaterialById(req.params);

  res.status(200).send(material);
});

materiaisRoutes.put("/:id", async (req: Request, res: Response) => {
  const materiaisController = new MaterialController();

  const updatedMaterial = await materiaisController.updateMateriais(req.body);

  res.status(200).send(updatedMaterial);
});

materiaisRoutes.delete("/:id", async (req: Request, res: Response) => {
  const materiaisController = new MaterialController();

  const deletedMaterial = await materiaisController.deleteMaterial(req.params);
  res.status(200).send(deletedMaterial);
});
export default materiaisRoutes;
