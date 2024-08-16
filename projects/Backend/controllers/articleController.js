const Article = require("../models/articleModel");
const APIfeatures = require("../utils/APIfeatures");

exports.getAllArticle = async (req, res) => {
  try {
    console.log(req.query);
    const features = new APIfeatures(Article.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination();
    const articles = await features.findCommand;

    res.status(200).json({
      status: "success",
      results: articles.length,
      data: {
        articles,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createArticle = async (req, res) => {
  try {
    const newArticle = await Article.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        article: newArticle,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const articleToUpdate = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        articleToUpdate,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    const articleToDelete = await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
      message: `${req.params.id} deleted !`,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
