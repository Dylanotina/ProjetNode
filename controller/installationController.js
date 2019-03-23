/* Load Car Data Access Object */
const InstallationDao = require('../dao/installationDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Client entity */
//const Client = require('../model/installation');

/**
 * Client Controller
 */
class InstallationController {

    constructor() {
        this.installationDao = new InstallationDao();
        this.common = new ControllerCommon();
    }



    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
            this.installationDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    findByCodePostal(req,res){
        const codePostal = req.params.code_postal;
        this.installationDao.findByCodePostal(codePostal)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    findByNomVille(req,res){
        const ville = req.params.nom_de_la_commune;
        this.installationDao.findByNomVille(ville)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
    findByNomInstallation(req,res){
        const nom =req.params.nom_usuel_de_l_installation;
        this.installationDao.findByNomInstallation(nom)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
    findByTypeActivite(req,res){
        const activite =req.params.activite_libelle;
        this.installationDao.findbyTypeActivite(activite)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }
}

module.exports = InstallationController;