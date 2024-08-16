const Dive = require("../models/diveModel");
const APIfeatures = require("../utils/APIfeatures");

const cloudinary = require('cloudinary').v2;
require('dotenv').config({ path: './config.env' });

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.getAllDives = async (req, res) => {
  try {
    console.log(req.query);
    const features = new APIfeatures(Dive.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination();
    const dives = await features.findCommand;

    res.status(200).json({
      status: "success",
      results: dives.length,
      data: {
        dives,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createDive = async (req, res) => {
  try {
    const newDive = await Dive.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        dive: newDive,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateDive = async (req, res) => {
  try {
    console.log("Updating dive with ID:", req.params.id);
    const diveToUpdate = await Dive.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!diveToUpdate) {
      return res.status(404).json({
        status: "fail",
        message: "No dive found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        dive: diveToUpdate,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};


exports.deleteDive = async (req, res) => {
  try {
    const diveToDelete = await Dive.findByIdAndDelete(req.params.id);
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

// New function for deleting an image from Cloudinary
exports.deleteImage = async (req, res) => {
  console.log("deleting image...");
  console.log(req.body.publicId);
  try {
    const { publicId } = req.body;

    // Delete the image
    const deleteResult = await cloudinary.uploader.destroy(publicId);
    res.json(deleteResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDive = async (req, res, next) => {
  const dive = await Dive.findById(req.params.id);
  if (!dive) {
    return next(new AppError('No dive found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      dive
    }
  });
};