import express, { Request, Response } from "express";
import { UserController } from "../controllers/UserController";

const usuariosRoutes = express.Router();

usuariosRoutes.get("/", async (req: Request, res: Response) => {
  const userController = new UserController();
  const users = await userController.getUser();
  res.status(200).send(users);
});

usuariosRoutes.post("/", async (req: Request, res: Response) => {
  const userController = new UserController();

  const user = await userController.createUser(
    req.body.nome_usuario,
    req.body.senha
  );
  res.status(201).send(user);
});

usuariosRoutes.post("/login", async (req: Request, res: Response) => {
  const userController = new UserController();

  const user = await userController.login(
    req.body.nome_usuario,
    req.body.senha
  );
  res.status(200).send(user);
});
export default usuariosRoutes;
