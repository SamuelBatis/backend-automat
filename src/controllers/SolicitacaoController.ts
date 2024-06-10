import { Solicitacao } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

export class SolicitacaoController {
  constructor() {}

  async createSolicitacao(data: Solicitacao) {
    console.log(data);
    const solicitacao = await prismaClient.solicitacao.create({
      data: {
        qtd: data.qtd,
        Materiais_idMateriais: data.Materiais_idMateriais,
        Pedido_idPedido: data.Pedido_idPedido,
        Pedido_Usuarios_idUsuarios: 1,
      },
    });
    console.log("solic" + solicitacao);

    return solicitacao;
  }

  async getSolicitacaos() {
    const solicitacaos = await prismaClient.solicitacao.findMany({
      include: {
        Materiais: true,
        Pedido: true,
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
