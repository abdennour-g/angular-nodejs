
start transaction;
CREATE DATABASE IF NOT EXISTS todolist DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE todolist;

DROP TABLE IF EXISTS categorie;
CREATE TABLE IF NOT EXISTS categorie (
  id_cat int NOT NULL AUTO_INCREMENT,
  design varchar(40) NOT NULL,
  PRIMARY KEY (id_cat)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
insert into categorie values (1,'categorie 1'),(2,'categorie 2'),(3,'categorie 3');
DROP TABLE IF EXISTS tache;
CREATE TABLE IF NOT EXISTS tache (
  id_tache int NOT NULL AUTO_INCREMENT,
  design varchar(40) NOT NULL,
  categorie varchar(40) NOT NULL,
  statut varchar(40) NOT NULL,
  PRIMARY KEY (id_tache)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
insert into tache(categorie,design,statut) values 
('categorie 1','tache 1','active'),
('categorie 1','tache 2','active'),
('categorie 2','tache 3','archive'),
('categorie 2','tache 4','active'),
('categorie 3','tache 5','active'),
('categorie 3','tache 6','archive');
COMMIT;
