-- CreateTable
CREATE TABLE `Logs` (
    `idLogs` INTEGER NOT NULL,
    `date` VARCHAR(45) NULL,
    `Solicitacao_idSolicitacao` INTEGER NOT NULL,

    INDEX `fk_Logs_Solicitacao1_idx`(`Solicitacao_idSolicitacao`),
    PRIMARY KEY (`idLogs`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materiais` (
    `idMateriais` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo_mat` VARCHAR(150) NULL,
    `descricao_mat` VARCHAR(150) NULL,
    `preco_mat` VARCHAR(150) NULL,
    `area` VARCHAR(150) NULL,

    PRIMARY KEY (`idMateriais`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solicitacao` (
    `idSolicitacao` INTEGER NOT NULL,
    `qtd` INTEGER NULL,
    `Materiais_idMateriais` INTEGER NOT NULL,
    `Usuarios_idUsuarios` INTEGER NOT NULL,

    INDEX `fk_Solicitacao_Materiais_idx`(`Materiais_idMateriais`),
    INDEX `fk_Solicitacao_Usuarios1_idx`(`Usuarios_idUsuarios`),
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
ALTER TABLE `Logs` ADD CONSTRAINT `fk_Logs_Solicitacao1` FOREIGN KEY (`Solicitacao_idSolicitacao`) REFERENCES `Solicitacao`(`idSolicitacao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Solicitacao` ADD CONSTRAINT `fk_Solicitacao_Materiais` FOREIGN KEY (`Materiais_idMateriais`) REFERENCES `Materiais`(`idMateriais`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Solicitacao` ADD CONSTRAINT `fk_Solicitacao_Usuarios1` FOREIGN KEY (`Usuarios_idUsuarios`) REFERENCES `Usuarios`(`idUsuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION;
