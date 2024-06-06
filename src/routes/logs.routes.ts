import express, { Request, Response } from "express";
import { LogsController } from "../controllers/LogsController";

const logsRoutes = express.Router();

logsRoutes.post("/", async (req: Request, res: Response) => {
  const logsController = new LogsController();

  const logs = await logsController.createLogs(req.body);
  res.status(201).send(logs);
});

logsRoutes.get("/", async (req: Request, res: Response) => {
  const logsController = new LogsController();

  const materiais = await logsController.getlogs();
  res.status(200).send(materiais);
});

logsRoutes.get("/:id", async (req: Request, res: Response) => {
  const logsController = new LogsController();

  const Log = await logsController.getLogsById(req.params);

  res.status(200).send(Log);
});

logsRoutes.put("/:id", async (req: Request, res: Response) => {
  const logsController = new LogsController();

  const updatedLogs = await logsController.updateLogs(req.body);

  res.status(200).send(updatedLogs);
});

logsRoutes.delete("/:id", async (req: Request, res: Response) => {
  const logsController = new LogsController();

  const deletedLog = await logsController.deleteLogs(req.params);
  res.status(200).send(deletedLog);
});
export default logsRoutes;
