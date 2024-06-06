import { Materiais } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

export class MaterialController {
  constructor() {}

  async createMaterial(data: any) {
    const material = await prismaClient.materiais.create({
      data,
    });

    return material;
  }

  async getMateriais() {
    const materiais = await prismaClient.materiais.findMany();
    return materiais;
  }

  async getMaterialById(params: any) {
    const idM = parseInt(params.id);

    const material = await prismaClient.materiais.findFirst({
      where: {
        idMateriais: idM,
      },
    });
    return material;
  }

  async updateMateriais(data: Materiais) {
    const updatedMaterial = await prismaClient.materiais.update({
      where: {
        idMateriais: data.idMateriais,
      },
      data,
    });
    return updatedMaterial;
  }

  async deleteMaterial(params: any) {
    const idM = parseInt(params.id);
    const deletedMaterial = await prismaClient.materiais.delete({
      where: {
        idMateriais: idM,
      },
    });

    return deletedMaterial;
  }
}
