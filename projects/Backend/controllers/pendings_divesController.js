const PendingDive = require("../models/pendingDiveModel");
const APIfeatures = require("../utils/APIfeatures");

exports.getAllPendingsDives = async (req, res) => {
  try {
    console.log(req.query);
    const features = new APIfeatures(PendingDive.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination();
    const pendingDives = await features.findCommand;

    res.status(200).json({
      status: "success",
      results: pendingDives.length,
      data: {
        pendingDives,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createPendingDive = async (req, res) => {
  try {
    const newPendingDive = await PendingDive.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        pendingDive: newPendingDive,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updatePendingDive = async (req, res) => {
  try {
    const pendingDiveToUpdate = await PendingDive.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        pendingDiveToUpdate,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.clearPendingDives = async (req, res) => {
  try {
    // Delete all documents from the pendingDives collection
    await PendingDive.deleteMany({});

    res.status(200).json({
      status: "success",
      message: "All pending dives cleared successfully",
    });
  } catch (err) {
    // If an error occurs during deletion
    console.error("Error clearing pending dives:", err);
    res.status(500).json({
      status: "fail",
      message: "An error occurred while clearing pending dives",
    });
  }
};

exports.deletePendingDive = async (req, res) => {
  try {
    const pendingDiveToDelete = await PendingDive.findByIdAndDelete(req.params.id);
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
