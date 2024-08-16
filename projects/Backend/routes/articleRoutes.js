const express = require('express');
const articleController = require('./../controllers/articleController')

const router = express.Router();


router
  .route("/")
  .get(articleController.getAllArticle) 
  .post(articleController.createArticle)

router
  .route("/:id")
  .delete(articleController.deleteArticle)
  .patch(articleController.updateArticle); 


module.exports = router;
