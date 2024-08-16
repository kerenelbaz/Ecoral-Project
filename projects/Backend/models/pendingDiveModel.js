const mongoose = require("mongoose");

const pendingDiveSchema = new mongoose.Schema(
  {
    // diveCode: {
    //   type: String,
    //   unique: true,
    //   trim: true,
    // },
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
      type: String,
    },
    distance: {
      type: String,
    },
    temp: {
      type: String,
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
      type: Date,
      default: Date.now(),
    },
    reportReceivingDate: {
      type: Date,
    },
    file:{
      type: String,
      // data: Buffer,
      // contentType: String
    },
    age:{
      type: Number,
    },
    gender:{
      type: String,
    }
  },
  { useCreateIndex: true }
);

const PendingsDives = mongoose.model("PendingDive", pendingDiveSchema);

module.exports = PendingsDives;
