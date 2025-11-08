const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  optionText: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    default: "https://via.placeholder.com/300x200.png?text=Futsal+Poll",
  },
  filename: {
    type: String,
    default: "pollimage",
  },
});

const pollSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    options: [optionSchema],
    image: imageSchema,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // assuming you’ll have a User model for admin
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    totalVotes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Poll", pollSchema);
