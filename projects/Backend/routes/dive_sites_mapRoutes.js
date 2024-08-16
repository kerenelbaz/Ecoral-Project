const express = require("express");
const dive_sites_mapController = require("./../controllers/dive_sites_mapController");

const router = express.Router();

router
  .route("/")
  .get(dive_sites_mapController.getAllDiveSites)
  .post(dive_sites_mapController.createDiveSite);

router
  .route("/:id")
  .delete(dive_sites_mapController.deleteDiveSite)
  .patch(dive_sites_mapController.updateDiveSite);

module.exports = router;
