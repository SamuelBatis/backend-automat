import express from "express";
import usuariosRoutes from "./usuarios.routes";
import materiaisRoutes from "./materiais.routes";
import solicitacaoRoutes from "./solicitacao.routes";
import logsRoutes from "./logs.routes";
import { getExcelData } from "../controllers/ImportDataController";

const router = express.Router();

router.use("/usuarios", usuariosRoutes);
router.use("/materiais", materiaisRoutes);
router.use("/solicitacao", solicitacaoRoutes);
router.use("/log", logsRoutes);
router.use("/import", () => getExcelData("Planilha1"));

export default router;
