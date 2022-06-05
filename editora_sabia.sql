SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `editora_sabia` DEFAULT CHARACTER SET utf8 ;
USE `editora_sabia` ;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`autores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `biografia` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `preco` FLOAT NOT NULL,
  `avaliacao` FLOAT NOT NULL,
  `descricao` TEXT NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `autores_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_produtos_autores`
    FOREIGN KEY (`autores_id`)
    REFERENCES `editora_sabia`.`autores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `cpf` CHAR(13) NOT NULL,
  `senha` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`)
  )
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`enderecos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `logradouro` VARCHAR(100) NOT NULL,
  `complemento` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(10) NULL,
  `clientes_id` INT NOT NULL,
  `bairro` VARCHAR(100) NOT NULL,
  `cidade` VARCHAR(100) NOT NULL,
  `estado` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_enderecos_clientes`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `editora_sabia`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`generos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`generos_has_produtos` (
  `generos_id` INT NOT NULL,
  `produtos_id` INT NOT NULL,
  PRIMARY KEY (`generos_id`, `produtos_id`),
  CONSTRAINT `fk_generos_has_produtos_genero`
    FOREIGN KEY (`genero_id`)
    REFERENCES `livraria_saraiva`.`generos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_generos_has_produtos_produtos`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `editora_sabia`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`formas_pagamento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_pedido` DATE NOT NULL,
  `data_entrega` DATE NOT NULL,
  `valor` FLOAT NOT NULL,
  `formas_pagamento_id` INT NOT NULL,
  `clientes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_pedidos_formas_pagamento`
    FOREIGN KEY (`formas_pagamento_id`)
    REFERENCES `editora_sabia`.`formas_pagamento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_clientes`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `editora_sabia`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`pedidos_has_produtos` (
  `pedidos_id` INT NOT NULL,
  `produtos_id` INT NOT NULL,
  PRIMARY KEY (`pedidos_id`, `produtos_id`),
  CONSTRAINT `fk_pedidos_has_produtos_pedidos`
    FOREIGN KEY (`pedidos_id`)
    REFERENCES `editora_sabia`.`pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_has_produtos_produtos`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `editora_sabia`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `editora_sabia`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `senha` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`id`)
  )
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
