const mongoose = require("mongoose");

const diveSitesSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: {
        values: ["Dive site", "Animal", "Plant"],
        message: "type is either: Dive site, Animal, Plant",
      },
    },
    name: {
      type: String,
      unique: true,
    },
    longitude: {
      type: String,
    },
    latitude: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { useCreateIndex: true }
);

const DiveSites = mongoose.model("Site", diveSitesSchema);

module.exports = DiveSites;
