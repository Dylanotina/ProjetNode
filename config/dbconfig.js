/* Load modules */
let sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const csv = require("csv");
const parse = require("csv-parse");
const path = require("path");

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
const db = new sqlite3.Database(
  "nouvelle_table_les_activites_dans_une_commune.db"
);
//Activation des contraintes d'intégrté
//db.get("PRAGMA foreign_keys = ON")

const createInstallation = function() {
  return new Promise(function(resolve, reject) {
    const sqlRequest =
      "CREATE TABLE IF NOT EXISTS installation (" +
      "numero_de_l_installation TEXT NOT NULL, " +
      "nom_usuel_de_l_installation TEXT NOT NULL, " +
      "code_postal TEXT NOT NULL, " +
      "departement TEXT NOT NULL," +
      "nom_de_la_commune TEXT NOT NULL, " +
      "nom_de_la_voie TEXT NON NULL," +
      "acces_handicape TEXT NON NULL," +
      "desserte_bus TEXT NON NULL," +
      "desserte_train TEXT NON NULL," +
      "desserte_metro TEXT NON NULL," +
      "localisation TEXT NON NULL," +
      "PRIMARY KEY (numero_de_l_installation))";

    db.run(sqlRequest, [], err => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("Installation créée");
        resolve(this);
      }
    });
  });
};

const createEquipement = function() {
  return new Promise(function(resolve, reject) {
    const sqlRequest =
      "CREATE TABLE IF NOT EXISTS equipement (" +
      "numero_de_la_fiche_equipement TEXT NOT NULL," +
      "numero_de_l_installation TEXT NOT NULL," +
      "equipement TEXT NOT NULL," +
      "PRIMARY KEY (numero_de_la_fiche_equipement)," +
      "FOREIGN KEY (numero_de_l_installation) REFERENCES installation(numero_de_l_installation))";

    db.run(sqlRequest, [], err => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("Equipement créée");
        resolve(this);
      }
    });
  });
};
const createActivite = function() {
  return new Promise(function(resolve, reject) {
    const sqlRequest =
      "CREATE TABLE IF NOT EXISTS activite (" +
      "activite_code TEXT NOT NULL," +
      "activite_libelle TEXT NOT NULL," +
      "numero_de_la_fiche_equipement TEXT NOT NULL," +
      "PRIMARY KEY (activite_code, numero_de_la_fiche_equipement)," +
      "FOREIGN KEY (numero_de_la_fiche_equipement) REFERENCES equipement(numero_de_la_fiche_equipement))";
    db.run(sqlRequest, [], err => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("Activité créée");
        resolve(this);
      }
    });
  });
};

const populateInstallation = function() {
  return new Promise(function(resolve, reject) {
    const fileName =
      "data/234400034_004-010_fiches-installations-rpdl_small.csv";
    const stream = fs.createReadStream(fileName, { encoding: "utf8" });

    const parser = parse({
      delimiter: ";",
      columns: header =>
        header.map(column =>
          column
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/gim, "_")
            .replace(/\s+/g, "_")
            .toLowerCase()
        )
    });

    parser.on("readable", function() {
      let row;

      while ((row = this.read())) {
        const sqlRequest =
          "INSERT OR IGNORE into installation (numero_de_l_installation, nom_usuel_de_l_installation, code_postal,departement, nom_de_la_commune,nom_de_la_voie, acces_handicape, desserte_bus,desserte_train,desserte_metro, localisation) " +
          "VALUES ($noDeLInstallation, $nomUsuelDeLInstallation, $codePostal,$departement, $nomDeLaCommune,$nomVoie,$handicape, $desserteBus, $desserteTrain,$desserteMetro, $localisation)";
        const sqlParams = {
          $noDeLInstallation: row.numero_de_l_installation,
          $nomUsuelDeLInstallation: row.nom_usuel_de_l_installation,
          $codePostal: String(row.code_postal),
          $departement: String(row.departement),
          $nomDeLaCommune: String(row.nom_de_la_commune),
          $nomVoie: String(row.nom_de_la_voie),
          $handicape: row.acces_handicape,
          $desserteBus: row.desserte_bus,
          $desserteTrain: row.desserte_train,
          $desserteMetro: row.desserte_metro,
          $localisation: String(row.localisation)
        };

        db.run(sqlRequest, sqlParams, function(err) {
          if (err) console.log(err);
        });
      }
    });

    stream.pipe(parser);

    parser.on("finish", function() {
      console.log("Installations importées");
      resolve(this);
    });

    parser.on("error", err => {
      console.log(err);
      reject(err);
    });
  });
};

