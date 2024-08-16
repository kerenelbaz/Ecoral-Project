const express = require('express');
const pendings_divesController = require('./../controllers/pendings_divesController')


const router = express.Router();


router
  .route('/')
  .get(pendings_divesController.getAllPendingsDives)
  .post(pendings_divesController.createPendingDive)
  .delete(pendings_divesController.clearPendingDives);

router
  .route('/:id')
  .delete(pendings_divesController.deletePendingDive)
  .patch(pendings_divesController.updatePendingDive);


module.exports = router;
