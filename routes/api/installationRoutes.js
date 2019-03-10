/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const InstallationController = require('../../controller/installationController');
const installationController = new InstallationController();

/**
 * Installation Entity routes
 */


router.get('/', function (req, res) {
    installationController.findAll(res);
});

router.get('/code_postal/:code_postal', function (req, res) {
    installationController.findByCodePostal(req,res);
});

router.get('/ville/:nom_de_la_commune',function(req,res){
    installationController.findByNomVille(req,res);
});

router.get('/nom/:nom_usuel_de_l_installation',function(req,res){
    installationController.findByNomInstallation(req,res);
});



module.exports = router;