import { Logs } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

export class LogsController {
  constructor() {}

  async createLogs(data: Omit<Logs, "idLogs">) {
    const log = await prismaClient.logs.create({
      data,
    });

    return log;
  }

  async getlogs() {
    const logs = await prismaClient.logs.findMany({
      include: {
        Solicitacao: {
          include: {
            Materiais: true,
            Usuarios: true,
          },
        },
      },
    });
    return logs;
  }

  async getLogsById(params: any) {
    const id = parseInt(params.id);

    const logs = await prismaClient.logs.findFirst({
      where: {
        idLogs: id,
      },
    });
    return logs;
  }

  async updateLogs(data: Logs) {
    const updatedlogs = await prismaClient.logs.update({
      where: {
        idLogs: data.idLogs,
      },
      data,
    });
    return updatedlogs;
  }

  async deleteLogs(params: any) {
    const id = parseInt(params.id);
    const deletedLogs = await prismaClient.logs.delete({
      where: {
        idLogs: id,
      },
    });

    return deletedLogs;
  }
}
