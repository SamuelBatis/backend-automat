import express from "express";
import usuariosRoutes from "./usuarios.routes";
import materiaisRoutes from "./materiais.routes";
import solicitacaoRoutes from "./solicitacao.routes";
import { getExcelData } from "../controllers/ImportDataController";
import pedidoRoutes from "./pedido.routes";

const router = express.Router();

router.use("/usuarios", usuariosRoutes);
router.use("/materiais", materiaisRoutes);
router.use("/solicitacao", solicitacaoRoutes);
router.use("/pedido", pedidoRoutes);
router.use("/import", () => getExcelData("Planilha1"));

export default router;
