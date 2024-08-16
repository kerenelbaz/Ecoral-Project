const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    articleCode: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    doi: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    dateArticle: {
      type: Date,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    tags: {
      type: [
        {
          name: String,
          color: String,
          description: String,
        },
      ],
      default: [],
    },
  },
  { useCreateIndex: true }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
