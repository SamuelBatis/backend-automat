-- CreateTable
CREATE TABLE `Materiais` (
    `idMateriais` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo_mat` VARCHAR(150) NULL,
    `descricao_mat` VARCHAR(150) NULL,
    `preco_mat` DOUBLE NULL,
    `area` VARCHAR(150) NULL,

    PRIMARY KEY (`idMateriais`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `idPedido` INTEGER NOT NULL AUTO_INCREMENT,
    `Usuarios_idUsuarios` INTEGER NOT NULL,

    INDEX `fk_Pedido_Usuarios1_idx`(`Usuarios_idUsuarios`),
    PRIMARY KEY (`idPedido`, `Usuarios_idUsuarios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solicitacao` (
    `idSolicitacao` INTEGER NOT NULL AUTO_INCREMENT,
    `qtd` INTEGER NULL,
    `Pedido_idPedido` INTEGER NOT NULL,
    `Pedido_Usuarios_idUsuarios` INTEGER NOT NULL,
    `Materiais_idMateriais` INTEGER NOT NULL,

    INDEX `fk_Solicitacao_Materiais1_idx`(`Materiais_idMateriais`),
    INDEX `fk_Solicitacao_Pedido1_idx`(`Pedido_idPedido`, `Pedido_Usuarios_idUsuarios`),
    PRIMARY KEY (`idSolicitacao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `idUsuarios` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_usuario` VARCHAR(150) NULL,
    `senha` VARCHAR(150) NULL,

    PRIMARY KEY (`idUsuarios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `fk_Pedido_Usuarios1` FOREIGN KEY (`Usuarios_idUsuarios`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Solicitacao` ADD CONSTRAINT `fk_Solicitacao_Materiais1` FOREIGN KEY (`Materiais_idMateriais`) REFERENCES `Materiais`(`idMateriais`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Solicitacao` ADD CONSTRAINT `fk_Solicitacao_Pedido1` FOREIGN KEY (`Pedido_idPedido`, `Pedido_Usuarios_idUsuarios`) REFERENCES `Pedido`(`idPedido`, `Usuarios_idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;
