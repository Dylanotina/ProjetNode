/**
 * Client Entity (ES6 Class)
 */

class Installation {
  constructor(
    noDeLInstallation,
    nomUsuelDeLInstallation,
    codePostal,
    departement,
    nomDeLaCommune,
    nomVoie,
    handicape,
    desserteBus,
    desserteTrain,
    desserteMetro,
    localisation
  ) {
    this.noDeLInstallation = noDeLInstallation;
    this.nomUsuelDeLInstallation = nomUsuelDeLInstallation;
    this.codePostal = codePostal;
    this.departement = departement;
    this.nomDeLaCommune = nomDeLaCommune;
    this.nomVoie = nomVoie;
    this.handicape = handicape;
    this.desserteBus = desserteBus;
    this.desserteTrain = desserteTrain;
    this.desserteMetro = desserteMetro;
    this.localisation = localisation;
  }
}

module.exports = Installation;
