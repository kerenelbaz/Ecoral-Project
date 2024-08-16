const mongoose = require("mongoose");

const diveSchema = new mongoose.Schema(
  {
    diveCode: {
      type: String,
      unique: true,
      trim: true,
      // required: true,
    },
    objectCode: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    diveSite: {
      type: String,
    },
    objectGroup: {
      type: String,
    },
    specie: {
      type: String,
    },
    idCode_photographerName: {
      type: String,
    },
    imageLocation: {
      type: String,
    },
    AR: {
      type: String,
    },
    humanWildlifeInteraction: {
      type: String,
    },
    reportType: {
      type: String,
    },
    typeOfDive: {
      type: String,
    },
    rankOfDive: {
      type: String,
    },
    media: {
      type: String,
    },
    documentation: {
      type: String,
    },
    ageOfDiver: {
      type: String,
    },
    sexOfDiver: {
      type: String,
    },
    maxDepth: {
      type: Number,
    },
    distance: {
      type: Number,
    },
    temp: {
      type: Number,
    },
    userDescription: {
      type: String,
      trim: true,
    },
    researcherComment: {
      type: String,
      trim: true,
    },
    linkURL: {
      type: String,
    },
    loggedBy: {
      type: String,
    },
    loggingDate: {
      type: String,
    },
    reportReceivingDate: {
      type: Date,
      default: Date.now(),
    },
    fileLink: {
      type: String,
    },
  },
  { useCreateIndex: true }
);

const Dive = mongoose.model("Dive", diveSchema);

module.exports = Dive;
