import express, { Request, Response } from "express";
import { SolicitacaoController } from "../controllers/SolicitacaoController";

const solicitacaoRoutes = express.Router();

solicitacaoRoutes.post("/", async (req: Request, res: Response) => {
  const solicitacaoController = new SolicitacaoController();

  const Solicitacao = await solicitacaoController.createSolicitacao(req.body);
  res.status(201).send(Solicitacao);
});

solicitacaoRoutes.get("/", async (req: Request, res: Response) => {
  const solicitacaoController = new SolicitacaoController();

  const materiais = await solicitacaoController.getSolicitacaos();
  res.status(200).send(materiais);
});

solicitacaoRoutes.get("/:id", async (req: Request, res: Response) => {
  const solicitacaoController = new SolicitacaoController();

  const Solicitacao = await solicitacaoController.getSolicitacaoById(
    req.params
  );

  res.status(200).send(Solicitacao);
});

solicitacaoRoutes.put("/:id", async (req: Request, res: Response) => {
  const solicitacaoController = new SolicitacaoController();

  const updatedSolicitacao = await solicitacaoController.updateSolicitacao(
    req.body
  );

  res.status(200).send(updatedSolicitacao);
});

solicitacaoRoutes.delete("/:id", async (req: Request, res: Response) => {
  const solicitacaoController = new SolicitacaoController();

  const deletedSolicitacao = await solicitacaoController.deleteSolicitacao(
    req.params
  );
  res.status(200).send(deletedSolicitacao);
});
export default solicitacaoRoutes;
