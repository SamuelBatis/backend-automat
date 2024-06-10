import express, { Request, Response } from "express";
import { PedidoController } from "../controllers/PedidoController";

const pedidoRoutes = express.Router();

pedidoRoutes.post("/", async (req: Request, res: Response) => {
  const pedidoController = new PedidoController();
  console.log(req.body);
  const pedido = await pedidoController.createPedido(req.body);
  res.status(201).send(pedido);
});

pedidoRoutes.get("/", async (req: Request, res: Response) => {
  const pedidoController = new PedidoController();

  const pedido = await pedidoController.getPedidos();
  res.status(200).send(pedido);
});

pedidoRoutes.get("/:id", async (req: Request, res: Response) => {
  const pedidoController = new PedidoController();

  const pedido = await pedidoController.getPedidoById(req.params);

  res.status(200).send(pedido);
});

export default pedidoRoutes;
