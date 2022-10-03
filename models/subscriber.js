const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subscribedToChannel: {
    type: String,
  },
  subsribeDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