const populateEquipement = function() {
  return new Promise(function(resolve, reject) {
    const fileName = "data/234400034_004-011_fiches-equipements-rpdl_small.csv";
    const stream = fs.createReadStream(fileName, { encoding: "utf8" });

    const parser = parse({
      delimiter: ";",
      columns: header =>
        header.map(column =>
          column
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/gim, "_")
            .replace(/\s+/g, "_")
            .toLowerCase()
        )
    });

    parser.on("readable", function() {
      let row;

      while ((row = this.read())) {
        const sqlRequest =
          "INSERT OR IGNORE into equipement (numero_de_la_fiche_equipement, numero_de_l_installation, equipement) " +
          "VALUES ($numeroDeLaFicheEquipement, $numeroDeLInstallation, $equipement)";
        const sqlParams = {
          $numeroDeLaFicheEquipement: row.numero_de_la_fiche_equipement,
          $numeroDeLInstallation: row.numero_de_l_installation,
          $equipement: row.equipement
        };

        db.run(sqlRequest, sqlParams, function(err) {
          if (err) console.log(err);
        });
      }
    });

    stream.pipe(parser);

    parser.on("finish", function() {
      console.log("Equipements importés");
      resolve(this);
    });

    parser.on("error", err => {
      console.log(err);
      reject(err);
    });
  });
};

const populateActivite = function() {
  return new Promise(function(resolve, reject) {
    const fileName =
      "data/234400034_004-009_activites-des-fiches-equipements-rpdl_small.csv";
    const stream = fs.createReadStream(fileName, { encoding: "utf8" });

    const parser = parse({
      delimiter: ";",
      columns: header =>
        header.map(column =>
          column
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/gim, "_")
            .replace(/\s+/g, "_")
            .toLowerCase()
        )
    });

    parser.on("readable", function() {
      let row;

      while ((row = this.read())) {
        const sqlRequest =
          "INSERT OR IGNORE into activite(activite_code, activite_libelle, numero_de_la_fiche_equipement) " +
          "VALUES ($activiteCode, $activiteLibelle, $numeroDeLaFicheEquipement)";
        const sqlParams = {
          $activiteCode: row.activite_code,
          $activiteLibelle: row.activite_libelle,
          $numeroDeLaFicheEquipement: row.numero_de_la_fiche_equipement
        };

        //console.log(sqlRequest, sqlParams.$activiteCode, sqlParams.$activiteLibelle, sqlParams.$numeroDeLaFicheEquipement);
        db.run(sqlRequest, sqlParams, function(err) {
          if (err) console.log(err);
        });
      }
    });

    stream.pipe(parser);

    parser.on("finish", function() {
      console.log("Activités importées");
      resolve(this);
    });

    parser.on("error", err => {
      console.log(err);
      reject(err);
    });
  });
};
const init = function() {
  db.serialize(() => {
    console.log("Création des tables et importation des données");
    createInstallation()
      .then(() => createEquipement())
      .then(() => createActivite())
      .then(() => populateInstallation())
      .then(() => populateEquipement())
      .then(() => populateActivite())
      .catch(err => console.log(err));
  });
};
/* Init car and driver tables if they don't exist */

module.exports = {
  init: init,
  db: db
};
