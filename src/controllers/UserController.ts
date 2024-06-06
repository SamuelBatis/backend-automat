import { prismaClient } from "../database/prismaClient";

export class UserController {
  constructor() {}

  async createUser(nome_usuario: string, senha: string) {
    const usuario = await prismaClient.usuarios.create({
      data: {
        nome_usuario,
        senha,
      },
    });

    return usuario;
  }

  async getUser() {
    const usuarios = await prismaClient.usuarios.findMany();

    return usuarios;
  }

  async login(nome_usuario: string, senha: string) {
    const usuario = await prismaClient.usuarios.findFirst({
      where: {
        nome_usuario,
        senha,
      },
    });
    return usuario;
  }
}
