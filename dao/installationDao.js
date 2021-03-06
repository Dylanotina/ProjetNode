/* Load Car entity */
const Installation = require("../model/installation");

/* Load DAO Common functions */
const daoCommon = require("./commons/daoCommon");

/**
 * Car Data Access Object
 */
class InstallationDao {
  constructor() {
    this.common = new daoCommon();
  }

  /**
   * Finds all entities.
   * @return all entities
   */
  findAll() {
    const sqlRequest = "SELECT * FROM installation";

    return this.common.findAll(sqlRequest).then(rows => {
      let installations = [];

      for (const row of rows) {
        installations.push(
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
          )
        );
      }
      return installations;
    });
  }

  findByCodePostal(codePostal) {
    const sqlRequest =
      "SELECT * FROM installation WHERE code_postal LIKE $codePostal";
    const sqlParams = {
      $codePostal: "%" + codePostal + "%"
    };

    return this.common.findAllWithParams(sqlRequest, sqlParams).then(rows => {
      let installations = [];

      for (const row of rows) {
        installations.push(
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
          )
        );
      }

      return installations;
    });
  }
  findByNomVille(ville) {
    const sqlRequest =
      "SELECT * FROM installation WHERE nom_de_la_commune LIKE  $ville";
    const sqlParams = { $ville: "%" + ville + "%" };
    return this.common.findAllWithParams(sqlRequest, sqlParams).then(rows => {
      let installations = [];
      for (const row of rows) {
        installations.push(
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
          )
        );
      }
      return installations;
    });
  }

  findByCodeInstallation(codeInstallation) {
    const sqlRequest =
      "SELECT * FROM installation WHERE numero_de_l_installation LIKE $codeInstallation";
    const sqlParams = {
      $codeInstallation: "%" + codeInstallation + "%"
    };

    return this.common.findAllWithParams(sqlRequest, sqlParams).then(rows => {
      let installations = [];

      for (const row of rows) {
        installations.push(
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
          )
        );
      }

      return installations;
    });
  }

  findByNomInstallation(nom) {
    const sqlRequest =
      "SELECT * FROM installation WHERE nom_usuel_de_l_installation LIKE  $nom";
    const sqlParams = { $nom: "%" + nom + "%" };
    return this.common.findAllWithParams(sqlRequest, sqlParams).then(rows => {
      let installations = [];
      for (const row of rows) {
        installations.push(
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
          )
        );
      }

      return installations;
    });
  }
  findByTypeActivite(activite) {
    const sqlRequest =
      "select distinct installation.nom_usuel_de_l_installation," +
      "installation.numero_de_l_installation,installation.code_postal," +
      " installation.nom_de_la_commune from activite, equipement, installation " +
      "where activite.numero_de_la_fiche_equipement = equipement.numero_de_la_fiche_equipement " +
      "and equipement.numero_de_l_installation=installation.numero_de_l_installation " +
      "and activite.activite_libelle like $activite";

    const sqlParams = { $activite: "%" + activite + "%" };
    return this.common.findAllWithParams(sqlRequest, sqlParams).then(rows => {
      let installations = [];
      for (const row of rows) {
        installations.push(
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
          )
        );
      }
      return installations;
    });
  }

  getCodePostal() {
    const sqlRequest =
      "SELECT DISTINCT code_postal from installation order by code_postal asc ";
    return this.common.findAll(sqlRequest).then(rows => {
      let installations = [];
      for (const row of rows) {
        if (row.code_postal !== "") {
          installations.push(row.code_postal);
        }
      }
      return installations;
    });
  }

  getVille() {
    const sqlRequest =
      "SELECT DISTINCT nom_de_la_commune from installation order by nom_de_la_commune asc ";
    return this.common.findAll(sqlRequest).then(rows => {
      let installations = [];
      for (const row of rows) {
        if (row.nom_de_la_commune !== "") {
          installations.push(row.nom_de_la_commune);
        }
      }
      return installations;
    });
  }
}

module.exports = InstallationDao;
