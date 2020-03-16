/**
 * Equipement Entity (ES6 Class)
 */

class Equipement {
  constructor(numeroDeLaFicheEquipement, installation, equipement) {
    this.numeroDeLaFicheEquipement = numeroDeLaFicheEquipement;
    this.installation = installation;
    this.equipement = equipement;
  }
}

module.exports = Equipement;
