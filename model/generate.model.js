const mongoose = require("mongoose");

const generateContentSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Generations", generateContentSchema);
