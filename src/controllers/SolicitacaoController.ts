import { Solicitacao } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

export class SolicitacaoController {
  constructor() {}

  async createSolicitacao(data: Omit<Solicitacao, "idSolicitacao">) {
    const solicitacao = await prismaClient.solicitacao.create({
      data,
    });

    return solicitacao;
  }

  async getSolicitacaos() {
    const solicitacaos = await prismaClient.solicitacao.findMany({
      include: {
        Materiais: true,
        Usuarios: true,
      },
    });
    return solicitacaos;
  }

  async getSolicitacaoById(params: any) {
    const id = parseInt(params.id);

    const Solicitacao = await prismaClient.solicitacao.findFirst({
      where: {
        idSolicitacao: id,
      },
    });
    return Solicitacao;
  }

  async updateSolicitacao(data: Solicitacao) {
    const updatedSolicitacao = await prismaClient.solicitacao.update({
      where: {
        idSolicitacao: data.idSolicitacao,
      },
      data,
    });
    return updatedSolicitacao;
  }

  async deleteSolicitacao(params: any) {
    const id = parseInt(params.id);
    const deletedSolicitacao = await prismaClient.solicitacao.delete({
      where: {
        idSolicitacao: id,
      },
    });

    return deletedSolicitacao;
  }
}
