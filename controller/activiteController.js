/* Load Car Data Access Object */
const ActiviteDao = require("../dao/activiteDao");

/* Load Controller Common function */
const ControllerCommon = require("./common/controllerCommon");

/**
 * Activite Controller
 */
class ActiviteController {
  constructor() {
    this.activiteDao = new ActiviteDao();
    this.common = new ControllerCommon();
  }

  findByCodePostal(req, res) {
    const codePostal = req.params.code_postal;
    this.activiteDao
      .findByCodePostal(codePostal)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  findByNumeroEquipement(req, res) {
    const numeroEquipement = req.params.numero_equipement;
    this.activiteDao
      .findByNoEquipement(numeroEquipement)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  findAll(res) {
    this.activiteDao
      .findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  recupererToutesActivites(res) {
    this.activiteDao
      .RecupereToutLesLibelles()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }
}

module.exports = ActiviteController;
