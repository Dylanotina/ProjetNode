/* Load Modules */
const express = require("express");
const router = express.Router();

/* Load controller */
const ActiviteController = require("../../controller/activiteController");
const activiteController = new ActiviteController();

/**
 * Activite Entity routes
 */

router.get("/code_postal/:code_postal", function(req, res) {
  activiteController.findByCodePostal(req, res);
});

router.get("/", function(req, res) {
  activiteController.findAll(res);
});

router.get("/equipement/:numero_equipement", (req, res) => {
  activiteController.findByNumeroEquipement(req, res);
});

router.get("/recuperer", function(req, res) {
  activiteController.recupererToutesActivites(res);
});

module.exports = router;
