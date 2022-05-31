-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`autores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `biografia` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `preco` FLOAT NOT NULL,
  `avaliacao` FLOAT NOT NULL,
  `descricao` TEXT NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `autores_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_produtos_autores1_idx` (`autores_id` ASC) VISIBLE,
  CONSTRAINT `fk_produtos_autores1`
    FOREIGN KEY (`autores_id`)
    REFERENCES `mydb`.`autores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `cpf` CHAR(13) NOT NULL,
  `senha` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `logradouro` VARCHAR(100) NOT NULL,
  `complemento` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(10) NULL,
  `clientes_id` INT NOT NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `cidade` VARCHAR(100) NOT NULL,
  `estado` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_endereco_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_endereco_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `mydb`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`genero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`genero` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`genero_has_produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`genero_has_produtos` (
  `genero_id` INT NOT NULL,
  `produtos_id` INT NOT NULL,
  PRIMARY KEY (`genero_id`, `produtos_id`),
  INDEX `fk_genero_has_produtos_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  INDEX `fk_genero_has_produtos_genero1_idx` (`genero_id` ASC) VISIBLE,
  CONSTRAINT `fk_genero_has_produtos_genero1`
    FOREIGN KEY (`genero_id`)
    REFERENCES `mydb`.`genero` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_genero_has_produtos_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `mydb`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`formas_pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`formas_pagamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_pedido` DATE NOT NULL,
  `data_entrega` DATE NOT NULL,
  `valor` FLOAT NOT NULL,
  `formas_pagamento_id` INT NOT NULL,
  `clientes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedidos_formas_pagamento1_idx` (`formas_pagamento_id` ASC) VISIBLE,
  INDEX `fk_pedidos_clientes1_idx` (`clientes_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_formas_pagamento1`
    FOREIGN KEY (`formas_pagamento_id`)
    REFERENCES `mydb`.`formas_pagamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `mydb`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`pedidos_has_produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`pedidos_has_produtos` (
  `pedidos_id` INT NOT NULL,
  `produtos_id` INT NOT NULL,
  PRIMARY KEY (`pedidos_id`, `produtos_id`),
  INDEX `fk_pedidos_has_produtos_produtos1_idx` (`produtos_id` ASC) VISIBLE,
  INDEX `fk_pedidos_has_produtos_pedidos1_idx` (`pedidos_id` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_has_produtos_pedidos1`
    FOREIGN KEY (`pedidos_id`)
    REFERENCES `mydb`.`pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_has_produtos_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `mydb`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
