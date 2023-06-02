const Transection = require("../models/transectionModel");

exports.addTransection = async (req, res) => {
  const transections = new Transection(req.body);
  console.log(req.body);
  try {
    const response = await transections.save();
    res.json({
      error: false,
      success_msg: "Data submitted successfully",
      response: response,
    });
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};
exports.getTransection = async (req, res) => {
  try {
    const transections = await Transection.find();
    if (transections.length !== 0) {
      res.json({ error: false, transections: transections });
    } else {
      res.json({
        error: true,
        error_msg: "No data found...!",
      });
    }
  } catch (err) {
    res.json({
      error: true,
      error_msg: "Something went wrong...!",
      response: err.toString(),
    });
  }
};
