/* Load Activite entity */
const Activite = require("../model/activite");
const Equipement = require("../model/equipement");
const Installation = require("../model/installation");

/* Load DAO Common functions */
const daoCommon = require("./commons/daoCommon");

/**
 * Activite Data Access Object
 */
class ActiviteDao {
  constructor() {
    this.common = new daoCommon();
  }

  findAll() {
    const sqlRequest = "SELECT *  FROM activite";
    return this.common.findAll(sqlRequest).then(rows => {
      let activites = [];
      for (const row of rows) {
        activites.push(
          new Activite(
            row.activite_code,
            row.activite_libelle,
            new Equipement(
              row.numero_de_la_fiche_equipement,
              new Installation(
                row.numero_de_l_installation,
                row.nom_usuel_de_l_installation,
                row.code_postal,
                row.departement,
                row.nom_de_la_commune,
                row.nom_de_la_voie,
                row.acces_handicape,
                row.desserte_bus,
                row.desserte_train,
                row.desserte_metro,
                row.localisation
              ),
              row.equipement
            )
          )
        );
      }
      return activites;
    });
  }

  findByNoEquipement(numeroEquipement) {
    const sqlRequest =
      "select activite.activite_code, activite.activite_libelle, " +
      "equipement.numero_de_la_fiche_equipement," +
      "installation.numero_de_l_installation, installation.nom_usuel_de_l_installation, installation.nom_de_la_commune, installation.code_postal " +
      "from activite " +
      "inner join equipement on equipement.numero_de_la_fiche_equipement = activite.numero_de_la_fiche_equipement " +
      "inner join installation on installation.numero_de_l_installation = equipement.numero_de_l_installation " +
      "where equipement.numero_de_la_fiche_equipement = $numeroEquipement";

    const sqlParams = {
      $numeroEquipement: numeroEquipement
    };
    return this.common.findAllWithParams(sqlRequest, sqlParams).then(rows => {
      let activites = [];
      for (const row of rows) {
        activites.push(
          new Activite(
            row.activite_code,
            row.activite_libelle,
            new Equipement(
              row.numero_de_la_fiche_equipement,
              new Installation(
                row.numero_de_l_installation,
                row.nom_usuel_de_l_installation,
                row.code_postal,
                row.departement,
                row.nom_de_la_commune,
                row.nom_de_la_voie,
                row.acces_handicape,
                row.desserte_bus,
                row.desserte_train,
                row.desserte_metro,
                row.localisation
              ),
              row.equipement
            )
          )
        );
      }
      return activites;
    });
  }

  findByCodePostal(codePostal) {
    const sqlRequest =
      "select activite.activite_code, activite.activite_libelle, " +
      "equipement.numero_de_la_fiche_equipement," +
      "installation.numero_de_l_installation, installation.nom_usuel_de_l_installation, installation.nom_de_la_commune, installation.code_postal " +
      "from activite " +
      "inner join equipement on equipement.numero_de_la_fiche_equipement = activite.numero_de_la_fiche_equipement " +
      "inner join installation on installation.numero_de_l_installation = equipement.numero_de_l_installation " +
      "where installation.code_postal = $codePostal";

    const sqlParams = {
      $codePostal: codePostal
    };

    return this.common.findAllWithParams(sqlRequest, sqlParams).then(rows => {
      let activites = [];

      for (const row of rows) {
        activites.push(
          new Activite(
            row.activite_code,
            row.activite_libelle,
            new Equipement(
              row.numero_de_la_fiche_equipement,
              new Installation(
                row.numero_de_l_installation,
                row.nom_usuel_de_l_installation,
                row.code_postal,
                row.departement,
                row.nom_de_la_commune,
                row.nom_de_la_voie,
                row.acces_handicape,
                row.desserte_bus,
                row.desserte_train,
                row.desserte_metro,
                row.localisation
              ),
              row.equipement
            )
          )
        );
      }

      return activites;
    });
  }
  RecupereToutLesLibelles() {
    const sqlRequest =
      "select distinct activite.activite_libelle from activite";
    return this.common.findAll(sqlRequest).then(rows => {
      let activites = [];
      for (const row of rows) {
        activites.push(
          new Activite(
            row.activite_code,
            row.activite_libelle,
            new Equipement(
              row.numero_de_la_fiche_equipement,
              new Installation(
                row.numero_de_l_installation,
                row.nom_usuel_de_l_installation,
                row.code_postal,
                row.departement,
                row.nom_de_la_commune,
                row.nom_de_la_voie,
                row.acces_handicape,
                row.desserte_bus,
                row.desserte_train,
                row.desserte_metro,
                row.localisation
              ),
              row.equipement
            )
          )
        );
      }
      return activites;
    });
  }
}

module.exports = ActiviteDao;
