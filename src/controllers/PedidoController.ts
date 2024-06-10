import { Pedido, Solicitacao } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

export class PedidoController {
  constructor() {}

  async createPedido(data: any) {
    console.log(data);
    const pedido = await prismaClient.pedido.create({
      data,
    });

    return pedido;
  }

  async getPedidos() {
    // Primeiro, obtenha todos os pedidos
    const pedidos = await prismaClient.pedido.findMany({
      include: {
        Usuarios: true,
      },
    });

    // Para cada pedido, busque as solicitações relacionadas
    const pedidosComSolicitacoes = await Promise.all(
      pedidos.map(async (pedido) => {
        const solicitacoes = await prismaClient.solicitacao.findMany({
          where: {
            Pedido_Usuarios_idUsuarios: pedido.Usuarios_idUsuarios,
          },
          include: {
            Materiais: true,
          },
        });

        return {
          ...pedido,
          solicitacoes,
        };
      })
    );

    return pedidosComSolicitacoes;
  }

  async getPedidoById(params: any) {
    const id = parseInt(params.id);

    const pedido = await prismaClient.pedido.findFirst({
      where: {
        idPedido: id,
      },
      include: {
        Usuarios: true,
      },
    });

    if (pedido) {
      const solicitacoes = await prismaClient.solicitacao.findMany({
        where: {
          Pedido_Usuarios_idUsuarios: pedido.Usuarios_idUsuarios,
        },
      });

      return {
        ...pedido,
        solicitacoes,
      };
    }

    return null;
  }
}
